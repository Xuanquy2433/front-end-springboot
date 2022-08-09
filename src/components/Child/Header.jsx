import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./css/header.css";
import Register from "./Register";
import LoginNew from "./LoginNew";
import RegisterNew from "./RegisterNew";
import { toast } from "react-toastify";
import Forgot from "./Forgot";

function Header({ onSearch }) {
  const [state, setState] = useState("");
  console.log("state", state);

  const onClickButton = (event) => {
    event.preventDefault();
    onSearch(state);
  };

  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logout success");
    setTimeout(() => window.location.reload(false)
      , 2000)

  }

  // let name = localStorage.getItem("user");
  // console.log(name);
  // console.log(JSON.parse(name).name);

  let showName = ""

  if (localStorage.getItem("user")) {
    let name = localStorage.getItem("user");
    showName = JSON.parse(name).name;
  }



  let test = "!"



  const fetchAPI = async () => {
    window.location.reload();
    //kiem tra du lieu truoc khi lay
  };

  const click = () => {
    fetchAPI();
    console.log("da fetch");
  };

  return (
    <>
      <header style={{ zIndex: "10" }} className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div
                style={{
                  fontSize: "32px",
                  color: "blue",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                className="col-lg-2 col-4 "
              >
                <Link onClick={click} className="bt" to="/">
                  {" "}
                  Dawn {" "}
                </Link>
              </div>
              <div className="col-lg-6 col-sm-12">
                <form className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                      name="name"
                      onChange={(e) => setState(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        onClick={onClickButton}
                        className="btn btn-primary"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <Link
                      to="/cart"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i
                        style={{ fontSize: "23px", cursor: "pointer" }}
                        className="fa fa-shopping-cart"
                      ></i>
                    </Link>
                    {/* <span className="badge badge-pill badge-danger notify">
                      0
                    </span> */}
                  </div>
                  <div className="widget-header icontext">
                    <Link
                      to="/admin"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-user"></i>
                    </Link>
                    <div className="text">
                      <span className="text-muted">Welcome, <span style={{ color: "black", fontWeight: "bold", fontSize: "15px" }}  >{showName}</span> </span>

                      <div>
                        <a
                          className="trigger-btnn"
                          data-toggle="modal"
                          href="#myModal"
                        >
                          {showName ? <span></span> : <span>Sign In</span>}
                        </a>{" "}
                        {showName ? <span></span> : <span>| </span>}

                        {showName ? <button className="active" style={{ border: "0px solid", backgroundColor: "white" }} onClick={() => logout()} >Logout</button> : <span></span>}

                        <a
                          className="trigger-btnn"
                          data-toggle="modal"
                          href="#myModalRegister"
                        >
                          {showName ? <span></span> : <span>Sign Up</span>}
                        </a>
                      </div>
                      <div id="myModal" className="modal fade">
                        <LoginNew />
                      </div>
                      <div id="myModalRegister" className="modal fade">
                        <RegisterNew />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Supermarket
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Partnership
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Baby &amp Toys
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fitness sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Clothing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Furnitures
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    {" "}
                    More
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Foods and Drink
                    </a>
                    <a className="dropdown-item" href="#">
                      Home interior
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item"
                    >Help
                    </a>

                    <a className="dropdown-item" href="#">
                    About
                    </a>
                    <a className="dropdown-item" data-toggle="modal"
                      href="#myModalForgot">
                      Forgot password
                    </a>
                  </div>
                </li>
              </ul>


              <div id="myModalForgot" className="modal fade">
                <Forgot />
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
