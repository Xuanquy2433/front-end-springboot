import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import PopupCreate from "./../adminPage/PopupCreate";
import PopupUpdate from "./../adminPage/PopupUpdate";
import { formatMoney } from "./Format";

function ProductAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const { image, price, name, category, id, descriptions, onEdit, onRemove } =
    props;
  const css = {
    backgroundColor: "#51a700",
    borderRadius: "50%",
    display: "inline-block",
    height: "10px",
    marginRight: "2px",
    width: "10px",
  };

  const onHandleEdit = (item) => {
    console.log("handleEdit", item);
    onEdit(item);
  };

  const remove = (id) => {
    onRemove(id);
    setOpen(false);
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
            width: "100%",
          }}
          href="#"
          className="title"
        >
          {name}
        </a>

        <div
          style={{ color: "#daa520", marginBottom: "7px", fontSize: "16px" }}
          className="price mt-1"
        >
          <span style={css} className="dot--stocking"></span>{" "}
          {formatMoney(Number(price))} ₫
        </div>

        <div className="gia">Category: {category && category.name} </div>

        <p
          style={{
            width: "100%",
            height: "30px",
            marginTop: "10px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {descriptions && descriptions.substring(0, 50)} ...
        </p>
      </figcaption>

      <div style={{ textAlign: "right" }}>
        <Button.Group>
          {/* <Button
           
            style={{ width: "20%" }}
            color="gray"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            {" "}
            
          </Button> */}

          <Modal
            style={{ marginLeft: "420px", marginTop: "120px" }}
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
              <Button>
                <i className="fa-solid fa-xmark"></i>
              </Button>
            }
          >
            <Header icon>
              <Icon name="archive" />
              Delete Confirmation
            </Header>
            <Modal.Content>
              <span>Bạn có chắc chắn muốn xóa sản phẩm này không?</span>
              <span style={{ marginLeft: "10px" }}>
                *Lưu ý sau khi xóa không thể khôi phục !
              </span>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={() => setOpen(false)}>
                <Icon name="remove" /> No
              </Button>
              <Button color="green" inverted onClick={() => remove(id)}>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>

          <Button.Or />
          
          <Button
            positive
            onClick={() => {
              onHandleEdit({
                name,
                price,
                image,
                category,
                id,
                descriptions,
              });
            }}
            style={{ width: "20%" }}
            color="violet"
          >
            <i class="fa-solid fa-pen"></i>
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default ProductAdmin;
