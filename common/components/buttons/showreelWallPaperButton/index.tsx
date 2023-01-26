import { useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '../../../hooks/useProvidedMultipartStyles';
import ShowreelWallpaperButtonMotion, { ShowreelWallpaperButtonMotionProps } from './ShowreelWallpaperButtonMotion';
import { CarouselRight } from '../../icons';
import Text from '../../text';

export interface ShowreelWallpaperButtonProps extends Pick<ShowreelWallpaperButtonMotionProps, 'src' | 'alt'> {};

/**
 * @todo
 * - add forwardRef
 */
function ShowreelWallPaperButton(props: ShowreelWallpaperButtonProps) {
    const { src, alt } = props;
    const styles = useMultiStyleConfig('ShowreelWallPaperButton');

    return (
        <StylesProvider.Provider value={styles}>
            <ShowreelWallpaperButtonMotion src={src} alt={alt}>
                <CarouselRight motionType="half" />
                <Text>Watch Showreel</Text>
            </ShowreelWallpaperButtonMotion>
        </StylesProvider.Provider>
    );
}

export default ShowreelWallPaperButton;
