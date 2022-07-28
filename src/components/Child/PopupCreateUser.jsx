import React, { useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

function PopupCreateUser({ item, onSubmit }) {
  const [data, setData] = useState(
    item || {
      username: "",
      password: "",
      role: "",
      email: "",
      name: ""
    }
  );

  const [valueState, setValueState] = useState("")

  const [show, setshow] = useState(true);

  const showPopup = () => {
    setshow(true);
  };

  const onChangeText = (event) => {
    console.log("onChangeText", event);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onClickButton = (event) => {
    onSubmit(data);
    setshow(false);
  };



  const handler = (event) => {
    const value = event.target.value
    console.log(value);
    setData({ ...data, role: (value) })
    setValueState(value)
    console.log("valueeeeeeeeeeeeeeeeee", value);
  }
  if (data.role === '') {
    setData({ ...data, role: "user" })
  }
  return (
    <React.Fragment>
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              style={{
                textAlign: "center",
                color: "rgb(71, 71, 71)",
              }}
            >
              Create User
            </h1>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="UserName"
                  placeholder="UserName"
                  name="username"
                  onChange={onChangeText}
                  defaultValue={""}
                />

                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="PassWord"
                  placeholder="PassWord"
                  name="password"
                  onChange={onChangeText}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Email"
                placeholder="Email "
                name="email"
                onChange={onChangeText}
              />

              {/* <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Role"
                placeholder="Role"
                name="role"
                onChange={onChangeText}
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
              />


              <div style={{ textAlign: "right" }}>
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Create"
                  style={{ color: "white", background: "blue" }}
                  onClick={onClickButton}
                  class="btn btn-secondary"
                  data-dismiss="modal"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PopupCreateUser;
