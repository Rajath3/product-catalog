import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react'
import columns from '../data/ProductColumns.json'
import { useSelector } from 'react-redux';

const ProductTableBody = () => {
    const rows = useSelector((store) => store.product.items);

  return (
    <TableBody>
            {rows.map((row) => {
            return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                    <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                    );
                })}
            </TableRow>
            );
        })}
    </TableBody>
  )
}

export default ProductTableBody