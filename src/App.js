import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './componets/layouts/SearchBar';
import Logs from './componets/logs/Logs';
import AddBtn from './componets/layouts/AddBtn';
import AddLogsModal from './componets/logs/AddLogsModal';
import EditLogModal from './componets/logs/EditLogModal';

import './App.css';
import AddTechModal from './componets/techs/AddTechModal';
import TechListModal from './componets/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    //Init materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogsModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
