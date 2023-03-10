import { defineStyleConfig } from '@chakra-ui/react'

const IconStyle = defineStyleConfig({
    variants: {
        overlap: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
    }
});

export default IconStyle;