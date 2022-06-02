import React, { useState } from "react";

import MaterialTable from "material-table";
import { Link } from "@material-ui/core";
function App() {
  const [tableData, setTableData] = useState([
    {
      name: "paerFils",
      code: 31234,
      phone: 7894561230,
      age: null,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 23456,
      fee: 78456,
      uom: "EA",
      gr: "23456",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          GRN Posted
        </Link>
      ),
    },
    {
      name: "Iohnset ",
      code: 41237,
      phone: 7845621590,
      age: 35,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 98123,
      fee: 456125,
      uom: "EA",
      gr: "23456",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          GRN Posted
        </Link>
      ),
    },
    {
      name: "Ionix Set",
      code: 901234,
      phone: 741852912,
      age: 17,
      poline: 2,
      desc: "PET Bottle Scrap",
      inr: 674522,
      fee: 458796,
      uom: "EA",
      gr: "23456",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Accepted
        </Link>
      ),
    },
    {
      name: "Vikas PO",
      code: 76401,
      phone: 9876543210,
      age: 20,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: "Mumbai",
      fee: 874569,
      uom: "EA",
      gr: "-",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Review Req
        </Link>
      ),
    },
    {
      name: "Ariux",
      code: 21789,
      phone: 7845621301,
      age: 25,
      poline: 2,
      desc: "PET Bottle Scrap",
      inr: "Patna",
      fee: 748521,
      uom: "EA",
      gr: "-",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Dispatched
        </Link>
      ),
    },
    {
      name: "Mohan CP",
      code: 41237,
      phone: 7845621590,
      age: 35,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 98123,
      fee: 456125,
      uom: "EA",
      gr: "-",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Profile
        </Link>
      ),
    },
    {
      name: "Apro Films",
      code: 901234,
      phone: 741852912,
      age: 17,
      poline: 2,
      inr: 674522,
      fee: 458796,
      uom: "EA",
    },
    {
      name: "Vikas",
      code: 76401,
      phone: 9876543210,
      age: 20,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 35698,
      fee: 874569,
      uom: "EA",
      gr: "-",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Accepted
        </Link>
      ),
    },
    {
      name: "Raj",
      code: 31234,
      phone: 7894561230,
      age: null,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 23456,
      fee: 78456,
      uom: "EA",
      gr: "23456",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Accepted
        </Link>
      ),
    },
    {
      name: "Mohan",
      code: 41237,
      phone: 7845621590,
      age: 35,
      poline: 1,
      inr: 98123,
      fee: 456125,
      uom: "EA",
    },
    {
      name: "PO",
      code: 901234,
      phone: 741852912,
      age: 17,
      poline: 2,
      desc: "PET Bottle Scrap",
      inr: 674522,
      fee: 458796,
      uom: "EA",
      gr: "-",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Open
        </Link>
      ),
    },
    {
      name: "Vikas",
      code: 76401,
      phone: 9876543210,
      age: 20,
      poline: 1,
      desc: "PET Bottle Scrap",
      inr: 35698,
      fee: 874569,
      uom: "EA",
      gr: "23456",
      date: "2018-08-04",
      status: (
        <Link href={123} target="_blank">
          Open
        </Link>
      ),
    },
  ]);
  const columns = [
    { title: "Vendor", field: "name", sorting: false, filtering: false },
    { title: "Vendor Code", field: "code", filterPlaceholder: "filter" },
    { title: "PO#", field: "phone", align: "center", grouping: false },
    { title: "PO Line", field: "poline" },
    { title: "Description", field: "desc" },
    { title: "PO Value-Inr", field: "inr", headerAlign: 'center', },
    { title: "Qty Ordered", field: "inr", filterPlaceholder: "filter" },
    {
      title: "Qty Shiped",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    },
    { title: " GR Qty", field: "gr", filterPlaceholder: "filter" },
    { title: " UOM", field: "uom", filterPlaceholder: "filter" },
    { title: " Due Date", field: "date", filterPlaceholder: "filter" },
    { title: " Commited Date", field: "date", filterPlaceholder: "filter" },
    { title: " Status", field: "status", filterPlaceholder: "filter" },
  ];
  return (
    <div className="App">
      <div><h3>Purchase Order</h3></div>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
           
            // tooltip: "Click me",
            onClick: (e, data) => console.log(data),
          
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          // filtering: true,
          showTitle: false,
          draggable: false,
          paging: true,
          pointerEvents: "none",
         
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "bottom",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
         
          }),
          grouping: false,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
        }}
      />
    </div>
  );
}

export default App;
