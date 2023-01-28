import { defineStyleConfig } from '@chakra-ui/react'

const PageStyle = defineStyleConfig({
    baseStyle: {
        width: 'full',
        backgroundImage: 'url("/img-noise.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
    },
});

export default PageStyle;