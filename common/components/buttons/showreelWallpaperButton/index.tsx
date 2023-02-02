import { useMultiStyleConfig, chakra } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
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
                <Text sx={styles.text} color="iconColors.primary" variant="h1">Watch Showreel</Text>
                <chakra.div sx={styles.iconBlock}>
                    <CarouselRight motionType="full" />
                </chakra.div>
            </ShowreelWallpaperButtonMotion>
        </StylesProvider.Provider>
    );
}

export default ShowreelWallPaperButton;
