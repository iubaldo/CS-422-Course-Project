import './App.css';
import { Routes, Route } from "react-router-dom"

// Page Imports
import Layout from './Components/Layout';
import Homepage from "./Pages/Homepage"
import RefineOutput from './Pages/RefineOutput';
import InitialInput from './Pages/InitialInput';
import Preview from './Pages/Preview';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Homepage /> }/>
        <Route path="step1" element={ <InitialInput/> }/>
        <Route path="step2" element={ <RefineOutput /> }/>
        <Route path="step3" element={ <Preview/> }/>
      </Route>
    </Routes>
  );
}

export default App;
