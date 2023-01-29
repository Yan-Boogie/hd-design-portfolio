import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'showReelWallPaperButton',
    'mask',
    'iconBlock',
    'text',
]);

const ShowreelWallpaperButton = helpers.defineMultiStyleConfig({
    baseStyle: {
        showReelWallPaperButton: {
            position: 'relative',
            width: 'full',
        },
        mask: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'full',
            height: 'full',
            zIndex: 'base',
            backgroundColor: 'gray.700',
        },
        iconBlock: {
            position: 'absolute',
            zIndex: 'docked',
            bottom: { sm: '20%', md: 12 },
            right: { sm: '20%', md: 12 },
        },
        text: {
            position: 'absolute',
            top: '20%',
            left: '10%',
            zIndex: 'docked',
            display: { sm: 'none', md: 'inherit' },
        }
    },
});

export default ShowreelWallpaperButton;
