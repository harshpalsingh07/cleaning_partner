import React, { useEffect } from "react";
import DataTable from "../../../Utils/DataTable.jsx";

function List() {
  useEffect(() => {
    document.title = "Categories | Admin";
  }, []);
  const tableData = {
    headers: [
      {
        column: "Row Checkbox",
        index: "row_checkbox",
      },
      {
        column: "Name",
        index: "name",
      },
      {
        column: "status",
        index: "status",
      },

      {
        column: "createdAt",
        index: "createdAt",
      },
      {
        column: "Action",
        index: "action",
      },
    ],
    type: "category",
    title: "Bookings",
  };
  return <>{<DataTable table={tableData} />}</>;
}

export default List;
