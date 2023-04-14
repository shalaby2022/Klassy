import React from "react";
import ListTable from "./List";
import Sidebar from "./Sidebar";
import "./styles.scss";

const AdminScreen = () => {
  return (
    <div className="container-fluid g-0 row  dashContainer">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <ListTable />
      </div>
    </div>
  );
};

export default AdminScreen;
