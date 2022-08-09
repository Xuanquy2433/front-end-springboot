import React, { useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

function PopupCreate({ item, onSubmit, listBrand }) {

  const [valueState, setValueState] = useState("")

  const [data, setData] = useState(
    item || {
      image: '',
      name: '',
      price: '',
      descriptions: '',
      categoryId: ''
    }
  );

  const [show, setShow] = useState(true);

  const showPopup = () => {
    setShow(true);
  };

  const onChangeText = (event) => {
    console.log("onChangeText", event);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onClickButton = (event) => {
    onSubmit(data);
    setShow(false);

  };

  //

  const handler = (event) => {
    const value = event.target.value
    console.log(value);
    setData({ ...data, categoryId: (value) })
    setValueState(value)
    console.log("valueeeeeeeeeeeeeeeeee", value);
  }

  if (data.categoryId === '') {
    console.log("Null id ");
    setData({ ...data, categoryId: 9 })
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
              Create Product
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
          {/* enctype="multipart/form-data" */}
            <Form >
              <Form.Group enctype="multipart/form-data" widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Name"
                  placeholder="Name"
                  name="name"
                  onChange={onChangeText}
                  defaultValue={""}
                />

                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Images"
                  placeholder="Images"
                  name="image"
                  defaultValue={""}
                  onChange={onChangeText}
                />
                {/* <input type="file" name="image"   onChange={onChangeText} class="form-control" /> */}

              </Form.Group>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Price"
                placeholder="Price $"
                name="price"
                defaultValue={""}
                onChange={onChangeText}
              />

              {/* <Form.Field
                id="form-textarea-control-opinion"
                control={<Select placeholder='Select your country'  />}
                label="Category"
                placeholder="Category"
                name="__v"
                onChange={onChangeText}
              /> */}


              <select onChange={handler} name={valueState}>
                {
                  listBrand.map((item, index) => (
                    <option key={index} value={item.id}  >
                      {item.name}
                    </option>
                  ))
                }
              </select>



              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Descriptions"
                placeholder="Descriptions"
                name="descriptions"
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

export default PopupCreate;
