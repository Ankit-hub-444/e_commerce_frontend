import React,{useCallback} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";
import useStyles from './styles';
import { useHistory } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // const handleAddToCart = () => onAddToCart(product.id, 1);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/edit/${product.id}`), [history]);
  
  const deleteItem = async(id) => {

    console.log("id: ", id);

    await fetch(`http://127.0.0.1:3000/product/${id}`, {

        method: 'DELETE',

        headers: {

            'Content-type': 'application/json'

        }

    });

    // (<Home/>)

}

  return (
    <Card className={classes.root}>
      <Link to={`/details/${product.id}`} activeClassName="active" >
        <CardMedia className={classes.media} image={product.image} height="140" title={product.name} />
        {/* image={require('assets/img/bg2.jpg')} */}
        {/* component="img"
    image="https://picsum.photos/400/300"
    alt="CardMedia Image Example"
    height="140" */}
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
          <button type="button" onClick={()=>{deleteItem(product.id)}}>Delete
          </button>
          <button type="button" onClick={handleOnClick}>Edit
          </button>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>

    </Card>
  );
};

export default Product;

