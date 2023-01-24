import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { forwardRef, chakra } from '@chakra-ui/react';
import type ReactPlayer from 'react-player/vimeo';
import type { VideoPlayerUIProps } from './VideoPlayerUI';

const VideoPlayerUI = dynamic(() => import('./VideoPlayerUI'), {ssr: false});

export interface VideoPlayerProps extends Omit<VideoPlayerUIProps, 'playerRef'> {
    thumbnail?: boolean;
};

const VideoPlayer = forwardRef<VideoPlayerProps, 'video'>((props, ref) => {
    const { thumbnail = false, children, ...rest } = props;

    const [playing, setPlaying] = useState(false);
    
    const playerRef = useRef<ReactPlayer>(null);
    const previewMaskRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!thumbnail || !previewMaskRef.current) return () => {};

        const maskNode = previewMaskRef.current;

        const onMouseEnterHandler = () => {
            setPlaying(true);
        };

        maskNode.addEventListener('mouseenter', onMouseEnterHandler, true);

        return () => {
            maskNode.removeEventListener('mouseenter', onMouseEnterHandler, true);
        }
    });

    useEffect(() => {
        if (!thumbnail || !previewMaskRef.current) return () => {};

        const maskNode = previewMaskRef.current;

        const onMouseLeaveHandler = () => {
            if (!playerRef.current) return;

            const playerNode = playerRef.current;

            setPlaying(false);

            playerNode.seekTo(0);
        };

        maskNode.addEventListener('mouseleave', onMouseLeaveHandler, true);

        return () => {
            maskNode.removeEventListener('mouseleave', onMouseLeaveHandler, true);
        }
    });

    // const onProgressHandler = ({ played, playedSeconds }: any) => {
    //     if (!thumbnail || !refs.current?.getPlayerNode()) return;

    //     console.log('SECONDS', played, playedSeconds)

    //     const playerNode = refs.current.getPlayerNode() as ReactPlayer;

    //     if (played >= 4) playerNode.seekTo(0);
    // };

    return (
        <VideoPlayerUI
            playing={playing}
            playerRef={playerRef}
            muted={thumbnail ? true : false}
            controls={thumbnail ? false : true}
            // progressInterval={5000}
            // onProgress={onProgressHandler}
            {...rest}>
            {thumbnail ? (
                <chakra.div
                    id="preview-mask"
                    ref={previewMaskRef}
                    zIndex="base"
                    pos="absolute"
                    w="full"
                    h="full"
                    right="0"
                    top="0">
                    {children}
                </chakra.div>
            ) : children}
        </VideoPlayerUI>
    );
})

export default VideoPlayer;
