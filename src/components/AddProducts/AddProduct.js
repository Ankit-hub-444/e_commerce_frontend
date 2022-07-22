import React, { useState } from "react";
import "./add-product-style.css";

export default function AddProduct({ products, setProducts }) {
  // const [values,setValues]=useState({
  //   title:"",
  //   price:"",
  //   category:"" ,
  //   quantity:"",
  //   description:"",
  //   image:"",
  // });

 
  const [submitted,setSubmitted]=useState(false);
  const [title,setTitle] = useState("");

  const [price,setPrice] = useState("");

  const [category, setCategory] = useState("");

   const [quantity,setQuantity] = useState("");

   const [description, setdDescription]= useState("");

  const [image, setImage] = useState("");
  
  const handletitleInputChange=(event)=>{
    setTitle(event.target.value)
  }

  const handlepriceInputChange=(event)=>{
    setPrice(event.target.value)
  }

  const handlecategoryInputChange=(event)=>{
    setCategory(event.target.value)
  }

  const handlequantityInputChange=(event)=>{
    setQuantity(event.target.value)
  }

  const handledescriptionInputChange=(event)=>{
    setdDescription(event.target.value)
  }

  const handleimageInputChange=(event)=>{
    setImage(event.target.value)
  }
  // console.log(title);
  // console.log(price);

//   const addProduct=async()=>{
//     await ch("http://127.0.0.1:3009/product", {

//       method: "POST",
    
//       body: JSON.stringify({
//       title:title,
//     price:price,
//      category:category,
//      quantity:quantity,
//     description:description,
//     image:image,

//       }),

//       headers: {

//         "Content-type": "application/json; charset=UTF-8"

//     }
// })
//     .then((addProduct) => addProduct.json())
//       .then((json) => console.log(json))
//   }

  const addProduct1 = async() =>{

    // i=i+1

    // console.log(event.title);

    if(products.length>0){

      let x = {

        title:title,
        price:price,
        category:category,
        quantity:quantity,
       description:description,
       image:image,

        // tid:i,

        // checked:"false"

      }

      await fetch("http://localhost:3000/product",{

        method:'POST',

        headers:{

          'Accept':'application/json',

          'Content-Type':'application/json'

        },

        body:JSON.stringify(x)

      });

      // fetchProducts();

      // setProducts("");

    }

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setSubmitted(true);
    //setProducts([values, ...products]);
    // console.log(values);
    addProduct1();
  
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted? <div class="success-message">Success! Thank you for registering</div> :null}
        <input
        onChange={handletitleInputChange}
          id="title"
          class="form-field"
          type="string"
          placeholder="title"
          name="title"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
        onChange={handlepriceInputChange}
          id="price"
          class="form-field"
          type="integer"
          placeholder="price"
          name="price"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
       <input
        onChange={handlecategoryInputChange}
          id="category"
          class="form-field"
          type="string"
          placeholder="category"
          name="category"
        />
        <input
        onChange={handlequantityInputChange}
          id="quantity"
          class="form-field"
          type="integer"
          placeholder="quantity"
          name="quantity"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
         <input
        onChange={handledescriptionInputChange}
          id="description"
          class="form-field"
          type="string"
          placeholder="description"
          name="description"
        /> 
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
         <input
        onChange={handleimageInputChange}
          id="image"
          class="form-field"
          type="string"
          placeholder="image"
          name="image"
        />  
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
//","title":"tv","price":540,"category":" electronics","quantity":"5","description":"good tv","image":null
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function AddProduct({ products, setProducts }) {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => {console.log(data);setProducts([data, ...products]);}
  
//     //   const handleOnSubmit = (product) => {
//     //     setProducts([product, ...products]);
//     //     // history.push('/');
//     //   };

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="name">Name</label>
//       <input id="name" {...register('name', { required: true, maxLength: 30 })} />
//       {errors.name && errors.name.type === "required" && <span>This is required</span>}
//       {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
//       <input type="submit" />
//     </form>
//     </>
//   );
// }


// import React from 'react';
// import ProductForm from "./ProductForm"

// const AddProduct = ({ products, setProducts }) => {
//   const handleOnSubmit = (product) => {
//     setProducts([product, ...products]);
//     // history.push('/');
//   };

//   return (
//  <>
//        <ProductForm handleOnSubmit={handleOnSubmit} />
// </> 
//   );
// };
// export default AddProduct;
