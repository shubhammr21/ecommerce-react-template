import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'


const ProductCard = (props) => {
    const product = props.product
    return (


        <Grid key={product.id} item xs={6} md={3}>
            {/* Product card contain id, brand, category, description, freeShipping, imgUrl, price, rating, title, totalUning */}
            <Card>
                <CardMedia
                    image={product.imgUrl}
                    title={product.title}
                    sx={{ height: '200px' }}
                />
                <CardContent>
                    <Box sx={{ mb: '8px' }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {product.title}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: '8px' }}>
                        <Small>{product.description}</Small>
                    </Box>
                    <Box sx={{ mb: '8px' }}>
                        <Small>$ {product.price}</Small>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box sx={{ mb: '8px' }}>
                        <Tooltip title="Add to cart">
                            <IconButton>
                                <Icon>add_shopping_cart</Icon>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ mb: '8px' }}>
                        <Tooltip title="Share">
                            <IconButton>
                                <Icon>share</Icon>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </CardActions>
            </Card>

        </Grid>

    )
}
export default ProductCard
