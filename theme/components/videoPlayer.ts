import { defineStyleConfig } from '@chakra-ui/react'

const VideoContainerStyle = defineStyleConfig({
    baseStyle: {
        position: 'relative',
        overflow: 'hidden',
        width: '1280px',
        height: '720px',
    },
    sizes: {
        sm: {
            width: '380px',
            height: '240px',
        },
    }
});

export default VideoContainerStyle;
