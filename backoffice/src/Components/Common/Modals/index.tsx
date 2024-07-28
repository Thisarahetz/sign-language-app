import Dialog from "@mui/material/Dialog";

interface CategoryModalProps {
  open: boolean;
  close: () => void;
  modalTitle: string;
  children: React.ReactNode;
}

function CustomModal({
  open,
  close,
  modalTitle,
  children,
}: CategoryModalProps) {
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        title={modalTitle}
        maxWidth="lg"
        fullWidth
      >
        {children}
      </Dialog>
    </>
  );
}

export default CustomModal;
