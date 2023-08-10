import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBandcamp, faSpotify, faItunesNote } from '@fortawesome/free-brands-svg-icons';
import i18n from "/src/i18n.jsx"
import { useTranslation } from 'react-i18next';

import {Divider, Tag, Box, Grid, Card, Stack, CardBody, CardFooter, Image, Heading, Text, VStack, ButtonGroup, Button } from '@chakra-ui/react'
import BlackHoles from "/src/assets/Pics/Cover_Black_Holes.png"
import BlackWater from "/src/assets/Pics/Cover_Black_Water.jpg"
import Vier from "/src/assets/Pics/Cover_Vier.jpg"
import CruelSanity from "/src/assets/Pics/Cover_Cruel.jpg"
import Hideous from "/src/assets/Pics/Cover_Hideous.jpg"
import Grebe from "/src/assets/Pics/Cover_Grebe.jpeg"
import Panic from "/src/assets/Pics/Cover_Panic.png"
import Between from "/src/assets/Pics/Cover_Between.jpg"
import Outside from "/src/assets/Pics/Cover_Outside.png"
import Ma from "/src/assets/Pics/Cover_Ma.jpeg"
import Abrupt from "/src/assets/Pics/Cover_Abrupt.jpg"


  const Music = forwardRef((props, ref) => {
  const { t } = useTranslation();

    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <Grid  maxH="90%" maxW="90%">

            <Box>
              <Heading fontSize={{base:"xl",md: "30", lg: "50"}} color={"#bdc3c7"}>{t('music.disco')}</Heading>
              <Text fontSize={{base:"sm",md: "15", lg: "30"}} color={"#bdc3c7"}>{t('music.desc')}</Text>
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
                      src={Abrupt}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Abrupt (LP)</Heading>
                      <Text fontSize="sm" >
                        Warm Mud Records
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ | 2022
                      </Text>
                    <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/album/abrupt")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/4pPEWv0ELMtoMM9lRxvtVZ")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/abrupt-ep/1646808809?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={Ma}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Ma (Single)</Heading>
                      <Text fontSize="sm" >
                        feat. Maha Taheri
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ | 2022
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/track/ma-feat-maha-taheri")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/track/2637fXcITPvM4LF8v4ammL")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/ma-feat-maha-taheri/1632733823?i=1632733824&l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={Outside}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Outside (Single)</Heading>
                      <Text fontSize="sm" >
                        Warm Mud Records
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ | 2022
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/track/outside")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/5FelbErv364itID9CZr0gT")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/outside-single/1619353946?l=en-GB")}icon={faItunesNote} />
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
                      src={Grebe}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Plume (EP)</Heading>
                      <Text fontSize="sm" >
                        feat. MÂNĪ
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        GREBE | 2021
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                   
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/5sFICLBGEWUTzUwC4frsM7")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/plume-ep/1586443521?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={CruelSanity}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Cruel Sanity (Single)</Heading>
                      <Text fontSize="sm" >
                        Warm Mud Records
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ | 2019
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/track/cruel-sanity")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/track/0bQE8dqCXlVXXtPGwd3Q4X")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/cruel-sanity-single/1479327227?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={BlackWater}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Black Water (Single)</Heading>
                      <Text fontSize="sm" color={"transparent"}>
                        _
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        GETIER | 2019
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/7c0v1ONcqY5xqDMGovObvd")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/black-water-single/1459402043?l=en-GB")}icon={faItunesNote} />
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
                      src={Vier}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>VIER (EP)</Heading>
                      <Text fontSize="sm" color={"transparent"}>
                        _
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        MÂNĪ | 2018
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/album/vier")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/1sPiX8RHVktQxKRWjXf8P0")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/vier-ep/1437266944?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={Hideous}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Hideous (Single)</Heading>
                      <Text fontSize="sm" color={"transparent"}>
                        _
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        GETIER | 2018
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/2WqlEPmKGEkq2UEdJ95kXJ")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/hideous-single/1375517684?l=en-GB")}icon={faItunesNote} />
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
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw",xl:"3vw"}}>
                      <FontAwesomeIcon className="all-bandcamp" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mani-music.bandcamp.com/album/vier")}icon={faBandcamp} />
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/1sPiX8RHVktQxKRWjXf8P0")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/black-holes-feat-maha-taheri-single/1317485502?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

              </Grid>

              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(2, .85fr)",xl: "repeat(2, .85fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={Panic}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Panic Driven Diaries</Heading>
                      <Text fontSize="sm" color={"transparent"}>
                        _
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        Misagh Azimi | 2016
                      </Text>

                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw", xl:"3vw"}}>
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/7brfsfUyzGkUZs4c9cpI34")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/panic-driven-diaries-ep/1147925161?l=en-GB")}icon={faItunesNote} />
                    </Stack>
                  </CardFooter>
                </Card>

                <Card maxW='sm' bg="white" textColor={"black"} borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}>
                  <CardBody m="1" p="0">
                    <Image
                      borderTopRightRadius={"30"}
                      borderTopLeftRadius={"30"}
                      src={Between}
                      style={{ 
                        width: '100%',
                      }}
                    />
                    <Stack mt='6' spacing='3' mx="5">
                      <Heading size='md'>Between Two Worlds</Heading>
                      <Text fontSize="sm" color={"transparent"}>
                        _
                      </Text>
                      <Text fontSize="sm" py="1vh">
                        Misagh Azimi | 2015
                      </Text>
                      <Divider/>
                    </Stack>
                  </CardBody>
                  <CardFooter justifyContent={"center"} alignItems="center" >
                    <Stack direction={"row"} spacing={{base:'12vw', md:"7vw", lg:"5vw" ,xl:"3vw"}}>
                      <FontAwesomeIcon className="all-spotify" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://open.spotify.com/album/6TXqwACx4NEzAQvEauB4HB")}icon={faSpotify} />
                      <FontAwesomeIcon className="all-apple" fontSize={"40"} _hover={{backgroundColor:"#22c3f4", textColor:"black", borderColor:"transparent", }} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://music.apple.com/de/album/between-two-worlds/985396379?l=en-GB")}icon={faItunesNote} />
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
