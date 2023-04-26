import { NativeBaseProvider, Text, Box, HStack, VStack, Pressable, Image, Button, Center, Heading, Container } from "native-base";

function Map() {
    return (
        <Center>
            <Container>
                <Heading>
                    Map
                    <Text color="emerald.500"> MAP</Text>
                </Heading>
                <Text mt="3" fontWeight="medium">
                    This is where the map will go
                </Text>
            </Container>
        </Center>
    )
}

export default Map