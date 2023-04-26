import { NativeBaseProvider, Text, Box, HStack, VStack, Pressable, Image, Button, Center, Heading, Container } from "native-base";

function Riddle() {
    return (

        <Box p="2" bg="primary.500" _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            letterSpacing: 'lg'
        }} shadow={2}>
            Riddle Goes Here
        </Box>

    )
}

export default Riddle