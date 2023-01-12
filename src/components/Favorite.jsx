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
    {favorite &&
          favorite.map((i, key) => (
            <Tr key={key}>
              <Td>{i.id}</Td>
              <Td>{i.name}</Td>
              <Td>{i.unitPrice}</Td>
              <Td isNumeric><Button onClick={()=>handleClick(i)}>Delete</Button></Td>
              <Td isNumeric><Button>Update</Button></Td>
              {/* <Td isNumeric><Button onClick={()=>handleFavorite(i)}>Favorite</Button></Td> */}
            </Tr>
          ))}
    
    </Tbody>
  
  </Table>
</TableContainer>
    


    </>
  )
}

export default Favorite