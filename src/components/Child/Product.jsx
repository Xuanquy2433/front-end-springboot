import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatMoney } from "./Format";
import { toast } from "react-toastify";

function Product(props) {
  const { image, price, name, category, descriptions, id } = props;
  const addCart = (item) => {
    console.log("item", name);
    // let data = [
    //   {
    //     picture: picture,
    //     price: price,
    //     name: name,
    //     description: description,
    //     quatity: 1,
    //   },
    // ];
  };

  const [post, setPost] = useState([]);

  const onHandleAddCart = () => {
    let ListCart = [];
    let check = true;
    let ListCarTemp = localStorage.getItem("Cart");
    if (ListCarTemp != undefined) {
      ListCart = JSON.parse(ListCarTemp);
    }
    for (let i = 0; i < ListCart.length; i++) {
      if (ListCart[i].id == id) {
        ListCart[i].quantity = ListCart[i].quantity + 1;
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        check = false;
      }
    }
    if (check == true) {
      let cartItem = {
        quantity: 1,
        name: name,
        images: image,
        price: price,
        id: id,
        descriptions: descriptions,
      };
      console.log(ListCart);
      ListCart.push(cartItem);
      localStorage.setItem("Cart", JSON.stringify(ListCart));
    }

    toast.success("Thêm thành công !", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const css = {
    backgroundColor: "#51a700",
    borderRadius: "50%",
    display: "inline-block",
    height: "10px",
    marginRight: "2px",
    width: "10px",
  };
  return (
    
    <div href="#" className="card card-product-grid">
      <Link style={{ height: "300px" }} to={`/detail/${id}`} class="img-wrap">
        {" "}
        <img style={{ width: "100%" }} src={image} />{" "}
      </Link>
      <figcaption className="info-wrap">
        <a
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px",
            height: "42px",
          }}
          href="#"
          className="title"
        >
          {name}
        </a>

        <div
          style={{
            color: "#daa520",
            marginBottom: "7px",
            fontSize: "16px",
            height: "25px",
          }}
          className="price mt-1"
        >
          <span style={css} className="dot--stocking"></span>{" "}
          {formatMoney(Number(price))} ₫
        </div>

<p>
<div className="gia">Category: {category && category.name} </div>
</p>

      </figcaption>

      <Button
        // onClick={() => addCart(price, name, images, __v)}
        // inverted
        // color="blue"
        inverted
        color="violet"
        onClick={() => onHandleAddCart()}
      >
        <i class="fa-solid fa-cart-arrow-down"></i>
      </Button>
    </div>
  );
}

export default Product;
