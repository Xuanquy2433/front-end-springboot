import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

function PopupUpdateUser({ item, onSubmit, openShowEdit, setOpenShowEdit }) {
  const { username, password, role, name, email, id, onEdit, onRemove } = item;

  const [valueState, setValueState] = useState("")

  const [post, setPost] = useState({
    username: item.username || "",
    password: item.password || "",
    role: item.role || "",
    email: item.email || "",
    name: item.name || "",
  });

  const onChangeText = (event) => {
    console.log("onChangeName", event.target.name);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onClickButton = (e) => {
    e.preventDefault();
    console.log("e" + post);
    onSubmit({ ...item, ...post, id: item.id });
    setOpenShowEdit(false)
  };

  const handler = (event) => {
    const value = event.target.value
    console.log(value);
    setPost({ ...post, role: (value) })
    setValueState(value)
    console.log("valueeeeeeeeeeeeeeeeee", value);
  }

  const clickCloseEdit = () => {
    setOpenShowEdit(false)
  }


  return (
    <React.Fragment>
      {openShowEdit && (
        <div id="pop-up-sua-sp">
          <div style={{ textAlign: "left", marginTop: "65px" }} class="modal-dialog modal-login">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                  style={{
                    textAlign: "center",
                    color: "rgb(71, 71, 71)",
                  }}
                >
                  Update User
                </h1>
              </div>
              <div class="modal-body" >
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      label="UserName"
                      placeholder="UserName"
                      name="username"
                      onChange={onChangeText}
                      defaultValue={username}
                    />

                    <Form.Field
                      id="form-input-control-last-name"
                      control={Input}
                      label="PassWord"
                      placeholder="PassWord"
                      name="password"
                      onChange={onChangeText}
                      defaultValue={password}
                    />
                  </Form.Group>
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Email"
                    placeholder="Email "
                    name="email"
                    onChange={onChangeText}
                    defaultValue={email}
                  />
                  {/* 
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Role"
                placeholder="Role "
                name="role"
                onChange={onChangeText}
                defaultValue={role}
              /> */}

                  <select class="form-select" onChange={handler} name="role" aria-label="Default select example">

                    <option selected value="user">user</option>
                    <option value="admin">admin</option>
                  </select>

                  {/* <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Category"
              placeholder="Category"
              name="__v"
              onChange={onChangeText}
            /> */}

                  <Form.Field
                    id="form-textarea-control-opinion"
                    control={Input}
                    label="Name"
                    placeholder="Name"
                    name="name"
                    onChange={onChangeText}
                    defaultValue={name}
                  />

                  <div style={{ textAlign: "right",display: "flex",justifyContent: "right" }}>
                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Update"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={onClickButton}
                      style={{ border: "3px solid green", backgroundColor: "white", color: "green" }}
                    />

                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Cancel"
                      class="btn btn-outline-primary"
                      onClick={clickCloseEdit}
                      style={{ border: "3px solid blue", backgroundColor: "white", color: "blue" }}
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default PopupUpdateUser;
