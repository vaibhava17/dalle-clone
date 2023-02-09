import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper>
        <Routes>
          {routes.map((Item) => (
            <Route path={Item.path} element={<Item.component />} />
          ))}
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
