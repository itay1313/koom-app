import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { SignIn } from "@clerk/nextjs";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CoolButton from "./CoolButton";

export default function ModalSignUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CoolButton onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions sx={{ position: "absolute", right: 0 }}>
          <CloseTwoToneIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
        </DialogActions>
        <DialogContent>
          <SignIn />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
