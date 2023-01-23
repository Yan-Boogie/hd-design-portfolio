import { defineStyleConfig } from '@chakra-ui/react'

const TextStyle = defineStyleConfig({
    variants: {
        primary: {
            color: 'fontColors.primary',
        },
        secondary: {
            color: 'fontColors.secondary',
        },
    },
    defaultProps: {
        variant: 'primary',
    },
});

export default TextStyle;
