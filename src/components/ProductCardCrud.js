import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

const ProductCardCrud = ({product}) => {
    
  return (
    <div>
    <Card sx={{ maxWidth: 400, margin: '50px' }}>
      <CardActionArea href={`/product/details/${product.productId}`}>
        <CardActions style={{ justifyContent: 'center' }}>
          <CardActionArea href={`/product/update/${product.productId}`} size="small"><EditIcon /></CardActionArea>
          <CardActionArea href={`/product/delete/${product.productId}`} style={{ color: 'red' }} size="small"><RemoveCircleOutlineIcon /></CardActionArea>
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
      </CardActionArea>
    </Card>
  </div>
  )
}

export default ProductCardCrud