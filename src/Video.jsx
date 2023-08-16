import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import {Heading,Divider, Text, Box, Grid, Image, useBreakpointValue} from '@chakra-ui/react';
import Outside from "/src/assets/Pics/Video_Outside.png"
import Verloren from "/src/assets/Pics/Video_Verloren.png"
import Water from "/src/assets/Pics/Video_Blackwater.png"
import Hideous from"/src/assets/Pics/Video_Hideous.png"
import Holes from "/src/assets/Pics/Video_BlakHoles.jpg"
import Diaries from "/src/assets/Pics/Video_Panic.png"
import Krumm from "/src/assets/Pics/Video_Krum.png"
import SUM from "/src/assets/Pics/Video_IIISUM.png"
import CAN from "/src/assets/Pics/Video_CAN.png"
import Inmotion from "/src/assets/Pics/Video_Inmotion.png"
import { useTranslation } from 'react-i18next';

    const Video = forwardRef((props, ref) => {
    const { t } = useTranslation();

    const infos= [
        {id: "1",
        src: Outside,
        url: 'https://youtu.be/JTzOsqDAvQM',
        title: "Outside",
        descrition: t('video.outside')
        },
        {id: "2",
        src: Verloren,
        url: 'https://vimeo.com/720722113',
        title: "Die Verlorenen",
        descrition: t('video.verloren')
        },
        {id: "3",
        src: Water,
        url: 'https://youtu.be/TNUYNVULggw',
        title: "Black Water",
        descrition: t('video.water')
        },
        {id: "4",
        src: Hideous,
        url: 'https://youtu.be/wA12-VgHd9o',
        title: "Hideous",
        descrition: t('video.hideous')
        },
        {id: "5",
        src: Holes,
        url: 'https://youtu.be/-fnmWY0UJp8',
        title: "Black Holes",
        descrition: t('video.holes')
        },
        {id: "6",
        src: Diaries,
        url: 'https://vimeo.com/190782870',
        title: "Panic Driven Diaries",
        descrition: t('video.panic')
        },
        {id: "7",
        src: Krumm,
        url: 'https://vimeo.com/179872714',
        title: "Krumm ist der Pfad",
        descrition: t('video.krumm')
        },
        {id: "8",
        src: SUM,
        url: 'https://youtu.be/JTzOsqDAvQM',
        title: "IIISUM",
        descrition: t('video.sum')
        },
        {id: "9",
        src: CAN,
        url: 'https://vimeo.com/99407831',
        title: "C.A.N",
        descrition: t('video.can')
        },
        {id: "10",
        src: Inmotion,
        url: 'https://vimeo.com/99226746',
        title: "Inmotion",
        descrition: t('video.inmotion')
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
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>{t('video.disco')}</Heading>
                    <Text fontSize={{ base: "xs", md: "15", lg: "23", xl: "30" }} color={"#bdc3c7"}>{t('video.desco')}</Text>
                </Box>
                <Divider mt="10"></Divider>
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
                                <Text mx="1vw" mt="1vw" fontSize={{ base: "xl", md: "25", lg: "28", xl: "32" }} fontWeight="bold" textAlign="left">{info.title}</Text>
                                <Text my={"1vw"} mx="1vw" fontSize={{ base: "md", md: "15", lg: "17", xl: "20" }} textAlign="left">{info.descrition}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
});

export default Video;