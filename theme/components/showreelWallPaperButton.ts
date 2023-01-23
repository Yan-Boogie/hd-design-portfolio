import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'showReelWallPaperButton',
    'mask',
    'icon',
    'text',
]);

/**
 * @todos
 * - Deal with z-index
 */
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
    },
    sizes: {
        sm: {
            showReelWallPaperButton: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItem: 'center',
            },
            text: {
                fontSize: 'lg',
            }
        },
        md: {
            icon: {
                width: '12',
                position: 'absolute',
                bottom: '4',
                right: '4',
            },
            text: {
                position: 'absolute',
                top: '4',
                right: '4',
                fontSize: 'xl',
            }
        },
    }
});

export default ShowreelWallpaperButton;
