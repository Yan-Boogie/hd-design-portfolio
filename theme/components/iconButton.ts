import { defineStyleConfig } from '@chakra-ui/react'

const IconButton = defineStyleConfig({
    baseStyle: {
        position: 'relative',
    },
    defaultProps: {
        variant: 'unstyled',
    }
});

export default IconButton;