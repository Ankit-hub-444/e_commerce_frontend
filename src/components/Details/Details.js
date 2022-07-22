import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
//C:\Users\DELL\Downloads\E_commerce-master\src\lib\commerce.js
import { commerce } from '../../lib/commerce';

// import { MovieContext } from "../context/MovieContext";

import noImage from "./no-image-available.png";
import "./Detail.css";

const Detail = () => {
  let {id} = useParams();
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
console.log(id);
fetch(`http://127.0.0.1:3000/product/${id}`)
.then(response => response.json())
.then(data =>{ console.log(data); setSelectedProduct(data);});

  
};


useEffect(() => {
  fetchProduct();
  // fetchCart();
}, []);

  return (
    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={selectedProduct.image}/></div>

						</div>
			
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{selectedProduct.title}</h3>

						<p class="product-description">{selectedProduct.description}</p>
						<h4 class="price">current price: <span>{selectedProduct.price}</span></h4>
						<h5 class="sizes">Categories:
              {selectedProduct.categories}
						</h5>
						<h5 class="colors">Quantity:
							{selectedProduct.quantity}
						</h5>
						<div class="action">
							<button class="btn btn-dark" type="button">add to cart</button>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    // <div>
    // {selectedProduct.title}
    // {/* {console.log(selectedProduct)} className="detail-container"*/}

    // <div >
    //   {/* <div className="poster">
    //     {selectedProduct.media.source === "N/A" ? (
    //       <img src={noImage} alt={selectedProduct.name} />
    //     ) : ( */}
    //       <img src={selectedProduct.image} alt={selectedProduct.title} />
    //     {/* )}
    //   </div> */}
    // <p>{selectedProduct.title}</p>
    //   <div className="info">
    //     <div className="field">
    //       <div className="label">
    //         <p className="title label-p">console.log(abc:{selectedProduct.title})</p>
    //       </div>
    //     </div>
    //     <div className="field">
    //       <div className="label">
    //         <p className="label-p">{selectedProduct.price}</p>
    //       </div>
    //     </div>
    //     <div className="field">
    //       <div className="label">
    //         Released: <p className="label-p">{selectedProduct.description}</p>
    //       </div>
    //     </div>
        
    //   </div>
    // </div>
    // </div>
  );
};

export default Detail;