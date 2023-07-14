import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  Logout,
  PersonAdd,
  Settings,
  AccountCircle,
  Fullscreen,
  ManageAccounts,
  Mail,
  Explore,
} from "@mui/icons-material";
import {
  ProSidebar,
  MenuItem as UpperMenuIem,
  Menu as SidebarMenu,
} from "react-pro-sidebar";
import styled from "styled-components";
import UpperMenuContains from "./UpperMenuContains";
import { Link } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import screenfull from "screenfull";

const UpperMenuContainer = styled.div`
  width: 95vw;
  height: 88vh;
  display: flex;
  flex-direction: column;
`;
const UpperMenu = styled(Box)`
  display: flex;
  height: 100%;
`;
const ItemsContainer = styled.div`
  flex: 5;
`;
const Topbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("Academic");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };
  const Item = ({ title, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <UpperMenuIem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
      >
        <Typography variant="h5">{title}</Typography>
      </UpperMenuIem>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display="flex">
        <Link to="/admin">
          <Box
            component="img"
            sx={{ height: 50, mr: "30px" }}
            alt="Logo"
            src="/assets/infotute1.gif"
          />
        </Link>
        <IconButton onClick={handleClickMenu}>
          <Box
            component="img"
            sx={{ height: "32px", width: "32px", mr: "10px" }}
            alt="The house from the offer."
            src="/assets/megaMenu.svg"
          />
        </IconButton>

        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Box
            component="img"
            sx={{ height: "40px", width: "220px", mr: "10px" }}
            alt="The house from the offer."
            src="/assets/infotute2.gif"
          />
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold" color="#ec3535">
          Academic Year 2022-23
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton sx={{ marginLeft: "10px" }}>
          <Fullscreen
            onClick={() => {
              if (screenfull.isEnabled) {
                screenfull.toggle();
              } else {
                // Ignore or do something else
              }
            }}
            sx={{ fontSize: "30px" }}
          />
        </IconButton>
        <IconButton>
          <Link sx={{ mt: 2 }} to="/admin/settings">
            <SettingsOutlinedIcon
              sx={{ mt: 0.8, fontSize: "30px", color: "#807f7f" }}
            />{" "}
            {/*  Main/ Original settings icon */}
          </Link>
        </IconButton>

        <IconButton onClick={handleClick}>
          <PersonOutlinedIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              navigate("/profile/staff-home");
              handleClose();
            }}
          >
            <ListItemIcon>
              {" "}
              <AccountCircle fontSize="small" />{" "}
            </ListItemIcon>
            My Details
          </MenuItem>
          
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              {" "}
              <Settings fontSize="small" />{" "}
            </ListItemIcon>
            Institute Settings
          </MenuItem>

          <MenuItem    onClick={() => {
              navigate("/roles-permissions");
              handleClose();
            }}>
            <ListItemIcon>
              {" "}
              <ManageAccounts fontSize="small" />{" "}
            </ListItemIcon>
            Roles & Permissions
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              {" "}
              <Mail fontSize="small" />{" "}
            </ListItemIcon>
            Inbox
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Explore fontSize="small" />
            </ListItemIcon>
            Change Academic Session
          </MenuItem>

          <MenuItem onClick={ () => {
                navigate("/change-password");
                handleClose();
          }}>
            <ListItemIcon>
              <Explore fontSize="small" />
            </ListItemIcon>
            Change Password
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

        </Menu>

        <Menu
          anchorEl={anchorElMenu}
          id="account-menu"
          open={openMenu}
          onClose={handleCloseMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 300,
                height: 300,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <UpperMenuContainer>
            <Typography variant="h2" py={2} px={1}>
              Modules
            </Typography>
            <Divider />
            <UpperMenu
              sx={{
                "& .pro-sidebar": {
                  minWidth: "100px",
                  width: "100%",
                  height: "100%",
                },
                "& .pro-sidebar-inner": {
                  background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                  backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                  padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                  color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                  color: "#6870fa !important",
                },
              }}
            >
              <ProSidebar style={{ flex: 1 }}>
                <SidebarMenu iconShape="square">
                  <Item
                    title="Academic"
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Administration"
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Users"
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Communication"
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Finance"
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Others"
                    selected={selected}
                    setSelected={setSelected}
                  />
                </SidebarMenu>
              </ProSidebar>
              <ItemsContainer onClick={handleCloseMenu}>
                <UpperMenuContains selected={selected} />
              </ItemsContainer>
            </UpperMenu>
          </UpperMenuContainer>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
