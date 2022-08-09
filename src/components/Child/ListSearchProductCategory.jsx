import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_PRODUCT_SEARCH_CATE } from "../utils/const";
import Product from "./Product";
import Sliderr from "./Sliderr";


function ListSearchProductCategory({ listCategories }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("UseEffect");
    fetchAPI();


  }, [data]);

  const { id } = useParams();

  const fetchAPI = async () => {
    console.log("param id ", id);
    const result = await axios.get(API_PRODUCT_SEARCH_CATE + id);
    //kiem tra du lieu truoc khi lay
    if (result) {
      setData(result.data);
      console.log(result);
    }
  };


  return (
    <React.Fragment>
      <section style={{ zIndex: -1 }} className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  {/* <li>
                    <a href="#">Best clothes</a>
                  </li> */}

                  {listCategories &&
                    listCategories.map((item, index) => (
                      <li key={index}>
                        <Link style={{ cursor: "pointer" }} to={`/listCateProduct/${item.id}`}   > {item.name} </Link>
                      </li>
                    ))
                  }

                  {/* <li>
                    <a href="#">Automobiles</a>
                  </li>
                  <li>
                    <a href="#">Home interior</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Technologies</a>
                  </li>
                  <li>
                    <a href="#">Digital goods</a>
                  </li>
                  <li>
                    <a href="#">Online goods</a>
                  </li> */}
                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article className="banner-wrap">
                <Sliderr />
                {/* <img style={{height: "380px"}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-fashion-sale-banner-template-design-cc34c2027d0bb5ccc2ff90231abaa242_screen.jpg?ts=1613395464" className="w-100 rounded" /> */}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">

            {
              data.length !== 0 ? <a href="#" className="btn btn-outline-primary float-right">
                See all
              </a> : ''
            }
            {
              data.length !== 0 ? <h3 className="section-title">Popular products</h3> : ''
            }
          </header>
          <div className="row">
            {data.length !== 0 ?
              data.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 ani">
                    <Product {...item} />
                  </div>
                );
              }) : <h3 style={{ width: "60%", margin: "auto", clear: "both", marginTop: "10px",color: "grey" }}>Chưa có loại sản phẩm này</h3>}
          </div>
        </div>
      </section>

      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Download app </h3>
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

export default ListSearchProductCategory;
