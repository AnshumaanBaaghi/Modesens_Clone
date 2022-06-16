import React,{useState,useEffect} from 'react'
import { Select,Box,Text,Checkbox,CheckboxGroup,VStack, Button } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { getProductsdata } from '../Redux/Pages_redux/Action'

export const FilterProducts = () => {
    const [CategoryValues,setCategoryValues]=useState([])
    function handleFilter(value){

        setCategoryValues(value)
    }
  return (
    <>
      
     <Box >
       <Box >
        <Box >
            <Text marginLeft={"-44%"} fontWeight={"400"} marginBottom={1} marginTop={"10%"}>10,000+ ITEMS</Text>
            <Text marginBottom={1} fontSize="18px" marginLeft={"-50%"} fontWeight={"500"}>Filter By:</Text>
            <CheckboxGroup colorScheme='green' defaultValue={CategoryValues} onChange={handleFilter}>
              <VStack alignItems={"baseline"} marginLeft={"18%"}>
                <Checkbox value="Men's clothing">Mens' Clothing</Checkbox>
                < Checkbox value="women's clothing">Womens' Clothing</Checkbox>
                <Checkbox value='Kids clothing'>Kids Clothing</Checkbox>
              </VStack>
            </CheckboxGroup>
            <Button colorScheme='#000' backgroundColor={"black"} marginTop={10} marginLeft={"-20%"} width={"50%"}>Save My Search</Button>
        </Box>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"}>Related Category Women</Text>
          <Text>Beauty Sale</Text>
          <Text>Beauty</Text>
          <Text>Home</Text>
          <Text>Accessories</Text>
          <Text>Bags</Text>
          <Text>Clothing</Text>
          <Text>Shoes</Text>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"}>Related Category Women</Text>
          <Text>Grooming Sale</Text>
          <Text>Grooming</Text>
          <Text>Home</Text>
          <Text>Accessories</Text>
          <Text>Bags</Text>
          <Text>Clothing</Text>
          <Text>Shoes</Text>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"}>Related Category Kids</Text>
          <Text>Care Sale</Text>
          <Text>Care</Text>
          <Text>Home</Text>
          <Text>Accessories</Text>
          <Text>Bags</Text>
          <Text>Clothing</Text>
          <Text>Shoes</Text>
       </Box>
      </Box>
   </>
  )
}