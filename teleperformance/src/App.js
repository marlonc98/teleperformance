import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RoutesComponent from './routes/Routes';
import { ModalContext } from './context/ModalContext';
import ModalAlert from './components/subcomponents/Modal';

function App() {
  const [modal, setModal] = useState(null);
  return (
    <Router>
      <ModalContext.Provider value={{ modal, setModal }}>
        <RoutesComponent typeUser={null} />
        <ModalAlert />
      </ModalContext.Provider >
    </Router >
  );
}

export default App;
