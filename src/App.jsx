import './App.css';
import { Fragment } from 'react';
import { Home } from './Componentes/Home/Home';
import { RouterDoc } from './Router/RouterDoc';

export  const  App = () => {

  return (
    <RouterDoc>
      <Fragment>
        <Home/>
      </Fragment>
    </RouterDoc>

    );
}


