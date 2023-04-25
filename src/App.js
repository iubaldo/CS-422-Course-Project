import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"

// Page Imports
import Layout from './Components/Layout';
import Homepage from "./Pages/Homepage"
import ManualAdjust from './Pages/Manualadjustments';
import RefineOutput from './Pages/RefineOutput';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Homepage /> }/>
        <Route path="step1" element={ <ManualAdjust /> }/>
        <Route path="step2" element={ <RefineOutput/> }/>
      </Route>
    </Routes>
  );
}

export default App;
