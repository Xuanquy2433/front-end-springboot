import React, { useEffect, useState } from "react";
import ListProduct from "./../Child/ListProduct";
import FormUpdate from "./FormUpdate";
import PopupCreate from "./PopupCreate";
import ListProductAdmin from "./../Child/ListProductAdmin";
import "./../Child/css/admin.css";
import { deleteAPI, getAPI, postAPI, putAPI } from "./../utils/api";
import { API_CATEGORIES, API_PRODUCT_LOCAL } from "./../utils/const";
import ProductScreen from "./../pages/ProductScreen";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function Admin() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(false);
  const [openShowEdit, setOpenShowEdit] = useState(true);
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    console.log("UseEffect");
    fetchAPI();
    getListBrand();
  }, [isFetchData]);


  const fetchAPI = async () => {
    const result = await axios.post(API_PRODUCT_LOCAL + '/list', {});
    // check dữ dữ liệu trước khi lấy
    console.log(result);
    if (result) {
      setData(result.data);
    }
  };


  const onSubmit = async (data) => {
    if (data.name === '' && data.descriptions === '' && data.image === '' && data.price === '') {
      toast.error("Error required field", { autoClose: 1500 });
    }

    else if (data.name === '') {
      toast.error("Name required", { autoClose: 1500 });

    }
    else if (data.descriptions === '') {
      toast.error("Descriptions required", { autoClose: 1500 });

    }

    else if (data.image === '') {
      toast.error("Image required", { autoClose: 1500 });

    }

    else if (data.price === '') {
      toast.error("Price required", { autoClose: 1500 });
    }

    else {
      console.log("data onsubmit", data);
      const response = await axios.post(API_PRODUCT_LOCAL, data);
      if (response && response.status === 200) {
        toast.success("Thêm thành công", { autoClose: 1500 });
      }
      fetchAPI();
      getListBrand();
    }
  };

  const onSubmitEdit = async (data) => {
    console.log("id", data.id);

    if (data.name === '') {
      toast.error("Name required", { autoClose: 1500 });

    }
    else if (data.descriptions === '') {
      toast.error("Descriptions required", { autoClose: 1500 });

    }

    else if (data.image === '') {
      toast.error("Image required", { autoClose: 1500 });

    }

    else if (data.price === '') {
      toast.error("Price required", { autoClose: 1500 });
    }
    else {
      const response = await axios.post(API_PRODUCT_LOCAL, data);
      console.log(data.picture);
      if (response && response.status === 200) {
        toast.success("Cập nhập thành công", { autoClose: 1500 });
        setSelectedPost(undefined);
      }
      fetchAPI();
    }
  };

  const onEdit = async (post) => {
    // console.log('post', post);
    setSelectedPost(post);
    setOpenShowEdit(true)
  };

  const onRemove = async (id) => {
    console.log("id remove ", id);
    const response = await deleteAPI(`${API_PRODUCT_LOCAL}/${id}`);
    if (response && response.status === 200) {
      toast.success("Xóa thành công", { autoClose: 1500 });
    }
    setIsFetchData(!isFetchData);
  };




  const getListBrand = async () => {
    const brands = await axios.get(API_CATEGORIES)
    console.log('brand', brands);
    setBrand(brands.data)
  }
  console.log("brannnnnnnn ", brand);
  console.log(data);
  return (
    <React.Fragment>
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
      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  <li>
                    <a
                      class="trigger-btnn"
                      data-toggle="modal"
                      href="#myModalPopup"
                    >
                      Create Product
                    </a>
                  </li>
                  <li>
                    <Link to={'/user'}
                    >
                      User
                    </Link>
                  </li>
                  <li>
                    <Link to={'/category'}
                    >
                      Category
                    </Link>
                  </li>
                  <div
                    style={{ textAlign: "left" }}
                    id="myModalPopup"
                    class="modal fade"
                  >
                    <PopupCreate listBrand={brand} onSubmit={onSubmit} />
                  </div>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article
                style={{
                  border: "1px solid #ddd",
                  padding: "30px",
                  textAlign: "left",
                }}
                className="banner-wrap"
              >
                {selectedPost && (
                  <FormUpdate setOpenShowEdit={setOpenShowEdit} openShowEdit={openShowEdit} listBrand={brand} item={selectedPost} onSubmit={onSubmitEdit} />
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Popular products</h3>
          </header>
          {console.log("data", data)}

          <ListProductAdmin onRemove={onRemove} data={data} onEdit={onEdit} />
        </div>
      </section>

      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Download app demo text</h3>
              <p>Get an amazing app to make Your life easy</p>
            </div>
            <div className="col-md-6 text-md-right">
              <a href="#">
                <img src="assets/images/misc/appstore.png" height="120" />
              </a>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Admin;
