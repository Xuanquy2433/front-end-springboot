// import React, { useState } from "react";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
// //delete
// function PopupUpdate({ item, onSubmit, listBrand }) {

//   const [valueState, setValueState] = useState("")

//   const [post, setPost] = useState({
//     name: item.name || "",
//     price: item.price || "",
//     image: item.image || "",
//     categoryId: item.categoryId || 0,
   
//     descriptions: item.descriptions || "",
//   });

//   const onChangeText = (event) => {
//     console.log("onChangeName", event.target.name);
//     setPost({ ...post, [event.target.name]: event.target.value });
//   };

//   const onClickButton = (e) => {
//     console.log("e" + post);
//     onSubmit({ ...item, ...post, id: item.id });
//   };



//   const handler = (event) => {
//     const value = event.target.value
//     console.log(value);
//     setPost({ ...post, categoryId: (value) })
//     setValueState(value)
//     console.log("valueeeeeeeeeeeeeeeeee", value);
//   }


//   const { name, price, categoryId, image, id, descriptions } = item;
//   return (
//     <Form>
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: 30,
//           color: "rgb(71, 71, 71)",
//         }}
//       >
//         Update Product
//       </h1>
//       <Form.Group widths="equal">
//         <Form.Field
//           id="form-input-control-first-name"
//           control={Input}
//           label="Name"
//           placeholder="Name"
//           name="name"
//           onChange={onChangeText}
//           defaultValue={name}
//         />
//         <Form.Field
//           id="form-input-control-last-name"
//           control={Input}
//           label="Price"
//           placeholder="Price $"
//           name="price"
//           onChange={onChangeText}
//           defaultValue={price}
//         />
//       </Form.Group>
//       <Form.Field
//         id="form-input-control-last-name"
//         control={Input}
//         label="images"
//         placeholder="images"
//         name="image"
//         onChange={onChangeText}
//         defaultValue={image}
//       />
//       {/* <Form.Field
//         id="form-textarea-control-opinion"
//         control={TextArea}
//         label="__v"
//         placeholder="__v"
//         name="__v"
//         onChange={onChangeText}
//         defaultValue={__v}
//       /> */}

//       <select onChange={handler} name={valueState}>
//         {
//           listBrand.map((item, index) => (
//             <option key={index} value={item.id} selected >
//               {item.name}
//             </option>
//           ))
//         }
//       </select>


//       <Form.Field
//         id="form-textarea-control-opinion"
//         control={TextArea}
//         label="Descriptions"
//         placeholder="Descriptions"
//         name="descriptions"
//         onChange={onChangeText}
//         defaultValue={descriptions}
//       />

//       <div style={{ textAlign: "right" }}>
//         <Form.Field
//           id="form-button-control-public"
//           control={Button}
//           content="Update"
//           style={{ color: "white", background: "blue" }}
//           onClick={onClickButton}
//         />
//       </div>
//     </Form>

//   );
// }

// export default PopupUpdate;
