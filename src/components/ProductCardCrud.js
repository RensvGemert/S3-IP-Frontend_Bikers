import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

const ProductCardCrud = ({product}) => {
    
  return (
    <div>
    <Card sx={{ maxWidth: 400, margin: '50px' }}>
      <CardActionArea href={`/product/details/${product.productId}`}>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button href={`/product/details/${product.productId}`} size="small">Info</Button>
          <Button href={`/product/update/${product.productId}`} size="small"><EditIcon /></Button>
          <Button href={`/product/delete/${product.productId}`} style={{ color: 'red' }} size="small"><RemoveCircleOutlineIcon /></Button>
        </CardActions>

        <CardMedia
          component="img"
          image={product.productImageUrl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ height: 100 }}>
            {product.productTitle}
          </Typography>

          <Typography variant="body3" color="text.secondary">
            {product.productPrice}
          </Typography>
        </CardContent>
        <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  </div>
  )
}

export default ProductCardCrud