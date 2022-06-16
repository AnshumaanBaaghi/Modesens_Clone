import { FilterProducts } from './FilterProducts';
import "./beauty.css"
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Grid,
  Button
} from '@chakra-ui/react';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function BeautyProducts() {
  const [beautyData,setBeautyData]=useState([])
    const GetData=()=>{
      axios.get("http://localhost:8080/modesens/beauty")
      .then(({data})=>{
        setBeautyData(data)
      })
      console.log(beautyData);
    }
    useEffect(()=>{
      GetData()
    },[])
  return (
    <>
      <Box textAlign={"left"} marginLeft={"20%"}>
        <Heading>Designer Beauty</Heading>
        <Text fontWeight={500} marginTop={6}>Designer beauty with price comparison across 500+ stores in one place. Discover the latest designer beauty at ModeSens</Text>
      </Box>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}} >
          <Box width='20%'>
            <FilterProducts />
          </Box>
          <Box width='80%'>
              {/* <Heading as="h3" textAlign="center" fontSize={'3xl'}>ALL Products</Heading> */}              
              <Grid  display="grid" gridTemplateColumns="repeat(4,1fr)"  >
                  {beautyData?.map((item)=>( 
                      <ProductSimple  Id={item._id} image={item.url} name={item.name}  line={item.desc} price={item.price}/>
                  ))}
              </Grid>
          </Box>
        </Stack>
      </Box>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
    )
};
 function ProductSimple({Id,image,name,line,price}) {
  return (
    <Center py={12} >
      <Box  
      key={Id}
        role={'group'}
        p={6}
        maxW={'340px'}
        height={"auto"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.1000')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        >
        <Box 
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(1px)',
            zIndex: 1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}  >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
             boxShadow={'2xl'}
            src={image}
           
           />
        </Box>
        <Stack pt={2} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'sans-serif'} fontWeight={500} color={'GrayText.400'} marginTop={10}>
          {name}
          </Heading>
          <Text  fontSize={'m'} textTransform={'lowercase'}color={'GrayText'}>
            {line}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={500} fontSize={'xl'}>
             $20 - ${price}
            </Text>
          </Stack>
          <Link to={`/ProductPage/${Id}`} style={{textDecoration:"none" ,color:"CaptionText"}}>
          <Button colorScheme='teal' variant='outline'width={200}  className="QuickView">
            Quick View
          </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}