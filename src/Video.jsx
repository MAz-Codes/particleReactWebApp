import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import {Heading, Text, Box, Grid, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';


const Video = forwardRef((props, ref) => {

    const infos= [
        {id: "1",
        src: "/src/assets/Pics/Video_Outside.png",
        url: 'https://youtu.be/JTzOsqDAvQM',
        title: "Outside",
        descrition: "2023 | Music Video made by prompting into a generative AI video tool"
        },
        {id: "2",
        src: "/src/assets/Pics/Video_Verloren.png",
        url: 'https://vimeo.com/720722113',
        title: "Die Verlorenen",
        descrition: "2023 | A film I composed the music for, directed by Simon Baucks"
        },
        {id: "3",
        src: "/src/assets/Pics/Video_Blackwater.png",
        url: 'https://youtu.be/TNUYNVULggw',
        title: "Black Water",
        descrition: "2019 | Music Video GETIER's Single"
        },
        {id: "4",
        src: "/src/assets/Pics/Video_Hideous.png",
        url: 'https://youtu.be/wA12-VgHd9o',
        title: "Hideous",
        descrition: "2018 | Music Video GETIER's Single, made by Rebecca ter Braak and Nico Kleemann"
        },
        {id: "5",
        src: "/src/assets/Pics/Video_BlakHoles.jpg",
        url: 'https://youtu.be/-fnmWY0UJp8',
        title: "Black Holes",
        descrition: "2017 | Directed by Simon Baucks"
        },
        {id: "6",
        src: "/src/assets/Pics/Video_Panic.png",
        url: 'https://vimeo.com/190782870',
        title: "Panic Driven Diaries",
        descrition: "2016 | 3 channel video with 4 audio channels made using Cinema 4D"
        },
        {id: "7",
        src: "/src/assets/Pics/Video_Krum.png",
        url: 'https://vimeo.com/179872714',
        title: "Krumm ist der Pfad",
        descrition: "2016 | 2 channel video 4 channel audio"
        },
        {id: "8",
        src: "/src/assets/Pics/Video_IIISUM.png",
        url: 'https://youtu.be/JTzOsqDAvQM',
        title: "IIISUM",
        descrition: "2015 | This 3 channel video piece was premiered during the NOW! Festival."
        },
        {id: "9",
        src: "/src/assets/Pics/Video_CAN.png",
        url: 'https://vimeo.com/99407831',
        title: "C.A.N",
        descrition: "2014 | C.A.N was made after many beers."
        },
        {id: "10",
        src: "/src/assets/Pics/Video_Inmotion.png",
        url: 'https://vimeo.com/99226746',
        title: "Inmotion",
        descrition: "2014 | I composed and produced the music for this award winning video by Simon Baucks."
        },
    ]

    const columns = useBreakpointValue({ base: 1, md: 2 });
    const handlePlayClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseVideo}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <Grid maxH="90%" maxW="90%">
                <Box>
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>VIDEOS</Heading>
                    <Text fontSize={{ base: "xs", md: "15", lg: "23", xl: "30" }} color={"#bdc3c7"}>MULTI-CHANNEL VIDEOS, MUSIC VIDEOS, FILMS, AND ANIMATIONS</Text>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="95vh"
                    py="10"
                    textColor={"white"}
                    w="80vw">
                    <Grid gap="5vw" templateColumns={`repeat(${columns}, 1fr)`} textColor={"black"}>
                        {infos.map((info) => (
                            <Box key={info.id} borderTopRightRadius={"18"} borderTopLeftRadius={"18"} bg="white">
                                <Box position="relative" pt="56.25%" overflow="hidden">
                                    <Image
                                        borderRadius={"18px 18px 0 0"}
                                        src={info.src}
                                        alt={info.title}
                                        objectFit="cover"
                                        position="absolute"
                                        top="0"
                                        p="1"
                                        left="0"
                                        width="100%"
                                        height="100%"
                                    />
                                
                                        <Box className="icon-hover" _hover={{
                                            color: "transparent",
                                            transform: "translate(-50%, -50%) scale(1.2)"
                                        }} transition="transform .4s"
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        onClick={() => handlePlayClick(info.url)}>
                                            <FontAwesomeIcon fontSize='50' color="white" icon={faPlay} />
                                        </Box>
                                    
                                </Box>
                                <Text ml="1vw" mt="1vw" fontSize={{ base: "xl", md: "25", lg: "28", xl: "32" }} fontWeight="bold" textAlign="left">{info.title}</Text>
                                <Text my={"1vw"} ml="1vw" fontSize={{ base: "md", md: "15", lg: "17", xl: "20" }} textAlign="left">{info.descrition}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
});

export default Video;