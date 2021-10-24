import React, { useEffect, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, alpha } from "@material-ui/core/styles";
import ModalAdd from "../ModalAdd/ModalAdd";
import { useDispatch, useSelector } from "react-redux";
import { sendKeyword } from "../../ManageUsers/modules/actions";
import { sendKeywordMovies } from "../../ManageMovies/modules/actions";

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
  const dispatch = useDispatch();
  const keywords = useSelector((state) => {
    if (props.pageSelected === "Manage Users") {
      return state.ManageUsersReducer.keywords;
    } else if (props.pageSelected === "Manage Movies") {
      return state.ManageMoviesReducer.keywords;
    }
  });

  const [valueKeywords, setKeywords] = useState(keywords);

  useEffect(() => {
    setKeywords(keywords);
  }, [keywords]);

  if (props.pageSelected === "Manage Users") {
    const handleSearchUser = (keywords) => {
      dispatch(sendKeyword(keywords));
    };
    return (
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <div className={inputSearchStyle.search}>
          <div className={inputSearchStyle.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Tìm kiếm theo tài khoản"
            classes={{
              root: inputSearchStyle.inputRoot,
              input: inputSearchStyle.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={valueKeywords}
            onChange={(e) => handleSearchUser(e.target.value)}
          />
        </div>
        <div>
          <ModalAdd
            pageSelected={props.pageSelected}
            rows={props.rows}
            renderNoti={props.renderNoti()}
          />
        </div>
      </div>
    );
  } else
   if (props.pageSelected === "Manage Movies") {
    const handleSearchUser = (keywords) => {
      dispatch(sendKeywordMovies(keywords));
    };
    return (
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <div className={inputSearchStyle.search}>
          <div className={inputSearchStyle.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Tìm kiếm theo tên phim"
            classes={{
              root: inputSearchStyle.inputRoot,
              input: inputSearchStyle.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={valueKeywords}
            onChange={(e) => handleSearchUser(e.target.value)}
          />
        </div>
        <div>
          <ModalAdd
            pageSelected={props.pageSelected}
            rows={props.rows}
            renderNoti={props.renderNoti()}
          />
        </div>
      </div>
    );
  }
}
