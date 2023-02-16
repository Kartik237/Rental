import Main from "./components/Main";
import Favorit from "./components/Favorit";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Section">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/favorite" element={<Favorit/>} />
          <Route path="*" element={<Main/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
