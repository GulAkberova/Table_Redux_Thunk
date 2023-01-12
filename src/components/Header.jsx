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



function Header() {
  

  return (
    <>
      <Box w="100%" px='100px'>
       <Box  borderBottom={'1px solid #8c8c8c'}  py="30px" px={'30px'}>
       <Flex >
          <Center>
          <Box>
          <Text fontSize='3xl'>Redux Thunk</Text>
          </Box>
          </Center>
          <Spacer />
          <Center>
          <Box>
            <UnorderedList>
              <Center>
              <Flex>
                <ListItem mx="20px"  cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}><NavLink to={'/'}>Product</NavLink></ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}><NavLink to={'/add'}>Add Data</NavLink></ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}><NavLink to={'/favorite'}>Favorite</NavLink></ListItem>
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