import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import Confetti from "./Confetti";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: "1.5em 3em",
    outline: "none",
  },
}));

const PlayAgain = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {open && <Confetti />}
            <h2>Gratulacje!</h2>
            <Button variant="contained" onClick={handleClose}>
              Grasz dalej?
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PlayAgain;
