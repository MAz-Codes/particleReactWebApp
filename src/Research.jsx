import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
    Grid,
    Box,
    Text,
    AspectRatio,
    Heading,
    Divider,
    Link,
    useColorModeValue,
  } from "@chakra-ui/react";


const Research = forwardRef((props, ref) => {
    const overlayColor = useColorModeValue("rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.8)");
    const { t } = useTranslation();
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseResearch}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <Grid maxH="90%" maxW="90%">
                <Box>
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>{t('research.title')}</Heading>
                </Box>
                <Divider mt="10"></Divider>
                <Box
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    minHeight="95vh"
                    py="10"
                    color={"white"}
                    w="80vw">
                    <Grid gap="5vw" templateRows={`auto`} w="100%">
                        <Box text-align="left">
                            <Text  ml="1vw" mt="1vw" fontSize={{ base: "lg", md: "20", lg: "24", xl: "28" }} fontWeight="bold" textAlign="left">
                            2023 | <Text  fontSize= {{ base: "xl", md: "25", lg: "28", xl: "32" }}as="i"><a color={"#bdc3c7"} href="https://www.dropbox.com/scl/fi/yq13hgpeu096kj8wqqwq6/Integrating-Digital-Competency-in-Music-Education_Misagh-Azimi.pdf?rlkey=pnqbfs4j2aptlwojeftx4rikz&dl=0" target='_blank'>{t('research.paper.titel')}</a></Text> {t('research.paper.subtitle')}
                            </Text>
                            <Text my={"1vw"} ml="1vw" fontSize={{ base: "sm", md: "15", lg: "17", xl: "20" }} textAlign="left">{t('research.paper.content')}<a color={"#bdc3c7"} href="https://www.dropbox.com/scl/fi/0dr98xj2ot77794xti9c8/Integrating-Digital-Competency-in-Music-Education_Misagh-Azimi.pdf?rlkey=nud81q24jvpcawmie60fol9bh&dl=0" target='_blank'> &lt;/{t('contact.here')}&gt;.</a></Text>
                        </Box>
                        <AspectRatio ratio={16 / 9}>
                            <Box position="relative" width="100%"  >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/DCB2lho8uw0?autoplay=1&loop=1&controls=0&mute=1&playlist=DCB2lho8uw0" 
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
                                ></iframe>
                                <Box position="absolute" top="0" right="0" bottom="0" left="0" bg={overlayColor} zIndex="1" />
                                <Box position="absolute" top="25%" right="0" bottom="0" left="0" zIndex="2">
                                    <Text ml="1vw" fontSize={{ base: "lg", md: "20", lg: "24", xl: "28" }} fontWeight="bold">2021 | {t('research.game.title')}</Text>
                                    <Text my={"1vw"} ml="1vw" fontSize={{ base: "sm", md: "15", lg: "17", xl: "20" }} textAlign="left">{t('research.game.content')}<a color={"#bdc3c7"} href="https://organizer.folkwang-uni.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=26082&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung" target='_blank'> &lt;/{t('contact.here')}&gt;.</a></Text>
                                </Box>
                            </Box>
                        </AspectRatio>
                        <AspectRatio ratio={16 / 9}>
                            <Box position="relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/EDRnyJSqTAQ?autoplay=1&loop=1&controls=0&mute=1&playlist=EDRnyJSqTAQ" 
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    style={{ position: 'absolute', zIndex: 0 }}
                                ></iframe>
                                <Box position="absolute" top="0" right="0" bottom="0" left="0" bg={overlayColor} zIndex="1" />
                                <Box position="absolute" top="25%" right="0" bottom="0" left="0" zIndex="2" textAlign="left">
                                    <Text ml="1vw" fontSize={{ base: "lg", md: "20", lg: "24", xl: "28" }} fontWeight="bold">2019-2020 | {t('research.vr.title')} - {t('research.vr.subtitle')}</Text>
                                    <Text my={"1vw"} ml="1vw" fontSize={{ base: "sm", md: "15", lg: "17", xl: "20" }} textAlign="left">{t('research.vr.content')} <a color={"#bdc3c7"} href="https://www.youtube.com/playlist?list=PLvWSyFb_p1oMzSEQm_2NjZNzfxWzkwI7f" target='_blank'> &lt;/{t('contact.here')}&gt;</a> {t('research.vr.content2')}.</Text>
                                </Box>
                            </Box>
                        </AspectRatio>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
});

export default Research;