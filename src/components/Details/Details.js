import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
//C:\Users\DELL\Downloads\E_commerce-master\src\lib\commerce.js
import { commerce } from '../../lib/commerce';

// import { MovieContext } from "../context/MovieContext";

import noImage from "./no-image-available.png";
import "./Detail.css";

const Detail = () => {
  let { productId } = useParams();
  //console.log(imdbID);
  //const { showDetail, selectedMovie } = useContext(MovieContext);
  const [selectedProduct,setSelectedProduct]=useState([]);
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

  const fetchProducts = async () => {
    //.then(product => const{ data }=product);
    const { data } = commerce.products.retrieve(productId);
    console.log(data);
    setSelectedProduct(data);
  };
  useEffect(() => {
    fetchProducts(productId); // useParams ile alınan film id'sini kullanınız.
  }, []);

  return (
    <div className="detail-container">
      {/* <div className="poster">
        {selectedProduct.media.source === "N/A" ? (
          <img src={noImage} alt={selectedProduct.name} />
        ) : ( */}
          <img src={selectedProduct.media.source} alt={selectedProduct.name} />
        {/* )}
      </div> */}
      <div className="info">
        <div className="field">
          <div className="label">
            <p className="title label-p">{selectedProduct.name}</p>
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
  );
};

export default Detail;