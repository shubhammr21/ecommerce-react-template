import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, Box, styled } from '@mui/system'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    Icon,
    IconButton,
    Tooltip
} from '@mui/material'
import { Small } from 'app/components/Typography'
import {
    getProductList,
    addProductToCart
} from 'app/redux/actions/EcommerceActions'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

let productListLoaded = false

const AppEcommerce = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const { productList } = useSelector(state => state.ecommerce)

    if (!productListLoaded) {
        dispatch(getProductList())
        productListLoaded = true
    }
    console.log(productList)

    return (
        <Container>
            <Grid container spacing={3} sx={{ mb: '24px' }}>
                {productList.map((product) => (
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
                                        <IconButton
                                            onClick={() =>
                                                dispatch(
                                                    addProductToCart(
                                                        'abc',
                                                        product.id
                                                    )
                                                )
                                            }
                                        >
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
                ))}
            </Grid>
        </Container>
    )
}

export default AppEcommerce
