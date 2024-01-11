import {Button, Link, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react'
import columns from '../data/ProductColumns.json'
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, removeProduct } from '../utils/productSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const ProductTableBody = () => {
    const [editableRow, setEditableRow] = useState(null);
    const rows = useSelector((store) => store.product.items);

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeProduct(id))
    }

    const handleEdit = (id) => {
        setEditableRow(id)
    }

    const handleInputChange = (e, row, column) => {
        const { value } = e.target;
        dispatch(editProduct({value: value,id: row.ID,column: column.id}))
    }

    const handleSave = () => {
        setEditableRow(null)
    }

  return (
    <TableBody>
            {rows.map((row) => {
            const isEditable = row.ID === editableRow;
            return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                        {isEditable ? (
                          <TextField
                            value={value}
                            variant="filled"
                            onChange={(event) => handleInputChange(event, row, column)}
                          />
                        ) : (
                            column.id === 'Name' ? // Check if the column is 'name'
                                <Link href={`/product/${row.ID}`}>{value}</Link> :
                                column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value)}
                        </TableCell>
                    )
                })}
                <TableCell>
                    {isEditable ? (
                        <>
                        <SaveIcon sx={{cursor: 'pointer'}} onClick={handleSave}/>
                        <CancelIcon sx={{cursor: 'pointer'}} onClick={handleSave} />
                        </>
                    ) : (
                        <>
                        <EditIcon sx={{cursor: 'pointer'}} onClick={() => handleEdit(row.ID)}/>
                        <DeleteIcon sx={{cursor: 'pointer'}} onClick={() => handleRemove(row.ID)} />
                        </>
                    )}
                    
                </TableCell>
      </TableRow>
            );
        })}
    </TableBody>
  )
}

export default ProductTableBody