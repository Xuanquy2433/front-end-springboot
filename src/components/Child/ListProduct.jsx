import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import Sliderr from "./Sliderr";


function ListProduct({ data, listCategories, onSearchCate, showText, showName }) {
  console.log("listproduct,", data);

  const [state, setState] = useState("");

  const onClickButton = (event) => {
    console.log("id ", event);
    // setState(event)
    // onSearchCate(state);

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
                        <Link style={{ cursor: "pointer" }} to={`/listCateProduct/${item.id}`} onClick={() => onClickButton(item.id)}  > {item.name} </Link>
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
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Popular products</h3>


          </header>

          {showText ? <h3 style={{textAlign: 'left',marginTop: '50px',fontStyle: 'italic', fontSize: '17px',color: 'grey'}} >  {data.length}  result for  "{showName}" </h3> : ''}
          <div className="row">

            {
              data.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 ani">
                    <Product {...item} />
                  </div>
                );
              })}
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

export default ListProduct;
