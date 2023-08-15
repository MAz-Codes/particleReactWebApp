import React, { forwardRef } from 'react';
import {Heading, Text, Box, Grid, Image, useBreakpointValue, Divider, flexbox} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';


const Contact = forwardRef((props, ref) => {
    const { t } = useTranslation();
    const items = t('contact.placedCookies.items');
    const displayItems = Array.isArray(items) ? items.join(', ') : items;
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseContact}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <Grid maxH="90%" maxW="90%">
                <Box>
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>{t('contact.title')}</Heading>
                </Box>
                <Divider mt="10"></Divider>
                <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="start"
                    minHeight="95vh"
                    py="10"
                    color=" #bdc3c7"
                    w="80vw">
                    <Grid pt="10"gap="5vw" templateRows={"repeat(1, 1fr)"}  >
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} >{t('contact.touch')}</Heading>
                        <Text fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }} fontWeight="bold" textAlign="left">
                        {t('contact.callme')}
    </Text>
        <Grid  templateColumns={"repeat(2, 1fr)"} gap="10">
            <Box display={"flex"} gap="10">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <Text fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }}>
                    info@misaghazimi.com
                </Text>
            </Box>
            <Box display={"flex"} gap="10">
            <div>
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <Text fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }}>
                +49 17661369344
            </Text>
            </Box>
        </Grid>
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} >{t('contact.data')}</Heading>
                            <Text  fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }} textAlign="left">{t('contact.person')}<br></br><br></br>

                            {t('contact.coded')} <a href='https://github.com/MAz-Codes/particleReactWebApp' target='_blank'>&lt;/{t('contact.here')}&gt; </a>. <br/><br/> {t('contact.cookie')}</Text>
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} ><br/>{t('contact.eu')}</Heading>
                            <Text  fontSize={{ base: "sm", md: "10", lg: "13", xl: "17" }} textAlign="left">{t('contact.policy')}<br/><br/>

                            {t('contact.introduction.title')}<br/><br/>
                            {t('contact.introduction.content')}<br/><br/>

                            {t('contact.whatAreCookies.title')}<br/><br/>
                            {t('contact.whatAreCookies.content')}<br/><br/>

                            {t('contact.whatAreScripts.title')}<br/><br/>
                            {t('contact.whatAreScripts.content')}<br/><br/>

                            {t('contact.whatIsWebBeacon.title')}<br/><br/>
                            {t('contact.whatIsWebBeacon.content')}<br/><br/>

                            {t('contact.cookies.title')}<br/><br/>
                            {t('contact.cookies.technicalOrFunctional.title')}<br/><br/>

                            {t('contact.cookies.technicalOrFunctional.content')}<br/><br/>

                            {t('contact.cookies.marketingOrTracking.title')}<br/><br/>

                            {t('contact.cookies.marketingOrTracking.content')}<br/><br/>

                            {t('contact.placedCookies.title')}<br/><br/>
                            {t('contact.placedCookies.items.one')}<br/>
                            {t('contact.placedCookies.items.two')}<br/>
                            {t('contact.placedCookies.items.three')}<br/>
                            {t('contact.placedCookies.items.four')}<br/>
                            {t('contact.placedCookies.items.five')}<br/>
                            {t('contact.placedCookies.items.six')}<br/>
                            {t('contact.placedCookies.items.seven')}<br/>
                            {t('contact.placedCookies.items.eight')}<br/>
                            {t('contact.placedCookies.items.nine')}<br/>
                            {t('contact.placedCookies.items.ten')}<br/>
                            {t('contact.placedCookies.items.eleven')}<br/>
                            {t('contact.placedCookies.items.twelve')}<br/>
                            {t('contact.placedCookies.items.thirteen')}<br/><br/>


                            {t('contact.consent.title')}<br/><br/>
                            {t('contact.consent.content')}<br/><br/>
                            {t('contact.consent.manageYourConsentSettings.title')}<br/><br/>

                            {t('contact.consent.manageYourConsentSettings.items.one')}<br/>
                            {t('contact.consent.manageYourConsentSettings.items.two')}<br/>
                            {t('contact.consent.manageYourConsentSettings.items.three')}<br/>
                            {t('contact.consent.manageYourConsentSettings.items.four')}<br/><br/>

                            {t('contact.enableDisableDeleteCookies.title')}<br/><br/>
                            {t('contact.enableDisableDeleteCookies.content')}<br/><br/>

                            {t('contact.yourRights.title')}<br/><br/>
                            {t('contact.yourRights.content')}<br/><br/>

                            {t('contact.contactDetails.title')}<br/><br/>
                            {t('contact.contactDetails.content')}<br/><br/>
                            {t('contact.contactDetails.name')}<br/><br/>
                            {t('contact.contactDetails.address')}<br/><br/>
Website: https://misaghazimi.com<br/><br/>
Email: info@misaghazimi.com</Text>
                    </Grid>
                </Box>
                </Grid>
        </div>
    );
});

export default Contact;
