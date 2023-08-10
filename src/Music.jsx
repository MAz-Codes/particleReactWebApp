import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBandcamp, faSpotify, faItunesNote } from '@fortawesome/free-brands-svg-icons';

import {Divider, Tag, Box, Grid, Card, Stack, CardBody, CardFooter, Image, Heading, Text, VStack, ButtonGroup, Button } from '@chakra-ui/react'
import BlackHoles from "/src/assets/Pics/Cover_Black_Holes.png"

const Music = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <Grid  maxH="90%" maxW="90%">

            <Box>
              <Heading fontSize={50} color={"#bdc3c7"}>DISCOGRAPHY</Heading>
              <Text fontSize={30} color={"#bdc3c7"}>MUSIC (CO)WRITTEN AND PRODUCED BY ME</Text>
            </Box>

            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="95vh"
            py="10"
            textColor={"white"}
            w="80vw">
              <VStack gap="2vw">
              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(3, 1fr)",xl: "repeat(3, 1fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

              </Grid>

              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(3, 1fr)",xl: "repeat(3, 1fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

              </Grid>

              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(3, 1fr)",xl: "repeat(3, 1fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

              </Grid>

              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(2, 1fr)",xl: "repeat(2, .85fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackHoles}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>BLACK HOLES (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ 2017
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

  

              </Grid>
              
              </VStack>
            </Box>
            </Grid>
            
        </div>
    );
});

export default Music;
