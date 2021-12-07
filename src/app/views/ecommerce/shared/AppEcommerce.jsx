import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, Box, styled } from '@mui/system'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Chip,
    Typography,
    Grid,
    Icon,
    IconButton,
    Tooltip
} from '@mui/material'
// import { Small } from 'app/components/Typography'
import {
    getProductList,
    addProductToCart,
    getCategoryList,
} from 'app/redux/actions/EcommerceActions'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, categoryName, theme) {
    return {
        fontWeight:
            categoryName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Small = styled('small')(({ bgColor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgColor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

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
    const { palette } = useTheme()
    const theme = useTheme()
    const bgPrimary = palette.primary.main
    const dispatch = useDispatch()
    const { productList, categoryList } = useSelector(state => state.ecommerce)
    const [products, setProducts] = useState([])

    const [categoryName, setCategoryName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoryName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    if (!productListLoaded) {
        dispatch(getProductList())
        dispatch(getCategoryList())
        setProducts(productList)
        // setProducts(productList)
        productListLoaded = true
    }

    // useEffect(() => {
    //     // dispatch(getProductList())
    //     // dispatch(getCategoryList())
    //     setProducts(productList)
    // }, [])


    useEffect(() => {
        if (categoryName.length === 0) {
            setProducts(productList)
        } else {
            const newProducts = productList.filter(product => {
                return categoryName.includes(product.category)
            })
            setProducts(newProducts)
        }
        console.log(categoryName)
        console.log(products)
    }, [categoryName])

    return (
        <Container>
            <FormControl sx={{ my: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={categoryName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Category" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {categoryList.map((item) => (
                        <MenuItem
                            key={item.title}
                            value={item.title}
                            style={getStyles(item.title, categoryName, theme)}
                        >
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
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
                                    <Typography>{product.description}</Typography>
                                </Box>
                                <Box sx={{ mb: '8px' }}>
                                    <Small bgColor={bgPrimary}>
                                        {product.category}
                                    </Small>
                                </Box>
                                <Box sx={{ mb: '8px' }}>
                                    <Typography>$ {product.price}</Typography>
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
