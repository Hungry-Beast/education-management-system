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
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  ProSidebar,
  MenuItem as UpperMenuIem,
  Menu as SidebarMenu,
} from "react-pro-sidebar";
import styled from "styled-components";
import UpperMenuContains from "./UpperMenuContains";
import { Link } from "react-router-dom";

const UpperMenuContainer = styled.div`
  width: 75vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;
const UpperMenu = styled(Box)`
  display: flex;
  height:100%;
`;
const ItemsContainer = styled.div`
  flex: 5;
`;
const Topbar = () => {
  const theme = useTheme();
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
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      
      <Box display="flex">
        <Link to="/admin">
          <Box
            component="img"
            sx={{ height: 40}}
            alt="Logo"
            src="/logo192.png"
          />
        </Link>
        <IconButton sx={{marginLeft: "10px" }} >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" > Infotute EMS </Typography>
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold" color="#ae261d" > Academic Year 2022-23 </Typography>
      </Box>


      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton onClick={handleClickMenu}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
          <PersonOutlinedIcon />
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
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
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
          // onClick={handleCloseMenu}
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
                    title="User"
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
              <ItemsContainer>
                <UpperMenuContains selected={selected}/>
              </ItemsContainer>
            </UpperMenu>
          </UpperMenuContainer>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
