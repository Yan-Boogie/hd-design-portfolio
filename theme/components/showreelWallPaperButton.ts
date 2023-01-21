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
            width: 'sizes.full',
        },
        mask: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'sizes.full',
            height: 'sizes.full',
            zIndex: 'zIndices.base',
            backgroundColor: 'gray.50',
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
                fontSize: 'fontSizes.lg',
            }
        },
        md: {
            icon: {
                width: 'sizes.12',
                position: 'absolute',
                bottom: 'sizes.4',
                right: 'sizes.4',
            },
            text: {
                position: 'absolute',
                top: 'sizes.4',
                right: 'sizes.4',
                fontSize: 'fontSizes.xl',
            }
        },
    }
});

export default ShowreelWallpaperButton;
