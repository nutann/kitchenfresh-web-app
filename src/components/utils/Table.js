import { React } from "react";
import './Table.css'
import { useTable, useFilters, useGlobalFilter } from "react-table";
import { GlobalFilter, DefaultFilterForColumn } from "./Filter";
import {CSVLink, CSVDownload} from 'react-csv';
 
export default function Table({ columns, data }) {
  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   state,
   visibleColumns,
   prepareRow,
   setGlobalFilter,
   preGlobalFilteredRows,
 } = useTable(
   {
     columns,
     data,
     defaultColumn: { Filter: DefaultFilterForColumn },
   },
   useFilters
 );
 
 return (
  <div>
 <CSVLink data={rows.map((item) => item.original)} >Download Order Report</CSVLink>
   <table {...getTableProps()}>
     <thead>
       {headerGroups.map((headerGroup) => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map((column) => (
             <th {...column.getHeaderProps()}>
               {column.render("Header")}
               {/* Rendering Default Column Filter */}
               <div>
                 {column.canFilter ? column.render("Filter") 
                  :null}
               </div>
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map((row, i) => {
         prepareRow(row);
         return (
           <tr {...row.getRowProps()}>
             {row.cells.map((cell) => {
               return <td {...cell.getCellProps()}>
           {cell.render("Cell")}
         </td>;
             })}
           </tr>
         );
       })}
     </tbody>
   </table>
  </div>
 
 );
}