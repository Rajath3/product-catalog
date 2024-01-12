import React, { useRef } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../utils/productSlice';
import CloseIcon from '@mui/icons-material/Close';

function ProductForm({handleClose}) {
    const dispatch = useDispatch();
    const id = useRef(null);
    const name = useRef(null);
    const category = useRef(null);
    const make = useRef(null);
    const model = useRef(null);
    const description = useRef(null);
    const price = useRef(null);
    const discount = useRef(null);

  const handleSubmit = () => {
    dispatch(addProduct({
        "ID": id.current.value,
        "Name": name.current.value,
        "Category": category.current.value,
        "Make": make.current.value,
        "Model": model.current.value,
        "Description": description.current.value,
        "Selling Price": price.current.value,
        "Discount": discount.current.value
    }));
    handleClose();
  }
  return (
    <Container maxWidth="lg" sx={{overflowY: 'auto'}}>
      <CloseIcon style={{ cursor: 'pointer', marginLeft: '100%'}} onClick={handleClose}/>
      <h1>Please add in product details</h1>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField fullWidth label="ID" variant="outlined"  type="number" inputRef={id}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" variant="outlined" inputRef={name}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Category" variant="outlined" inputRef={category}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Make" variant="outlined" inputRef={make}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Model" variant="outlined" inputRef={model}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" variant="outlined" multiline rows={4} inputRef={description}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Selling Price" variant="outlined" type="number" inputRef={price}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Discount" variant="outlined" type="number" inputRef={discount}/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ProductForm;
