import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
//C:\Users\DELL\Downloads\E_commerce-master\src\lib\commerce.js
import { commerce } from '../../lib/commerce';

// import { MovieContext } from "../context/MovieContext";

import noImage from "./no-image-available.png";
import "./Detail.css";

const Detail = () => {
  let { id} = useParams();
  //console.log(imdbID);
  //const { showDetail, selectedMovie } = useContext(MovieContext);
  const [selectedProduct,setSelectedProduct]=useState({});
//   const showDetail = async (id) => {
//     const response = await axios.get(
//       `https://www.omdbapi.com/?apikey=d1a3f566&i=${imdbID}`
//     );
    
//     const data = response.data;
//     console.log(data);
//     setSelectedMovie(data);
//   };
  
  //const productId = 'prod_1ypbroE658n4ea';

//Commerce.products.retrieve(productId).then(product => console.log(product));

const fetchProduct = async () => {
  // const { data } = await commerce.products.list();

// data =  await fetch('url')
// fetch('http://example.com/movies.json', {method : "POST", body : data})
fetch('http://127.0.0.1:3000/product/'+4)
.then(response => response.json())
.then(data =>{ console.log(data); setSelectedProduct(data);});

  
};


useEffect(() => {
  fetchProduct();
  // fetchCart();
}, []);

  return (
    <div>
    
    {/* {console.log(selectedProduct)} className="detail-container"*/}

    <div >
      {/* <div className="poster">
        {selectedProduct.media.source === "N/A" ? (
          <img src={noImage} alt={selectedProduct.name} />
        ) : ( */}
          {/* <img src={selectedProduct.image} alt={selectedProduct.title} /> */}
        {/* )}
      </div> */}
      console.log(selectedProduct);
      <div className="info">
        <div className="field">
          <div className="label">
            <p className="title label-p">{selectedProduct.title}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            <p className="label-p">{selectedProduct.price}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Released: <p className="label-p">{selectedProduct.description}</p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Detail;