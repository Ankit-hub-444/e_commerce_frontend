// import React from "react";
// import { useForm } from "react-hook-form";

// export default function ProductForm(props) {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={props.handleSubmit(onSubmit)}>
//       <label htmlFor="name">Name</label>
//       <input id="name" {...register('name', { required: true, maxLength: 30 })} />
//       {errors.name && errors.name.type === "required" && <span>This is required</span>}
//       {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
//       <input type="submit" />
//     </form>
//   );
// }

// import React, { useState } from 'react';
//   // import { Form, Button } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import { v4 as uuidv4 } from 'uuid';
// let i=0;
// const ProductForm = (props) => {
//   const [product, setProduct] = useState({
//     productname: props.product ? props.product.productname : '',
//     imageurl: props.product ? props.product.imageurl : '',
//     author: props.product ? props.product.author : '',
//     quantity: props.product ? props.product.quantity : '',
//     price: props.product ? props.product.price : '',
//     date: props.product ? props.product.date : ''
//   });

//   const [errorMsg, setErrorMsg] = useState('');
//   const { productname, imageurl, author, price, quantity } = product;

//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     const values = [productname, imageurl, author, price, quantity];
//     let errorMsg = '';

//     const allFieldsFilled = values.every((field) => {
//       const value = `${field}`.trim();
//       return value !== '' && value !== '0';
//     });

//     if (allFieldsFilled) {
//       const product = {
//         id: i+1,
//         productname,
//         imageurl,
//         author,
//         price,
//         quantity,
        
//         date: new Date()
//       };
//       props.handleOnSubmit(product);
//     } else {
//       errorMsg = 'Please fill out all the fields.';
//     }
//     setErrorMsg(errorMsg);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'quantity':
//         if (value === '' || parseInt(value) === +value) {
//           setProduct((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       case 'price':
//         if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
//             setProduct((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       default:
//         setProduct((prevState) => ({
//           ...prevState,
//           [name]: value
//         }));
//     }
//   };

//   return (
//     <div className="main-form">
//       {errorMsg && <p className="errorMsg">{errorMsg}</p>}
//       <p>saksham</p>
//       {/* <Form onSubmit={handleOnSubmit}>
//         <Form.Group controlId="name">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control
//             className="input-control"
//             type="text"
//             name="productname"
//             value={productname}
//             placeholder="Enter name of product"
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="imageurl">
//         <Form.Label>URL</Form.Label>
//           <Form.Control
//             className="input-control"
//             type="text"
//             name="imageurl"
//             value={imageurl}
//             placeholder="Enter url of product"
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="author">
//           <Form.Label>Product Seller</Form.Label>
//           <Form.Control
//             className="input-control"
//             type="text"
//             name="author"
//             value={author}
//             placeholder="Enter name of seller"
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="quantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             className="input-control"
//             type="number"
//             name="quantity"
//             value={quantity}
//             placeholder="Enter available quantity"
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="price">
//           <Form.Label>Product Price</Form.Label>
//           <Form.Control
//             className="input-control"
//             type="text"
//             name="price"
//             value={price}
//             placeholder="Enter price of Product"
//             onChange={handleInputChange}
//           />
//         </Form.Group> */}
//         {/* <Button variant="primary" type="submit" className="submit-btn">
//           Submit
//         </Button> */}
//       {/* </Form> */}
//     </div>
//   );
// };

// export default ProductForm;
