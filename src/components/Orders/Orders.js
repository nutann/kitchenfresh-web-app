import React, { useMemo, useState, useEffect } from 'react';
import { listOrders,getCustomer } from '../../graphql/queries';
import { API, graphqlOperation } from "aws-amplify";
import { Amplify, Storage } from 'aws-amplify';
import { DateRangeColumnFilter, SelectColumnFilter } from '../utils/Filter'

import Table from "../utils/Table";

export default function Orders() {
  const columns = [
      {
        // first group - TV Show
        Header: "ORDERS",
        // First group columns
        columns: [
          {
            Header: "OrderId",
            accessor: "id",
            canFilter: false
          },
          {
            Header: "Customer",
            accessor: "cust_email",
            canFilter: false
          },
          {
            Header: "Customer Phone",
            accessor: "cust_phone",
            canFilter: false
          },
          {
            Header: "Chef",
            accessor: "email",
            Filter: SelectColumnFilter,
          },
          {
            Header: "Address/Pickup Point",
            accessor: "address",
            canFilter: false
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Order Placed",
            accessor: "orderPlacedDate"
          },
          {
            Header: "Delivery Date",
            accessor: "deliveryDate",
            Filter: DateRangeColumnFilter,
            filter: dateBetweenFilterFn
          },
          {
            Header: "Amount",
            accessor: "amount"
          }
        ]
      }]

      function dateBetweenFilterFn(rows, id, filterValues) {
        const sd = filterValues[0] ? new Date(filterValues[0]) : undefined
        const ed = filterValues[1] ? new Date(filterValues[1]) : undefined
    
        if (ed || sd) {
          return rows.filter(r => {
            const cellDate = new Date(r.values[id])
    
            if (ed && sd) {
              return cellDate >= sd && cellDate <= ed
            } else if (sd){
              return cellDate >= sd
            } else if (ed){
              return cellDate <= ed
            }
          })
        } else {
          return rows
        }
      }

     
   
    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
      listQuery();
    }, []);

      async function listQuery() {
        console.log("listing todos");
        const allChefs = await API.graphql(graphqlOperation(listOrders));
        let items = allChefs.data.listOrders.items;
        const newItems = await Promise.all(items.map(async (item) => {
          item.deliveryDate = new Date(item.deliveryDate).toLocaleDateString();
          item.orderPlacedDate = new Date(item.orderPlacedDate).toLocaleDateString();
          const customer  = await API.graphql(graphqlOperation(getCustomer, { id: item.customerId }))
          item.cust_phone = customer.data.getCustomer.phone_number;
          return item;
        }));
        setData(items);
     
        console.log(JSON.stringify(items));
    };

    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    );
}



