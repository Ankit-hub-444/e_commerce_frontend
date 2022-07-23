import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./add-product-style.css";

export default function EditProduct({ editproducts, editsetProducts }) {
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
  let {id}=useParams();
//   console.log(id)

//   const EditProduct=async()=>{
//     await fetch(`http://127.0.0.1:3009/product/{$id}`, {

//       method: "PUT",
    
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
//     .then((editProduct) => editProduct.json())
//       .then((json) => console.log(json))
//   }

  const editProduct1 = async() =>{

    // i=i+1

    console.log("out titile :",{title});

    // if(editproducts.length>0){

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
      console.log("our x",x);


      await fetch(`http://127.0.0.1:3000/product/${id}`,{

        method:'PUT',

        headers:{

          'Accept':'application/json',

          'Content-Type':'application/json'

        },

        body:JSON.stringify(x)

      });


      // fetchProductcs();

      // setProducts("");

    

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setSubmitted(true);
    //setProducts([values, ...products]);
    // console.log(values);
    editProduct1();
  
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
        <button class="form-field" type="submit">Edit
        </button>
      </form>
    </div>
  );
}