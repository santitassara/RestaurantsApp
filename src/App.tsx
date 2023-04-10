import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Home from './pages/Home';
import store from './redux/store';

const App: React.FC = () =>{ 
  
return( 
<Provider store={store}> 
    <Home/>
</Provider>
)
}

export default App;
