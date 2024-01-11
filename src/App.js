import { Container } from '@mui/material';
import Producttable from './Components/Producttable';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Container>
          <Producttable/ >
        </Container>
      </div>
    </Provider>
  );
}

export default App;
