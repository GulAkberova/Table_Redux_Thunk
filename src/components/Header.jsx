import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  Spacer,
  Text,
  useToast
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
  let favorite= useSelector(state=>state.favoriteReducer)
  

  return (
    <>
      <Box w="100%" px='100px' backgroundColor={'#836D4C'} color='white'>
       <Box   py="30px" px={'30px'}>
       <Flex >
          <Center>
          <Box>
          <Text fontSize='3xl'><NavLink to={'/'}>Redux Thunk</NavLink></Text>
          </Box>
          </Center>
          <Spacer />
          <Center>
          <Box>
            <UnorderedList>
              <Center>
              <Flex>
                <ListItem mx="20px"  cursor={'pointer'} transition='0.5s' _hover={{color:'black'}}><NavLink to={'/'}>Product</NavLink></ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'black'}}><NavLink to={'/add'}>Add Data</NavLink></ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'black'}}><NavLink to={'/favorite'}>Favorite {favorite.length}</NavLink></ListItem>
              </Flex>
              </Center>
            </UnorderedList>
          </Box>
          </Center>
        
      
        </Flex>
       </Box>
      </Box>
    </>
  );
}

export default Header;