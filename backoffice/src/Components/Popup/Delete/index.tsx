import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

type Props = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
};

export default function DeletePopup({
  open,
  handleClose,
  handleSubmit,
}: Props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "unset",
              }}
            >
              Do you want to delete this farm?
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3.5,
                marginTop: 2,
              }}
            >
              <a
                href="#"
                className="modal-button-large   modal-cancel-button "
                onClick={handleClose}
              >
                <div>No</div>
              </a>
              <a
                href="#"
                className="modal-button-large   modal-logout-button "
                onClick={() => {
                  handleSubmit();
                }}
              >
                <div>Yes</div>
              </a>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
