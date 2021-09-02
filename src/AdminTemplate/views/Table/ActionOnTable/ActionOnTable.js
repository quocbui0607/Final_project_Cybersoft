import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, alpha } from "@material-ui/core/styles";
import ModalOpen from "../ModalActions/ModalOpen";

const useStyleSearchInput = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 1),
    display: "inline-block",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    borderRadius: "5px",
    border: "1px solid lightgray",
    color: "inherit",
    padding: "4px 8px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function ActionOnTable(props) {
  const inputSearchStyle = useStyleSearchInput();
  return (
    <div className="mb-4 d-flex align-items-center justify-content-between">
      <div className={inputSearchStyle.search}>
        <div className={inputSearchStyle.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: inputSearchStyle.inputRoot,
            input: inputSearchStyle.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div>
        <ModalOpen pageSelected={props.pageSelected}/>
      </div>
    </div>
  );
}
