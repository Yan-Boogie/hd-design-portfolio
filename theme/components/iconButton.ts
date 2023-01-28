import { defineStyleConfig } from '@chakra-ui/react'

const IconButtonStyle = defineStyleConfig({
    baseStyle: {
        margin: 2,
    },
    defaultProps: {
        variant: 'unstyled',
    }
});

export default IconButtonStyle;