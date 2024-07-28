export type NotificationsType = {
    id: number;
    user_id: number;
    body: string;
    title: string;
    type: string;
    is_read: boolean;
    is_clicked: boolean;
    url: string;
};