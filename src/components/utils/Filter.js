import { React, useMemo, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Label, Input } from "reactstrap";
 
// Component for Global Filter
export const GlobalFilter =  ({ 
   globalFilter, 
   setGlobalFilter 
})  => {
 const [value, setValue] = useState(globalFilter);
 
 const onChange = useAsyncDebounce((value) => {
   setGlobalFilter(value || undefined);
 }, 200);
 
 return (
   <div>
     <Label>Search Table: </Label>
     <Input
       value={value || ""}
       onChange={(e) => {
         setValue(e.target.value);
         onChange(e.target.value);
       }}
       placeholder=" Enter value "
       className="w-25"
       style={{
         fontSize: "1.1rem",
         margin: "15px",
         display: "inline",
       }}
     />
   </div>
 );
}
 
// Component for Default Column Filter
export const DefaultFilterForColumn = ({
 column: {
   filterValue,
   preFilteredRows: { length },
   setFilter,
 },
}) => {
 return (
   <div
   />
 );
}

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
 // This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
export const DateRangeColumnFilter = ({
    column: {
      filterValue = [],
      preFilteredRows,
      setFilter,
      id
    }}) => {
    const [min, max] = useMemo(() => {
      let min = preFilteredRows && preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)
      let max = preFilteredRows && preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)
  
      preFilteredRows.forEach(row => {
        const rowDate = new Date(row.values[id])
  
        min = rowDate <= min ? rowDate : min
        max = rowDate >= max ? rowDate : max
      })
  
      return [min, max]
    }, [id, preFilteredRows])
  
    return (
      <div>
        <input
         // min={min.toISOString().slice(0, 10)}
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [val ? val : undefined, old[1]])
          }}
          type="date"
          value={filterValue[0] || ''}
        />
        {' to '}
        <input
        //  max={max.toISOString().slice(0, 10)}
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [old[0], val ? val.concat('T23:59:59.999Z') : undefined])
          }}
          type="date"
          value={filterValue[1]?.slice(0, 10) || ''}
        />
      </div>
    )
  }
 
// Component for Custom Select Filter
export function SelectColumnFilter({
 column: { filterValue, setFilter, preFilteredRows, id },
}) {
 
 // Use preFilteredRows to calculate the options
 const options = useMemo(() => {
   const options = new Set();
   preFilteredRows.forEach((row) => {
     options.add(row.values[id]);
   });
   return [...options.values()];
 }, [id, preFilteredRows]);
 
 // UI for Multi-Select box
 return (
   <select
     value={filterValue}
     onChange={(e) => {
       setFilter(e.target.value || undefined);
     }}
   >
     <option value="">All</option>
     {options.map((option, i) => (
       <option key={i} value={option}>
         {option}
       </option>
     ))}
   </select>
 );
}
