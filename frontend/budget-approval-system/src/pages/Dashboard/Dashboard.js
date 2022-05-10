import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import { styled, ThemeProvider } from "@mui/material/styles";
import Deposits from "components/Deposits/Deposits";
import DialogComponent from "components/DialogComponent/DialogComponent";
import {
  mainListItems,
  secondaryListItems,
} from "components/Listitems/listItems";
import NewBill from "components/NewBill/NewBill";
import Orders from "components/Orders/Orders";
import AppTheme from "Constants/AppTheme";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "util/Firebase/FirebaseSetup";
import { clearLocalStorage } from "util/Storage/Storage";
import { toast } from "react-toastify";
import styles from "./Dashboard.style";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent(props) {
  const [open, setOpen] = useState(true);
  const [openNewBill, setOpenNewBill] = useState(false);

  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        clearLocalStorage();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error, {
          theme: "dark",
          position: "top-center",
        });
      });
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {props.heading ? props.heading : "Dashboard"}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={styles.toolbar}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={styles.paper}>
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              {!props.heading && (
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                    <Button
                      variant="contained"
                      onClick={() => setOpenNewBill(true)}
                    >
                      Submit New Bill
                    </Button>
                  </Paper>
                </Grid>
              )}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
      <DialogComponent
        title="New Bill"
        open={openNewBill}
        handleClose={() => {
          setOpenNewBill(false);
        }}
      >
        <NewBill />
      </DialogComponent>
    </ThemeProvider>
  );
}

export default function Dashboard(props) {
  return <DashboardContent heading={props.heading ? props.heading : null} />;
}
