import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";

// import logo from './logo.svg';

import "./App.css";
// npm config set legacy-peer-deps true
// npm i

// updated react 18 could not resolve,so the upper code required for installing @react-pdf/renderer
// add zlib:false in webpack.config.js in react-scripts/config

const App = () => {
  return (
    <>
      <PDFViewer height="600" width="1000" className="app">
        <Invoice invoice={invoice} />
      </PDFViewer>
    </>
  );
};

export default App;
