import React, { useState } from "react";
import "./add-product-style.css";
export default function Login({ products, setProducts }) {
  // const [values,setValues]=useState({
  //   title:"",
  //   price:"",
  //   category:"" ,
  //   quantity:"",
  //   description:"",
  //   image:"",
  // });
  const [submitted,setSubmitted]=useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
//   const [category, setCategory] = useState("");
//    const [quantity,setQuantity] = useState("");
//    const [description, setdDescription]= useState("");
//   const [image, setImage] = useState("");
  const handleusernameInputChange=(event)=>{
    setUsername(event.target.value)
  }
  const handlepasswordInputChange=(event)=>{
    setPassword(event.target.value)
  }
//   const handlecategoryInputChange=(event)=>{
//     setCategory(event.target.value)
//   }
//   const handlequantityInputChange=(event)=>{
//     setQuantity(event.target.value)
//   }
//   const handledescriptionInputChange=(event)=>{
//     setdDescription(event.target.value)
//   }
//   const handleimageInputChange=(event)=>{
//     setImage(event.target.value)
//   }
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

  const addlogin = async() =>{

    
      let x = {
        username:username,
        password:password,
 
      }
      await fetch("http://127.0.0.1:3000/login",{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(x)
      });
      // fetchProducts();
      // setProducts("");
      console.log("logged in")
    
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setSubmitted(true);
    //setProducts([values, ...products]);
   
    addlogin();
     
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted? <div class="success-message">Success! Thank you for registering</div> :null}
        <input
        onChange={handleusernameInputChange}
          id="username"
          class="form-field"
          type="string"
          placeholder="username"
          name="username"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
        onChange={handlepasswordInputChange}
          id="password"
          class="form-field"
          type="integer"
          placeholder="password"
          name="password"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
       {/* <input
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
        /> */}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
         {/* <input
        onChange={handledescriptionInputChange}
          id="description"
          class="form-field"
          type="string"
          placeholder="description"
          name="description"
        /> 
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
         {/* <input
        onChange={handleimageInputChange}
          id="image"
          class="form-field"
          type="string"
          placeholder="image"
          name="image"
        />   */ }
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}