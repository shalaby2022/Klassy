import React from "react";
import { Jobs } from "./jobs";
import JobCard from "../../components/JobCard";
import "./styles.css";

const JobList = () => {
  return (
    <div className="JobsContainer">
      <div className="d-flex align-items-center px-3 border-bottom border-3  py-2 bg-body ">
        <div className="col-12 col-md-9">
          <h3>Klassy</h3>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-end">
          <div className="mx-4">
            <button className="btn d-inline-block">
              <img src="../../../assets/user.png" alt="logo" className="icon" />
            </button>
          </div>
          <div className="me-2">
            <button className="btn d-inline-block">
              <img
                src="../../../assets/menu.png"
                alt="logo"
                className="icon_2"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="JobsWrapper">
        <div className="px-2 mt-2 mb-3">
          <h4>Jobs in Cairo</h4>
          <h6>4,193 Jobs found</h6>
          <button className="btn btn-info text-primary">Filters</button>
        </div>
        {Jobs.map((info) => (
          <JobCard info={info} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
