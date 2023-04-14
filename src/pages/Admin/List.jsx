import Table from "react-bootstrap/Table";
import React from "react";
import { tableInfo } from "./TableList";

const ListTable = () => {
  return (
    <Table striped bordered hover responsive className="text-center">
      <thead>
        <tr className="bg-info text-white">
          <th className="pb-4">Name</th>
          <th className="pb-4">Detail</th>
          <th className="pb-4">Price</th>
          <th className="pb-4">Discount</th>
          <th className="pb-4">total Price</th>
          <th className="pb-4">Image</th>
          <th className="pb-4">Category</th>
          <th className="pb-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableInfo.length > 0 &&
          tableInfo.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.detail}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{item.totalPrice}</td>
              <td>
                <img src={item.image} alt="image" className="imgStyle" />
              </td>
              <td>Cake</td>
              <td>
                <div className="flex-sm-column flex-md-row">
                  <button
                    onClick={() => console.log("Update")}
                    className="btn btn-warning mx-2 text-light d-inline-block btn_size col-md-12  my-1 col-6"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => console.log("Delete")}
                    className="btn btn-danger text-light d-inline-block btn_size  my-1 col-md-12 col-6"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ListTable;
