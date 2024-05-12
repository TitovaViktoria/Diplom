import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from 'react-router-dom';


import "./styles.scss";

const Table = ({
  columns,
  data
}) => {

  const navigate = useNavigate();


  const columnStyles = {
    paddingLeft: '10px',
    paddingRight: '10px',
    textAlign: "center",
    borderBottom: "1px solid black",
    height: "10 vh"

  };

  const headerStyles = {
    backgroundColor: "#F5B92B",
    textAlign: "center",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    height: "10 vh"
  };

  const onRowDoubleClick = (e) => {
    navigate(`/transport/${e.data.registerSign}`);
  }


  return (
      <DataTable
      className="table"
      value={data}
      scrollHeight="flex"
      removableSort
      selectionPageOnly
      selectionMode="single"
      columnResizeMode="fit"
      emptyMessage=" "
      onRowDoubleClick={onRowDoubleClick}
      sortField="id"
      sortOrder="1"
    >
      {columns.map(({ field, header}) => (
        <Column
          key={field}
          field={field}
          header={header}
          alignHeader={"center"}
          style={{ minHeight: "100px" }}
          bodyStyle={columnStyles}
          headerStyle={headerStyles}
        />
      ))}
    </DataTable>
  );
};

export default Table;
