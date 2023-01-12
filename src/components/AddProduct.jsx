import React, { useState } from 'react'
import { Input,Stack,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button, } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { productAction } from '../redux/actions/product.action'
function AddProduct() {
  const dispatch=useDispatch()
   const [newValue, setNewValue]=useState({
    name:"",
    unitPrice:''

  })
  const handleAdd=(e)=>{
  const name=e.target.name
  const value=e.target.value

  setNewValue({
    ...newValue,
    [name]:value
  })


  }

  const handleAddValue=()=>{

    dispatch(productAction.getAdd(newValue))
    console.log(newValue)

  }
  return (
    <>
  <FormControl  px='100px' py={'30px'}>
  <FormLabel>Name</FormLabel>
  <Input type='text' focusBorderColor='lime' placeholder='Name' name='name' onChange={(e)=>handleAdd(e)}/>
  <FormLabel>UnitPrice</FormLabel>
  <Input type='number' focusBorderColor='lime' placeholder='UnitPrice' name='unitPrice' onChange={(e)=>handleAdd(e)}/>
  <Button my={'20px'} px='30px' py={'10px'} onClick={handleAddValue}>ADD</Button>


</FormControl>

    </>
  )
}

export default AddProduct