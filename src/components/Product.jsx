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
  Button,
  useToast

} from '@chakra-ui/react'
function Product() {
  let  product =useSelector(state=>state.productReducer)
  let favorite= useSelector(state=>state.favoriteReducer)
  const toast = useToast()
 let dispatch=useDispatch()
  useEffect(() => {
    dispatch(productAction.getAll())
 
  }, []);
  const handleClick=(index)=>{
    dispatch({type: "DELETE_PRODUCT", payload:index})
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })

  }
  const handleFavorite=(index)=>{
    let checkFavorite=favorite.find(q=>q !=index)
    if(!checkFavorite){
      dispatch(favoriteAction.favoriteAdd(index))

    }


  }
 

  return (
    <>
    <TableContainer px='100px' py={'30px'} backgroundColor={'#927A55'} color='white'>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>UnitPrice</Th>
        <Th isNumeric>Delete</Th>
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
              <Td isNumeric><Button onClick={()=>handleClick(i)} backgroundColor={'transparent'} border='1px solid white' color={'white'} transition='0.5s' _hover={{color:'black', backgroundColor:'white'}}>Delete</Button></Td>
              <Td isNumeric><Button onClick={()=>handleFavorite(i)} backgroundColor={'transparent'} border='1px solid white' color={'white'} transition='0.5s' _hover={{color:'black', backgroundColor:'white'}}>Favorite</Button></Td>
            </Tr>
          ))}
    
    </Tbody>
  
  </Table>
</TableContainer>
    
    </>
  );
}

export default Product;
