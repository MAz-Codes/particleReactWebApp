import React, { forwardRef } from 'react';
import {Heading, Text, Box, Grid, Image, useBreakpointValue, Divider, flexbox} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';


const Contact = forwardRef((props, ref) => {
    const { t } = useTranslation();
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseContact}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <Grid maxH="90%" maxW="90%">
                <Box>
                    <Heading fontSize={{ base: "xl", md: "30", lg: "45", xl: "50" }} color={"#bdc3c7"}>CONTACT AND IMPRINT</Heading>
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
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} >GET IN TOUCH</Heading>
                        <Text fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }} fontWeight="bold" textAlign="left">
                        I am always eager to explore new collaborations, whether they're artistically driven or rooted in academic pursuits. My passion lies in merging creativity with knowledge, pushing the boundaries of what's possible. Do not hesitate to contact me.
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
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} >DATA AND THIS WEBSITE</Heading>
                            <Text  fontSize={{ base: "md", md: "13", lg: "16", xl: "20" }} textAlign="left">This website and its contents are designed and maintained by Misagh Azimi.<br></br><br></br>

I coded this website with React, built it with Vite.js and deployed on Netlify. You can find the code <a href='https://github.com/MAz-Codes/particleReactWebApp' target='_blank'>&lt;/here&gt;</a>. <br/><br/> I use Cookies. If you use any social media functions or click on any external pages, they will track you. I do not collect, track, process or sell any of your personal data.</Text>
                        <Heading fontSize={{ base: "lg", md: "20", lg: "30", xl: "35" }} ><br/><br/>EU PRIVACY POLICY</Heading>
                            <Text  fontSize={{ base: "sm", md: "10", lg: "13", xl: "17" }} textAlign="left">This Cookie Policy was last updated on 7. June 2023 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.<br/><br/>

1. Introduction<br/><br/>
M website, https://misaghazimi.com (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.<br/><br/>

2. What are cookies?<br/><br/>
A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.<br/><br/>

3. What are scripts?<br/><br/>
A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.<br/><br/>

4. What is a web beacon?<br/><br/>
A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.<br/><br/>

5. Cookies<br/><br/>
5.1 Technical or functional cookies<br/><br/>

Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.

5.2 Marketing/Tracking cookies<br/><br/>

Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.<br/><br/>

6. Placed cookies<br/><br/>
Statistics (anonymous)
Google Fonts
Marketing/Tracking
Consent to service google-fonts
Vimeo
Statistics
Consent to service vimeo
YouTube
Marketing/Tracking, Functional
Consent to service youtube
Miscellaneous
Purpose pending investigation
Consent to service miscellaneous<br/><br/>

7. Consent<br/><br/>
When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.<br/><br/>


7.1 Manage your consent settings<br/><br/>

Functional
Always active
Statistics

Statistics
Marketing

Marketing<br/><br/>
8. Enabling/disabling and deleting cookies<br/><br/>
You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.

Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.<br/><br/>

9. Your rights with respect to personal data<br/><br/>
You have the following rights with respect to your personal data:

You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.
Right of access: You have the right to access your personal data that is known to us.
Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.
If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.
Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.
Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.
To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).<br/><br/>

10. Contact details<br/><br/>
For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:
<br/><br/>
Misagh Azimi
Bröhmkenweg 2
Essen
Germany
<br/><br/>
Website: https://misaghazimi.com<br/><br/>
Email: info@misaghazimi.com</Text>
                    </Grid>
                </Box>
                </Grid>
        </div>
    );
});

export default Contact;
