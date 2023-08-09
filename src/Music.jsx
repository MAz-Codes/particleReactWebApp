import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Grid, Card, Stack, CardBody, CardFooter, Image, Heading, Text, VStack, ButtonGroup, Button } from '@chakra-ui/react'

const Music = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <VStack gap={20}>
            <Heading fontSize={50} color={"white"}>DISCOGRAPHY</Heading>
            <Text fontSize={30} color={"white"}>MUSIC (CO)WRITTEN AND PRODUCED BY ME</Text>            
            <Grid   
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={4}>
                <div >
                <Card  mx="10" maxW={['50%']}>
                    <CardBody>
                        <Image
                            src='/src/assets/Pics/Album-Cover-MÂNĪ-768x768.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            objectFit="cover" // Ensures the image covers its container without stretching
                            w="100%" // Makes the image take up the full width of its parent
                        />
                        <Stack mt={['4', '5', '6']} spacing={['2', '3']}>
                            <Heading fontFamily={"Elianto"} size={['sm', 'md']}>Black Holes (feat. Maha Taheri)</Heading>
                            <Text fontSize={['sm', 'md']}>
                                MÂNĪ | 2017
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter justifyContent={"center"}>
                        <ButtonGroup spacing={['4', '6', '10']}>
                            <Button variant='solid' colorScheme='blue'>
                                SPOTIFY
                            </Button>
                            <Button fontFamily="Elianto">
                                BANDCAMP
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                </div>

                <div >
                <Card  mx="10" maxW={['50%']}>
                    <CardBody>
                        <Image
                            src='/src/assets/Pics/Album-Cover-MÂNĪ-768x768.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            objectFit="cover" // Ensures the image covers its container without stretching
                            w="100%" // Makes the image take up the full width of its parent
                        />
                        <Stack mt={['4', '5', '6']} spacing={['2', '3']}>
                            <Heading fontFamily={"Elianto"} size={['sm', 'md']}>Black Holes (feat. Maha Taheri)</Heading>
                            <Text fontSize={['sm', 'md']}>
                                MÂNĪ | 2017
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter justifyContent={"center"}>
                        <ButtonGroup spacing={['4', '6', '10']}>
                            <Button variant='solid' colorScheme='blue'>
                                SPOTIFY
                            </Button>
                            <Button fontFamily="Elianto">
                                BANDCAMP
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                </div>
            </Grid>
            </VStack>
            
        </div>
    );
});

export default Music;
