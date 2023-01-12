import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {productAction} from '../redux/actions/product.action'
import {favoriteAction} from '../redux/actions/favorite.action'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button

} from '@chakra-ui/react'
function Product() {
  let  product =useSelector(state=>state.productReducer)
  let favorite= useSelector(state=>state.favoriteReducer)

 let dispatch=useDispatch()
  useEffect(() => {
    dispatch(productAction.getAll())
 
  }, []);
  const handleClick=(index)=>{
    dispatch({type: "DELETE_PRODUCT", payload:index})

  }
  const handleFavorite=(index)=>{
    // let checkFavorite=favorite.find(q=>q !=index)

   dispatch(favoriteAction.favoriteAdd(index))

  }
 

  return (
    <>
    <TableContainer px='100px' py={'30px'}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>UnitPrice</Th>
        <Th isNumeric>Delete</Th>
        <Th isNumeric>Update</Th>
        <Th isNumeric>Favorite</Th>
      </Tr>
    </Thead>
    <Tbody>
    {product &&
          product.map((i, key) => (
            <Tr key={key}>
              <Td>{i.id}</Td>
              <Td>{i.name}</Td>
              <Td>{i.unitPrice}</Td>
              <Td isNumeric><Button onClick={()=>handleClick(i)}>Delete</Button></Td>
              <Td isNumeric><Button>Update</Button></Td>
              <Td isNumeric><Button onClick={()=>handleFavorite(i)}>Favorite</Button></Td>
            </Tr>
          ))}
    
    </Tbody>
  
  </Table>
</TableContainer>
    
    </>
  );
}

export default Product;
