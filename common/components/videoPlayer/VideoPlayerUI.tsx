import type { RefObject } from 'react';
import type { VimeoPlayerProps } from 'react-player/vimeo';
import ReactPlayer from 'react-player/vimeo';
import { useStyleConfig, forwardRef, Center } from '@chakra-ui/react';

export interface VideoPlayerUIProps extends VimeoPlayerProps {
    containerVariant?: string;
    children?: React.ReactNode;
    playerRef: RefObject<ReactPlayer>;
};

const VideoPlayerUI = forwardRef<VideoPlayerUIProps, 'video'>((props, ref) => {
    const { playerRef, playing, containerVariant, children, ...rest } = props;

    const containerStyles = useStyleConfig('VideoContainer', { variant: containerVariant });

    return (
        <Center
            __css={containerStyles}>
            {children}
            <ReactPlayer
                playing={playing} 
                width="100%"
                height="100%"
                ref={playerRef}
                {...rest} />
        </Center>
    )
});

export default VideoPlayerUI;
