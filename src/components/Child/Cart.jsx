import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "./Data";
import "./css/cart.css";
import { formatMoney } from "./Format";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { API_COUPON } from "../utils/const";
import { getAPI } from "../utils/api";

function Cart() {
  // const { picture, price, name, description,id } = props;
  // console.log("asdasdad",data);
  // const proid =useParams()
  // const proDetail =data.filter(x=>x.id == proid.id)
  // const product =proDetail[0];
  // console.log(product);

  const [first, setfirst] = useState([]);
  const [loading, setloading] = useState("");

  const [listCoupon, setListCoupon] = useState([]);

  const [temp, setTemp] = useState(1);
  const [value, setValue] = useState();
  let sum1 = 0;



  useEffect(() => {
    let TempListCart = localStorage.getItem("Cart");
    if (TempListCart != undefined) {
      let ListCart = [];
      ListCart = JSON.parse(TempListCart);
      setfirst(ListCart);
      fetchAPICoupon();
    }
  }, [loading, temp, sum1]);


  const fetchAPICoupon = async () => {
    const result = await getAPI(API_COUPON);
    console.log(result);
    if (result) {
      setListCoupon(result);
    }
  };

  console.log("list coupon ", listCoupon);

  const onQuantity = (quantity, id) => {
    for (let i = 0; i < first.length; i++) {
      let ListCart = first;
      if (ListCart[i].id == id) {
        ListCart[i].quantity = quantity;
        setloading(quantity);
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        setfirst(ListCart);
      }
    }
  };

  const onClickXoaSp = (id) => {
    console.log("iddddddđ", id);
    let arr = JSON.parse(localStorage.getItem("Cart"));
    arr.splice(id, 1);
    localStorage.setItem("Cart", JSON.stringify(arr));
    setTemp(temp + 1);
    console.log(arr);
  };


  const like = (e) => {
    // e.preventDefault
    console.log("like");
    toast('🦄 Wow so easy!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  first.map((item, index) => {
    sum1 += Number(item.price) * Number(item.quantity);
  });

  console.log("day ", sum1);

  const [coupon, setCoupon] = useState(sum1);

  let code = ["abc", "bnm", "jkl"];


  const [percentShow, setPercentShow] = useState();


  const onChangeText = (e) => {
    e.preventDefault();
    console.log("value", value);

    listCoupon.map((item, index) => {
      if (value === item.code) {
        console.log("Sure");
        setPercentShow(item.percent)
        console.log(item.percent);
        let percent = item.percent;
      

        let percentDiscount = (Number(100) - Number(percent)) / Number(100);
        console.log("phan tram giam gia, ", percentDiscount);

        setCoupon(sum1 * percentDiscount)
        toast('🦄 Success!', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });

  

  };
  console.log("checkk ", percentShow);
  return (
    <div className="App">
      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Shopping cart</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              <div class="card">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col">Descriptions</th>

                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" class="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {first.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td>
                            <figure class="itemside">
                              <div class="aside">
                                <img src={item.images} class="img-sm" />
                              </div>
                              <figcaption class="info">
                                <a href="#" class="title text-dark">
                                  { }
                                </a>
                                <p class="text-muted small">
                                  Size: XL, Color: blue, <br /> Name:{" "}
                                  {item.name}
                                </p>

                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <h6 style={{ fontSize: '10px' }} > {item.descriptions && item.descriptions.substring(0, 40)}...</h6>
                          </td>
                          <td>
                            <input
                              style={{ width: "70px" }}
                              onChange={(e) =>
                                onQuantity(e.target.value, item.id)
                              }
                              defaultValue={item.quantity}
                              type="number"
                              min={1}
                            />
                          </td>
                          <td>
                            <div class="price-wrap">
                              <var class="price">
                                {formatMoney(Number(item.price))} đ
                              </var>
                              <h6 class="text-muted">
                                {" "}
                                {formatMoney(
                                  Number(item.price) * Number(item.quantity)
                                )}{" "}
                              </h6>
                            </div>
                          </td>
                          <td class="text-right">
                            <a
                              data-original-title="Save to Wishlist"
                              title=""
                              style={{ cursor: "pointer" }}
                              class="btn btn-light mr-2"
                              data-toggle="tooltip"
                              onClick={() => like()}
                            >
                              {" "}
                              <i class="fa fa-heart"></i>
                            </a>
                            <a
                              onClick={() => onClickXoaSp(index)}
                              class="btn btn-light"
                            >
                              {" "}
                              Remove
                            </a>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>

                <div class="card-body border-top">
                  <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                  </a>
                  <Link to="/" class="btn btn-light">
                    {" "}
                    <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                  </Link>
                </div>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card mb-3">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label>Have coupon?</label>
                      <div style={{ marginBottom: "20px" }} class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          placeholder="Coupon code"
                          onChange={(e) => {
                            setValue(e.target.value)
                            setCoupon('')
                            setPercentShow('')
                          }}
                        />
                        <span class="input-group-append">
                          <button
                            onClick={onChangeText}
                            class="btn btn-primary"
                          >
                            Apply
                          </button>
                        </span>



                      </div>
                      {percentShow ?
                        <h3 style={{ marginTop: "10px", color: "#f4ca16", fontStyle: "italic", textDecoration: "line-through" }}>Discount {percentShow}%</h3> : ''
                      }
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5">
                      <strong> {formatMoney(sum1)}</strong>
                      {/* { coupon &&
                        <strong> {formatMoney(coupon)}</strong>
                      } */}
                    </dd>
                  </dl>

                  {coupon ?
                    <dl style={{ marginTop: "10px", color: "red", fontStyle: "italic" }} class="dlist-align">
                      <dt>Promotional price:</dt>
                      <dd class="text-right  h5">
                        <strong> {formatMoney(coupon)}</strong>
                      </dd>
                    </dl> : ''
                  }


                  <hr />
                  <p class="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height="26" />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div style={{ textAlign: "left" }} className="infor-khach-hang">
        <div className="container-khach-hang">
          <div className="content-khach-hang">
            <h1 style={{ textAlign: "center" }}>Mua hàng</h1>
            <div className="form-khach-hang">
              <form action id="form-infor">
                <div className="thong-tin ">
                  <label htmlFor="ho-ten">Họ tên</label>
                  <input
                    placeholder="Nhập họ và tên"
                    type="text"
                    name
                    id="ho-ten"
                  />
                  <span className="form-messsage" />
                </div>
                <div className="thong-tin">
                  <label htmlFor="sdt">Số điện thoại</label>
                  <input
                    placeholder="Nhập số điện thoại"
                    type="number"
                    name
                    id="sdt"
                  />
                  <span className="form-messsage" />
                </div>
                <div className="thong-tin">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Nhập email"
                    type="email"
                    name
                    id="email"
                  />
                  <span className="form-messsage" />
                </div>
                <div className="thong-tin">
                  <label htmlFor="address">Địa chỉ</label>
                  <input
                    placeholder="Nhập địa chỉ"
                    type="text"
                    name
                    id="address"
                  />
                  <span className="form-messsage" />
                </div>
                <div className="thong-tin">
                  <label htmlFor="time-nhan-hang">
                    Thời gian nhận hàng trong ngày 8-18h
                  </label>
                  <input
                    placeholder="Nhập thời gian nhận hàng trong ngày"
                    type="text"
                    name
                    id="time-nhan-hang"
                  />
                  <span className="form-messsage" />
                </div>
                <button
                  type="submit"
                  className="btn btnPrimary"
                // onclick="clickMuaHang()"
                >
                  Mua hàng
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section class="section-name bg padding-y">
        <div class="container">
          <h6>Payment and refund policy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <footer class="section-footer border-top padding-y">
        <div class="container">
          <p class="float-md-right">
            &copy; Copyright 2020 All rights reserved
          </p>
          <p>
            <a href="#">Terms and conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
