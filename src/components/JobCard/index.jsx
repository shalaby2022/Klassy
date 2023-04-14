import React from "react";

const JobCard = ({ info }) => {
  // console.log(info);
  return (
    <div className="border-bottom border-top mb-3 bg-white">
      <div className="p-2">
        <div className="col-12 d-flex align-items-center">
          <div className="col-md-9">
            <h6>{info.field}</h6>
            <p>
              {info.name.agency} - <span>{info.name.address}</span>
            </p>
            <p>{info.hours}</p>
          </div>
          <div className="imgWrapper bg-info col-md-3">
            <img src={info.image} className="image" alt="company image" />
          </div>
        </div>
        <div className="bg-secondary period text-center">
          <p className="p-1">{info.hours}</p>
        </div>
        <div>
          <p>{info.experience}</p>
        </div>
        <div>
          <p>{info.details.position}</p>
          <p>{info.details.also}</p>
          <div className="d-flex col-9 flex-md-wrap">
            {info?.details?.rquirments &&
              info?.details?.rquirments.map((item) => (
                <p className="px-1">{item}</p>
              ))}
          </div>
        </div>
        <div>
          <button className="btn btn-primary px-4">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
