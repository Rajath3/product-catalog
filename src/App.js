// import { Container } from '@mui/material';
import Producttable from './Components/Producttable';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Product from './Components/Product';
import { Typography } from '@mui/material';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Producttable/>
    },
    {
      path: '/product/:productId',
      element: <Product />
    }
  ])
    
  return (
    <Provider store={appStore}>
      <div className="App">
          <Typography level="h1" fontSize="lg" fontWeight="lg">Product Catalog</Typography>
          <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
