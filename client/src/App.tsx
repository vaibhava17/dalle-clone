import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Wrapper } from "./components";
import { routes } from "./routes";

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
