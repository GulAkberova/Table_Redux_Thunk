import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

function Favorite() {
  let favorite= useSelector(state=>state.favoriteReducer)
  const dispatch =useDispatch()
  const handleClick=(index)=>{
    dispatch({type: "DELETE_FAVORITE", payload:index})

  }

  return (
    <>
      <TableContainer px='100px' py={'30px'} backgroundColor={'#927A55'} color='white' >
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>UnitPrice</Th>
        <Th isNumeric>DElete</Th>
        <Th isNumeric>No Favorite</Th>
      </Tr>
    </Thead>
    <Tbody>
    {favorite &&
          favorite.map((i, key) => (
            <Tr key={key}>
              <Td>{i.id}</Td>
              <Td>{i.name}</Td>
              <Td>{i.unitPrice}</Td>
              <Td isNumeric><Button onClick={()=>handleClick(i)}  backgroundColor={'transparent'} border='1px solid white' color={'white'} transition='0.5s' _hover={{color:'black', backgroundColor:'white'}}>Delete</Button></Td>
              <Td isNumeric><Button  backgroundColor={'transparent'} border='1px solid white' color={'white'} transition='0.5s' _hover={{color:'black', backgroundColor:'white'}}>Favorite</Button></Td>
            </Tr>
          ))}
    
    </Tbody>
  
  </Table>
</TableContainer>
    


    </>
  )
}

export default Favorite