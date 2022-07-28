import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";


function User(props) {

  const { username, password, role, name, email, id, onEdit, onRemove } =
    props;

    
  const onHandleEdit = (item) => {
    console.log("handleEdit", item);
    onEdit(item);
  };
  
  const remove = (id) => {
    onRemove(id);
  };
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <tr>
        <td>
          <figure class="itemside">
            <div class="aside">{username}</div>
          </figure>
        </td>
        <td>
          <h6 style={{ fontSize: "10px" }}> {password}</h6>
        </td>
        <td>{email}</td>
        <td>
          <div class="price-wrap">{role}</div>
        </td>
        <td>
          <div class="price-wrap">{name}</div>
        </td>
        <td class="text-right">
          <button
          style={{marginRight: "15px",cursor: "pointer"}}
            data-original-title="Save to Wishlist"
            title=""
            class="btn btn-outline-success"
            data-toggle="tooltip"
            onClick={() => {
              onHandleEdit({
                username,
                password,
                id,
                role,
                email,
                name,
              });
            }}
          >
            {" "}
            Update
          </button>
          {/* <a onClick={() => remove(_id)} class="btn btn-light">
            {" "}
            Remove
          </a> */}
          <Modal
            style={{ marginLeft: "420px", marginTop: "120px" }}
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
              <Button  class="btn btn-outline-danger">
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

        </td>
      </tr>
    </React.Fragment>
  );
}

export default User;
