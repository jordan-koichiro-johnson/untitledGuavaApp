import { NativeBaseProvider, Text, Box, HStack, VStack, Pressable, Image, Button } from "native-base";
function CameraButton() {
    return <Box alignItems="center">
        <Button onPress={() => console.log("found")}>I Found It!</Button>
    </Box>;
}

export default CameraButton