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
import Menu from "./layout/Menu/Menu";
import { LechContext, LechContextWrapper } from "./store/context";
import Login from "./pages/Login/Login";
import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./config/firestore";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
//   const [producst, setProducts] = useState()
//   const [productIds, setProductIds] = useState()
//  useEffect(() => {
//   const productsCollection = query(collection(db, 'Products'));
        
//   onSnapshot(productsCollection, (snapshot) => {
     
//       setProducts(snapshot.docs.map(product => {

//           return {
//               id:product.id,
//               ...product.data()
//           }

//         }))
     
//   })
//   setProductIds(producst?.map(product => product.id))
//  },[])
//  console.log(productIds)
const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

    <LechContextWrapper>
      <Wrapper>
        <Menu />
        <Header />
        <Body>
          <Routes>
          
            <Route path='/products'element={<Products />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/:id'element={<Item />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
          </Routes>
        </Body>
      </Wrapper>
    </LechContextWrapper>
    </QueryClientProvider>
  );
};

export default App;
