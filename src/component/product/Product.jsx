import { useEffect, useState } from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, Skeleton, Stack, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/createSlice'
import { getProduct } from '../../store/productSlice'
const ProductSkeleton = () => {
    return (

        <Stack display={'flex'} gap={3}>
            <Skeleton variant="rectangular" width={'350px'} height={'250px'} />
            <Skeleton variant="rectangular" width={'150px'} height={'50px'} />
        </Stack>


    );
};

export const ProductCard = (props) => {
    const { color, text, propFunction, ...otherProps } = props; // Destructure props

    return (
        <Card sx={{ width: { xs: "90%", sm: "350px" }, height: "350px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <CardActionArea>
                <Stack justifyContent={"center"} alignItems={'center'}>
                    <CardMedia image={otherProps.image} sx={{ height: '100px', width: "100px", }} />
                    <CardHeader title={otherProps.category} />
                </Stack>
                <CardContent sx={{ overflowY: "scroll", scrollbarWidth: "none", display: "flex", gap: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='p' sx={{ fontWeight: "bold", textAlign: "center", fontSize: "large", width: "300px", }}>{otherProps.title}</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "large", textAlign: "center", }} variant='p'>price:{otherProps.price}rs</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ backgroundColor: "whitesmoke" }}>
                <Button variant='outlined' color={color} sx={{ margin: "0 auto", gap: "10px" }} onClick={() => propFunction(otherProps)} ><ShoppingCart />{text}</Button>
            </CardActions>
        </Card>
    )
}
const Product = () => {
    const dispatch = useDispatch()
    const { data: product } = useSelector(state => state.product)
    const addToCart = (product) => {
        dispatch(add(product))
    }
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={3}>
            {
                product.length ? (product?.map((item) =>
                    <ProductCard key={item.id + 1} {...item} color={'success'} text={'add to cart'} propFunction={addToCart} />
                )) : (
                    <Stack direction={'row'} paddingTop={4} justifyContent={'center'} alignItems={'center'} gap={3} display={'flex'} flexWrap={'wrap'}>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                    </Stack>
                )
            }

        </Stack >
    )
}

export default Product