import "./App.scss";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Wrapper from "./layout/Wrapper/Wrapper";
import Header from "./layout/Header/Header";
import Body from "./layout/Body/Body";
import Item from "./pages/Item/Item";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Routes>

      <Route path="/products" element={<Products />} />

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/item" element={<Item />} />

      <Route path="/profile" element={<Profile />} />
      </Routes>

      </Body>

    </Wrapper>
  );
};

export default App;
