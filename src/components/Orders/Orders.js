import React, { useMemo, useState, useEffect } from 'react';
import { listOrders } from '../../graphql/queries';
import { API, graphqlOperation } from "aws-amplify";
import { Amplify, Storage } from 'aws-amplify';

import Table from "../utils/Table";


export default function Orders() {
  const columns = [
      {
        // first group - TV Show
        Header: "Orders",
        // First group columns
        columns: [
          {
            Header: "OrderId",
            accessor: "id"
          },
          {
            Header: "Customer",
            accessor: "cust_email"
          },
          {
            Header: "Chef",
            accessor: "email"
          },
          {
            Header: "Address/Pickup Point",
            accessor: "address"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Oder Placed",
            accessor: "orderPlacedDate"
          },
          {
            Header: "Delivery Date",
            accessor: "deliveryDate"
          },
          {
            Header: "Amount",
            accessor: "amount"
          }
        ]
      }]
   
    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
      listQuery();
    }, []);

      // componentDidMount() {
      //   this.listQuery();
      // }
      async function listQuery() {
        console.log("listing todos");
        const allChefs = await API.graphql(graphqlOperation(listOrders));
        let items = allChefs.data.listOrders.items;
        const newItems = await Promise.all(items.map((item) => {
          item.deliveryDate = new Date(item.deliveryDate).toLocaleDateString();
          item.orderPlacedDate = new Date(item.orderPlacedDate).toLocaleDateString();
        }));
        setData(items);
          console.log(JSON.stringify(items));
          alert(JSON.stringify(items));
    };

    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    );
}



