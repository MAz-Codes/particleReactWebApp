import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {Divider, Box, Grid, Card, Stack, CardBody, CardFooter, Image, Heading, Text, VStack, ButtonGroup, Button } from '@chakra-ui/react'


const Research = forwardRef((props, ref) => {
    const { t } = useTranslation();
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseVideo}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <Grid maxH="90%" maxW="90%">
                <Box>
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>(ARTISTIC) RESEARCH</Heading>
                </Box>
                <Divider mt="10"></Divider>
                <Box
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    minHeight="95vh"
                    py="10"
                    textColor={"white"}
                    w="80vw">
                    <Grid gap="5vw" templateRows={`repeat(3, 1fr)`} w="100%">
                        <Box text-align="left">
                            <Text  ml="1vw" mt="1vw" fontSize={{ base: "lg", md: "2", lg: "24", xl: "28" }} fontWeight="bold" textAlign="left">
                            2023 | <Text  fontSize= {{ base: "xl", md: "25", lg: "28", xl: "32" }}as="i"><a textColor={"#bdc3c7"} href="https://www.dropbox.com/scl/fi/0dr98xj2ot77794xti9c8/Integrating-Digital-Competency-in-Music-Education_Misagh-Azimi.pdf?rlkey=nud81q24jvpcawmie60fol9bh&dl=0" target='_blank'>Harmonizing Tradition and Innovation</a></Text> - Integrating Digital Competency in Music Education (Position Paper)
                            </Text>
                            <Text my={"1vw"} ml="1vw" fontSize={{ base: "md", md: "15", lg: "17", xl: "20" }} textAlign="left">The digital era's influence on music has been significant and transformative, affecting the aesthetics, the methodologies of creation, and the way it is consumed. Yet, the integration of these digital innovations into music education has been slow, often reduced to niche courses or dismissed as inferior to traditional methods. This writing explores the importance of musical digital literacy, accessibility of digital means and potential applications of hybrid education models in the current music education paradigm specifically at schools and universities. It emphasizes the need for educators to adapt to these changes, ensuring that future generations are equipped with the skills, knowledge, and passion they need to thrive in the rapidly changing music landscape. Read the position paper<a textColor={"#bdc3c7"} href="https://www.dropbox.com/scl/fi/0dr98xj2ot77794xti9c8/Integrating-Digital-Competency-in-Music-Education_Misagh-Azimi.pdf?rlkey=nud81q24jvpcawmie60fol9bh&dl=0" target='_blank'> &lt;/here&gt;.</a></Text>
                        </Box>

                        <Box text-align="left">
                            <Text  ml="1vw"  fontSize={{ base: "lg", md: "2", lg: "24", xl: "28" }} fontWeight="bold" textAlign="left">2021 | Game Audio and Possible Interactive Implications for Non-Linear Music</Text>
                            <Text my={"1vw"} ml="1vw" fontSize={{ base: "md", md: "15", lg: "17", xl: "20" }} textAlign="left">Supported by GEMA (Society for musical performing and mechanical reproduction rights), this 4 month artistic research focused on the tools used for audio and music implementation into video games and their possible implications for creating interactive audio and music pieces, performances and installations. I currently offer the results as a part of my lecture “Introduction to Game Audio” at the Folkwang University of the Arts <a textColor={"#bdc3c7"} href="https://organizer.folkwang-uni.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=26082&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung" target='_blank'> &lt;/here&gt;.</a></Text>
                        </Box>

                        <Box text-align="left">
                            <Text  ml="1vw"  fontSize={{ base: "lg", md: "2", lg: "24", xl: "28" }} fontWeight="bold" textAlign="left">2019-2020 | -eye- cannot erase - Virtual Reality Applications in the Arts</Text>
                            <Text my={"1vw"} ml="1vw" fontSize={{ base: "md", md: "15", lg: "17", xl: "20" }} textAlign="left">Supported and funded by the European Center for Creative Economy and the Ministry of Culture and Education of the state of NRW in Germany, this artistic research worked on the applications of virtual reality in digital and modern arts. An interactive audio-visual piece was composed for a VR headset and a series of talks, podcasts and tutorials about Unity, immersion, Cinema 4D etc. were produced and published <a textColor={"#bdc3c7"} href="https://www.youtube.com/playlist?list=PLvWSyFb_p1oMzSEQm_2NjZNzfxWzkwI7f" target='_blank'> &lt;/here&gt;</a> as the result of the research.</Text>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
});

export default Research;
