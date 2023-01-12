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
  <FormControl  px='100px' py={'30px'}  backgroundColor={'#927A55'} color='white' height={'100vh'}>
  <FormLabel>Name</FormLabel>
  <Input type='text' focusBorderColor='lime' name='name' onChange={(e)=>handleAdd(e)}/>
  <FormLabel>UnitPrice</FormLabel>
  <Input type='number' focusBorderColor='lime' name='unitPrice' onChange={(e)=>handleAdd(e)}/>
  <Button my={'20px'} px='30px' py={'10px'}  backgroundColor={'transparent'} border='1px solid white' color={'white'} transition='0.5s' _hover={{color:'black', backgroundColor:'white'}} onClick={handleAddValue}>ADD</Button>


</FormControl>

    </>
  )
}

export default AddProduct