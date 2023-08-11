import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CookieBanner = ({ onAccept, onDecline }) => {
    return (
        <Box
        position="fixed"
        zIndex="2000"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,0,0,0.7)"
        color="white"
        padding={5}
        textAlign="center"
        >
            <Text mb={4}>I use cookies to enhance your experience.</Text>
            <Box >
                <Button onClick={onAccept} mr="2" colorScheme="teal">
                    Accept
                </Button>
                <Button onClick={onDecline} ml="2" variant="outline" colorScheme="red">
                    Decline
                </Button>
            </Box>
        </Box>
    );
};

export default CookieBanner;
