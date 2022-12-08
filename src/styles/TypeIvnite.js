import { Paper } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";

export const InviteImg = styled("img")(({ theme }) => ({
  backgroundImage: `url("sale.png")`,
}));

const options = {
  shouldForwardProp: (prop) => prop !== "hoverShadow",
};

export const StyledPaper = styled(
  Paper,
  options
)(({ theme, hoverShadow = `` }) => ({
  borderRadius: "7px",
  transition: theme.transitions.create(["background-image"], {
    duration: theme.transitions.duration.standard,
  }),
  "& .title": {
    transform: "translateY(-50px)",
    opacity: "0",
    padding: "0 0 2rem 1rem",
    textAlign: 'center',
    color: "white",
    fontSize: "2rem",
    fontFamily: theme.typography.fontFamily,
    transition: theme.transitions.create(["all"], {
      duration: ".6s",
    }),
  },
  "&:hover": {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(131, 131, 131, 0.562)),${hoverShadow}`,
    cursor: "pointer",
    "& .title": {
      opacity: 1,
      transform: "translate(0)",
    },
  },
}));
