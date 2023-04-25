import './App.css';
import { Routes, Route } from "react-router-dom"

// Page Imports
import Layout from './Components/Layout';
import Homepage from "./Pages/Homepage"
import RefineOutput from './Pages/RefineOutput';
import InitialInput from './Pages/InitialInput';
import Preview from './Pages/Preview';
import Footer from './Components/Footer';

function App() {
  const showFooter = () => {
    if (window.location.pathname !== "/")
      return(<Footer />)
  }

  return (
  <>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Homepage /> }/>
        <Route path="step0" element={ <InitialInput/> }/>
        <Route path="step1" element={ <RefineOutput /> }/>
        <Route path="step2" element={ <Preview /> }/>
      </Route>
    </Routes>
    {showFooter()}
  </>  
  );
}

export default App;
