import React from 'react'
import { useSelector } from 'react-redux'
import { json } from 'react-router-dom'
import { ProductCard } from '../product/Product'
import { Stack } from '@mui/material'
import { remove } from '../../store/createSlice'
import { useDispatch } from 'react-redux'
const Cart = () => {
  const productData = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(remove(id))
  }
  return (

    <Stack direction={'row'} flexWrap={'wrap'} gap={3} justifyContent={'center'} alignItems={'center'}>
      {productData.map(item => {
        return <ProductCard  key={item.id} {...item} color={'error'} text={'remove'} propFunction={() => removeItem(item.id)} />
      })}
    </Stack>
  )
}

export default Cart