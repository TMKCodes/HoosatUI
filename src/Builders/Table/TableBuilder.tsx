import React, { ReactNode, TableHTMLAttributes } from "react";
import { Table, TBody, Td, Th, THead, Tr } from "../../Elements";

interface TableInputProps extends TableHTMLAttributes<HTMLTableRowElement> {
  _id: string,
  color: string,
  data: Object,
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  headers: string[] | ReactNode[],
  rows: TableInputProps[],
}


export const TableBuilder: React.FC<TableProps> = ({
  children,
  className,
  ...rest
}) => {


  return (
    <Table className={className}>
      <THead>
        <Tr>
          { rest.headers.map((header, key) => <Th key={"th-" + key}>{header}</Th>) }
        </Tr>
      </THead>
      <TBody>
        { rest.rows.map(row => (
          <Tr key={"tr-" + String(row._id)}
            style={{ background: (row.color !== undefined) ? row.color : "" }}
            onClick={(e) => (row.onClick !== undefined) && row.onClick(e) }>
            { Object.entries(row.data).map(cell => (
              <Td key={"td-" + String(cell[0])}>{cell[1]}</Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};
