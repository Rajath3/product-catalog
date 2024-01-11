import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import ProductTableHead from './ProductTableHead';
import ProductTableBody from './ProductTableBody';
import AddProductModal from './AddProductModal';

export default function Producttable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '10%' }}>
      <AddProductModal/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <ProductTableHead/>
          <ProductTableBody/>
        </Table>
      </TableContainer>
    </Paper>
  );
}