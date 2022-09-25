import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Child/Cart";
import Container from "./components/Child/Container";
import Footer from "./components/Child/Footer";
import Header from "./components/Child/Header";
import NotFound from "./components/Child/NotFound";
import Admin from "./components/adminPage/Admin";
import DetailProduct from "./components/Child/DetailProduct";
import ListProduct from "./components/Child/ListProduct";
import { getAPI, searchAPI } from "./components/utils/api";
import { API_CATEGORIES, API_PRODUCT_LOCAL, API_PRODUCT_SEARCH, API_USER_USERS } from "./components/utils/const";
import axios from "axios";
import Loginn from './components/Child/temp/Loginn';
import Login from './components/Child/Login';
import { ToastContainer } from "react-toastify";
import User from './components/Child/User';
import ListUser from './components/Child/ListUser';
import UserScreen from './components/Child/temp/UserScreen';
import Dashboard from "./components/adminPage/Dashboard";
import LoginNew from "./components/Child/LoginNew";
import CategoryScreen from "./components/pages/CategoryScreen";
import PostScreen from "./components/pages/ProductScreen";
import Coupon from "./components/Coupon";
import Forgot from "./components/Child/Forgot";
import ListSearchProductCategory from "./components/Child/ListSearchProductCategory";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [category, setCategory] = useState([]);

  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(0);


  const [showText, setShowText] = useState(false);
  const [showName, setShowName] = useState('');

  useEffect(() => {
    console.log("UseEffect");
    fetchAPI();
    fetchAPIUser();
    setShowText(false)
    setShowName('')
    list();
  }, [isFetchData, show]);

  const fetchAPI = async () => {
    const result = await axios.post(API_PRODUCT_LOCAL + '/list', {});
    //kiem tra du lieu truoc khi lay
    if (result) {
      setData(result.data);
      console.log(result);
    }
  };

  const list = async () => {
    const result = await getAPI(API_CATEGORIES);
    if (result) {
      setCategory(result)
    }
    console.log('categories:', result);
  }

  const fetchAPIUser = async () => {
    const result = await getAPI(API_USER_USERS);
    //kiem tra du lieu truoc khi lay
    if (result) {
      setUser(result);
      console.log(result);
    }
  };

  const onSearch = async (name) => {
    console.log("nameeeeeeeeeeeeeee ", name);
    console.log(API_PRODUCT_SEARCH + name);

    if (name === '') {
      setShow(show === 10 ? setShow(1) : show + 1)

    } else {
      const data = await axios.get(API_PRODUCT_SEARCH + name);
      setData(data.data);
      setShowText(true)
      setShowName(name)
      console.log(data);
    }
  };


  const onSearchCate = async (name) => {
    console.log("id nay ", name);


  };

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Header onSearchCate={onSearchCate} onSearch={onSearch} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ListProduct data={data} showText={showText} showName={showName} listCategories={category} />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/forgot" element={<Forgot />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserScreen />} />

          <Route path="/category" element={<CategoryScreen />} />

          <Route path="/testLogin" element={<LoginNew />} />

          <Route path="/detail/:id" element={<DetailProduct />} />

          <Route path="/listCateProduct/:id" element={<ListSearchProductCategory listCategories={category} />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
