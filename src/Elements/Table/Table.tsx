import React, { TableHTMLAttributes, HTMLAttributes } from 'react';

import './Table.scss';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {

}

interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {

}

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {

}

interface TBodyProps extends HTMLAttributes<HTMLTableSectionElement> {

}

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {

}

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {

}

export const Table: React.FC<TableProps> = ({
  children,
  ...rest
}) => {
  return (
    <table {...rest} className={`Table ${rest.className}`}>{ children }</table>
  );
}

export const THead: React.FC<THeadProps> = ({
  children,
  ...rest
}) => {
  return (
    <thead {...rest} className={`THead ${rest.className}`}>{children}</thead>
  )
}

export const Th: React.FC<ThProps> = ({
  children,
  ...rest
}) => {
  return (
    <th {...rest} className={`Th ${rest.className}`}>{children}</th>
  )
}

export const TBody: React.FC<TBodyProps> = ({
  children,
  ...rest
}) => {
  return (
    <tbody {...rest} className={`TBody ${rest.className}`}>{children}</tbody>
  )
}

export const Tr: React.FC<TrProps> = ({
  children,
  ...rest
}) => {
  return (
    <tr {...rest} className={`Tr ${rest.className}`}>{children}</tr>
  )
}

export const Td: React.FC<TdProps> = ({
  children,
  ...rest
}) => {
  return (
    <td {...rest} className={`Td ${rest.className}`}>{children}</td>
  )
}