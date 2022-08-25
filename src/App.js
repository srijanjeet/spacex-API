
import './App.css';
import Details from './pages/Detail';
import Page_first from './pages/Page_first'
import { Routes, Route } from "react-router-dom";



function App() {
  return (
  <>
    <Routes>
        <Route path="/" element={<Page_first/>} />
        <Route path = ":id" element={<Details/>} />
      </Routes>
  </>
  );
}

export default App;
