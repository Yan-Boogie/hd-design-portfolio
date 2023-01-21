import { createStylesContext } from '@chakra-ui/react';
import ShowreelWallpaperButtonMotion from './showreelWallpaperButtonMotion';
import Icon from '../../icon';
import Text from '../../text';

export interface ShowreelWallpaperButtonProps {

}

/**
 * @todo
 * - add forwardRef
 */
function ShowreelWallPaperButton(props: ShowreelWallpaperButtonProps) {
    const { ...rest } = props;
    const [StylesProvider, useStyles] = createStylesContext('ShowreelWallPaperButton');

    const styles = useStyles();

    return (
        <StylesProvider value={styles}>
            <ShowreelWallpaperButtonMotion>
                <Icon />
                <Text>Watch Showreel</Text>
            </ShowreelWallpaperButtonMotion>
        </StylesProvider>
    );
}

export default ShowreelWallPaperButton;
