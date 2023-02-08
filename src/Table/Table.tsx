import React from 'react';
import { ClassNamesType, TableType } from '../@types';
import { getClassNames } from '../Common/ClassNameHandler';


export const Table: React.FC<TableType> = (data) => {

  const defaultClasses: ClassNamesType = {
    table: "block table-auto overflow-auto overflow-x-scroll w-full max-w-full",
    tHead: "w-full",
    tHeadTr: "w-full",
    tHeadTh: "px-1 border border-black w-1/6",
    tBody: "",
    tBodyTr: "",
    tBodyTrSelected: "bg-white",
    tBodyTd: "px-1 border border-black"
  }

  return (
    <table className={ getClassNames("table", data.className, defaultClasses) } key={ (data.rows !== undefined) ? data.rows.length : "" }>
      <thead className={ getClassNames("tHead", data.className, defaultClasses) }>
        <tr className={ getClassNames("tHeadTr", data.className, defaultClasses) }>
          { (data.headers !== undefined) && data.headers.map((header) => (
            <th key={header} className={ getClassNames("tHeadTh", data.className, defaultClasses) }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { (data.rows !== undefined) && data.rows.map((row) => (
          <tr key={"tr-" + String(row._id)} className={ (row.selected === true) ? getClassNames("tBodyTrSelected", data.className, defaultClasses) : getClassNames("tBodyTr", data.className, defaultClasses) }>
            { (row.data !== undefined) && Object.entries(row.data).map((entry)=> {
                return <td key={"tr-" + String(row._id) + "-td-" + String(entry[0]) } className={ getClassNames("tBodyTd", data.className, defaultClasses) }  onClick={(e) => (row.onClick !== undefined) && row.onClick(e) }>
                  {entry[1]}
                </td>
              }
            )}
          </tr>
        ))}
       </tbody>
    </table>
  );
}