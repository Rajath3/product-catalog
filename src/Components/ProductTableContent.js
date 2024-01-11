import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductTableContent = ({ data }) => {
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <>
        <Table>
            <TableBody>
            {columns.map((header, index) => (
                    <TableRow key={header}>
                        <TableCell component="th" scope="row">
                            {header}
                        </TableCell>
                        {data.map((row) => (
                            <TableCell key={`${header}-${row.id}`}>{row[header]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Link to='/'>Go back </Link>
        </>
    );
};

export default ProductTableContent;
