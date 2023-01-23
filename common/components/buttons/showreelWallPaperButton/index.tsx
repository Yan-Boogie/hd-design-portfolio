import { createStylesContext } from '@chakra-ui/react';
import ShowreelWallpaperButtonMotion, { ShowreelWallpaperButtonMotionProps } from './ShowreelWallpaperButtonMotion';
import { CarouselRight } from '../../icons';
import Text from '../../text';

export interface ShowreelWallpaperButtonProps extends ShowreelWallpaperButtonMotionProps {};

/**
 * @todo
 * - add forwardRef
 */
function ShowreelWallPaperButton(props: ShowreelWallpaperButtonProps) {
    const { src, alt, ...rest } = props;
    const [StylesProvider, useStyles] = createStylesContext('ShowreelWallPaperButton');

    const styles = useStyles();

    return (
        <StylesProvider value={styles}>
            <ShowreelWallpaperButtonMotion src={src} alt={alt}>
                <CarouselRight motionType="half" />
                <Text initial="invisible" animate="invisible" >Watch Showreel</Text>
            </ShowreelWallpaperButtonMotion>
        </StylesProvider>
    );
}

export default ShowreelWallPaperButton;
