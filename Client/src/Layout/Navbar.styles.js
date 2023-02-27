import { AppBar as MuiAppBar, InputBase, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { COLORS } from "../styles/theme";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "70%",
  },
}));

// export const Search = styled("div")`
//   position: relative;
//   border-radius: 4px;
//   margin-right: ;
//   margin-left: 0;
//   width: 100%;
//   background-color: ${COLORS.WHITE};
//   "&:hover": {
//     background-color: ${COLORS.WHITE};
//   }
// `;

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const AppBar = styled(MuiAppBar)`
  background-color: ${COLORS.DARK_GREY};
`;


