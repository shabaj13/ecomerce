import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Ecom from './component/E-Commerce/Ecom';
import { Provider } from "react-redux";
import store from './component/Redux/Store';


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Ecom />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
