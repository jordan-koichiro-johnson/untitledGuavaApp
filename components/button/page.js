import { NativeBaseProvider, Text, Box, HStack, VStack, Pressable, Image, Button, Center } from "native-base";

const LinearGradient = require('expo-linear-gradient').LinearGradient; 

const ButtonBox = () => {
    return <Box bg={{
        linearGradient: {
          colors: ['emerald.50', 'emerald.500'],
          start: [0, 0],
          end: [1, 0]
        }
      }} p="12" rounded="xl" _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center'
      }}>
          <Button size="lg" variant="ghost" colorScheme="primary">
            Take a Picture!
          </Button>
        </Box>;
}

const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };

  const CameraButton = () => {
    return (
      <NativeBaseProvider config={config}>
          <ButtonBox />
      </NativeBaseProvider>
    );
  };

export default CameraButton 