import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "./Data";
import { getAPI } from "./../utils/api";
import { API_PRODUCT_DETAIL } from "./../utils/const";
import "./css/detail.css";
import { Button, Icon } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import { formatMoney } from "./Format";
import axios from "axios";

function DetailProduct({ data }) {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(1);

  const { id } = useParams();
  useEffect(() => {
    fetchAPI();
  }, [id]);

  const fetchAPI = async () => {
    const result = await getAPI(API_PRODUCT_DETAIL + id);
    // const result = await axios.post(API_PRODUCT_DETAIL+'/filter',{} + id);
    if (result) {
      setPost(result);
    }
  };
  const css = {
    backgroundColor: "#51a700",
    borderRadius: "50%",
    display: "inline-block",
    height: "10px",
    marginRight: "2px",
    width: "10px",
    marginLeft: "10px",
  };

  const onHandleAddCart = () => {
    let ListCart = [];
    let check = true;
    let ListCarTemp = localStorage.getItem("Cart");
    if (ListCarTemp != undefined) {
      ListCart = JSON.parse(ListCarTemp);
    }
    for (let i = 0; i < ListCart.length; i++) {
      if (ListCart[i].id === post.id) {
        ListCart[i].quantity = ListCart[i].quantity += count;
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        check = false;
      }
    }
    if (check == true) {
      let cartItem = {
        quantity: count,
        name: post.name,
        images: post.image,
        price: post.price,
        id: post.id,
        descriptions: post.descriptions,
        
      };
      console.log(ListCart);
      ListCart.push(cartItem);
      localStorage.setItem("Cart", JSON.stringify(ListCart));
    }

    toast.success("Da them vao gio hang", {
      position: "bottom-right",
      autoClose: 2000,
    });
   
  };

  const like = () => {
    alert("Like thành công");
  };

  const num = 1;
  if (post) {
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />;
    return (
      <div class="container">
        <div class="cardd">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img style={{ height: "680px" }} src={post.image} />
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3
                  style={{
                    fontSize: "22px",
                    marginTop: "110px",
                    marginBottom: "10px",
                  }}
                  class="product-title"
                >
                  {post.name}
                </h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
                <p class="product-description">{post.descriptions}</p>
                <h4 class="price">
                  current price:{" "}
                  <span style={css} className="dot--stocking"></span>
                  <span> {formatMoney(Number(post.price))} $ </span>
                </h4>

                <div className="gia">Category: {post.category && post.category.name} </div>

                <h5>
                  Số lượng:
                  <input
                    onClick={() => {
                      setCount(count - 1);
                      console.log("setCount");
                    }}
                    style={{ marginLeft: "20px" }}
                    class="minus is-form"
                    type="button"
                    value="-"
                  />
                  <button
                    style={{
                      border: "1px solid #ddd",
                      width: "40px",
                      height: "38px",
                      backgroundColor: "white",
                    }}
                  >
                    {count}
                  </button>
                  <input
                    onClick={() => {
                      setCount(count + 1);
                      console.log("setCount");
                    }}
                    class="plus is-form"
                    type="button"
                    value="+"
                  />
                </h5>

                <div class="action">
                  <Button
                    style={{
                      marginTop: "15px",
                      width: "170px",
                      fontSize: "16px",
                    }}
                    inverted
                    color="red"
                    onClick={() => onHandleAddCart()}
                  >
                    Thêm vào giỏ
                    <i
                      style={{ marginLeft: "5px" }}
                      class="fa-solid fa-cart-arrow-down"
                    ></i>
                  </Button>
                  <Button
                    // onClick={
                    //   // () => like()

                    // }
                    style={{
                      marginTop: "15px",
                      width: "170px",
                      fontSize: "16px",
                    }}
                    color="red"
                  >
                    <Icon name="heart" />
                    Like
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailProduct;
