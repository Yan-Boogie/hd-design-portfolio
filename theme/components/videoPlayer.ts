import { defineStyleConfig } from '@chakra-ui/react'

const VideoContainerStyle = defineStyleConfig({
    baseStyle: {
        position: 'relative',
        overflow: 'hidden',
        width: { sm: '380px', md: '1280px' },
        height: { sm: '220px', md: '720px' },
    },
    variants: {
        thumbnail: {
            width: '380px',
            height: '220px',
        },
    }
});

export default VideoContainerStyle;
