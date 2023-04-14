import React from "react";
import { Buttons } from "./Buttons";
import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="bg-info drawer">
      <div className="Admin_header">
        <h5>Admin Dashboard</h5>
        <hr />
      </div>
      <div>
        {Buttons.length > 0 &&
          Buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => console.log("object")}
              className="btnWrapper btn btn-light text-info flex-sm-column flex-md-row"
            >
              <btn.icon className="fs-2 px-2" /> {btn.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;

// return (
//   <Box sx={{ display: "flex" }} className="col-3">
//     <CssBaseline />
//     <AppBar
//       position="fixed"
//       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//     ></AppBar>
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//       variant="permanent"
//       anchor="left"
//     >
//       <Toolbar className="bg-danger">
//         <Typography className="fs-5 text-white">Admin DashBoard</Typography>
//       </Toolbar>
//       <List className="bg-danger">
//         {["Qualifacations ", "Jobs", "Applications ", "Requests"].map(
//           (text, index) => (
//             <ListItem key={text}>
//               <ListItemButton
//                 sx={{
//                   background: "#fff",
//                   marginY: 0.8,
//                   width: "80%",
//                   borderRadius: 3,
//                 }}
//               >
//                 <ListItemIcon>
//                   {index % 2 === 0 ? (
//                     <InboxIcon className="text-danger" />
//                   ) : (
//                     <MailIcon className="text-danger" />
//                   )}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   className="text-danger fw-bolder"
//                 />
//               </ListItemButton>
//             </ListItem>
//           )
//         )}
//       </List>
//       <Box component="main">
//         <ListTable />
//       </Box>
//     </Drawer>
//   </Box>
// );
