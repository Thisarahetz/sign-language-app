import { Popover } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import {
  ClickNotificationAsRead,
  GetAllNotifications,
  ReadAllNotifications,
} from "@src/Api/Services/notifications";
import { useQuery } from "@tanstack/react-query";
import { NotificationsType } from "@src/Api/Services/notifications/type";
import { capitalizeFirstLetter, limitParagraphToWords } from "@helpers/index";
import EventSource from "@src/Api/Event";

export default function NotficationView() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorE, setAnchorE] = useState<HTMLButtonElement | null>(null);
  const handleOpen = async (e: any) => {
    setOpen(true);
    setAnchorE(e.currentTarget);
    await handleReadAllNotifications();
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorE(null);
  };

  const [notifications, setNotifications] = useState<NotificationsType[]>([]);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => GetAllNotifications(),
  });

  //handle notification click
  const handleNotificationClick = async (id: number) => {
    await ClickNotificationAsRead(id);
    refetch();
  };

  //handle notification click
  const handleReadAllNotifications = async () => {
    const notifications_ids = notifications.map(
      (notification) => notification.id
    );

    await ReadAllNotifications(notifications_ids.map(String));
    refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      setNotifications(data.data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    const eventSource = EventSource();

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      if (newMessage && newMessage.id) {
        setNotifications((prev) => [newMessage, ...prev]);
      }
    };

    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      eventSource.close();
    };

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  //count the number of unread notifications
  const unreadNotifications = notifications.filter(
    (notification) => notification.is_read === false
  );

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        onClick={handleOpen}
        style={{
          cursor: "pointer",
        }}
      >
        <MailIcon color="action" />
      </Badge>
      <Popover
        open={open}
        anchorEl={anchorE}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "36rem",
            height: "24rem",
            maxHeight: "24rem",
            maxWidth: "36rem",
            overflowX: "hidden",
          }}
        >
          {
            //loading state
            isLoading && <div>Loading...</div>
          }
          {
            //error state
            isError && <div>Error fetching notifications</div>
          }
          {
            //no notifications state
            isSuccess && notifications.length === 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                No notifications available
              </div>
            )
          }
          {
            //success state
            isSuccess &&
              notifications.length > 0 &&
              notifications.map((notifications: NotificationsType, index) => (
                <div
                  key={notifications.id}
                  style={{
                    borderBottom: "1px solid var(--border_1)",
                    padding: "0.5rem",
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")} // Hover opacity down effect
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  onClick={() => {
                    navigate(notifications?.url);
                    handleNotificationClick(notifications.id);
                    handleClose();
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <MailIcon color="action" />
                    <div className="subtitle_wrapper">
                      <div className="text_13 weight_500 color_gray_1 text_upper">
                        {capitalizeFirstLetter(notifications?.type)}
                      </div>
                      <div
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {limitParagraphToWords(notifications?.title, 30)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </Popover>
    </>
  );
}
