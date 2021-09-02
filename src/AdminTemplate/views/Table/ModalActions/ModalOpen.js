import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ModalOnOpen from "./ModalInfo";

const useStyleAddButton = makeStyles((theme) => ({
  button: {
    margin: 0,
    backgroundColor: "green",
    alignSelf: "end",
    "&:hover": {
      backgroundColor: alpha("#008000", 0.8),
    },
  },
}));

export default function ModalActions(props) {
  const addButtonStyle = useStyleAddButton();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={addButtonStyle.button}
        startIcon={<AddIcon></AddIcon>}
        onClick={handleOpen}
      >
        {props.pageSelected === "Manage Users" ? "Thêm người dùng" : "Thêm phim"}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalOnOpen
          addButtonStyle={addButtonStyle}
          pageSelected={props.pageSelected}
        ></ModalOnOpen>
      </Modal>
    </div>
  );
}
