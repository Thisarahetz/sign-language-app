import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface Props {
  open: boolean;
  handleClose: () => void;
  videoUrl: string; // URL of the uploaded video
  predicted: string; // Predicted sign from the ML model
  result: boolean; // True if the prediction matches, false otherwise
  isLoader: boolean; // Whether the loader is active
}

export default function VideoResultModal({
  open,
  handleClose,
  videoUrl,
  predicted,
  result,
  isLoader,
}: Props) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Prediction Result
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" alignItems="center">
            {isLoader ? (
              // Custom loading animation
              <Box display="flex" flexDirection="column" alignItems="center">
                <div className="loading-animation">
                  <div className="loader-circle"></div>
                  <div className="loader-circle"></div>
                  <div className="loader-circle"></div>
                </div>
                <Typography variant="body1" sx={{ mt: 2 }} color="text.secondary">
                  Waiting for analysis, please hold on...
                </Typography>
              </Box>
            ) : (
              // Video and result content
              <>
                <video
                  src={videoUrl}
                  controls
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                  }}
                />
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  {result ? (
                    <Typography variant="h6" color="success.main">
                      ✅ Prediction Matched!
                    </Typography>
                  ) : (
                    <Typography variant="h6" color="error.main">
                      ❌ Prediction Mismatch
                    </Typography>
                  )}
                </Box>
                <Typography variant="body1" color="text.secondary">
                  <strong>Predicted Sign:</strong> {predicted?.toUpperCase()}
                </Typography>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} disabled={isLoader}>
            {isLoader ? "Analyzing..." : "Close"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
