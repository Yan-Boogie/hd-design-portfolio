import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'card',
    'iconButton',
    'cardImageContainer',
    'hiddenCardImage',
    'cardImage',
    'cardTitle',
]);

const IllustratorCardStyle = helpers.defineMultiStyleConfig({
    baseStyle: {
        card: {
            position: 'relative',
            backgroundColor: 'transparent',
            width: 'full',
            maxWidth: '740px',
        },
        cardImageContainer: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 15,
            margin: '0 0 var(--chakra-space-6) 0',
        },
        hiddenCardImage: {
            width: 'full',
            visibility: 'hidden',
        },
        cardImage: {
            width: 'full',
            height: 'full',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        cardTitle: {
            color: 'fontColors.primary',
            fontSize: '3xl',
            fontWeight: 'medium',
            margin: 'var(--chakra-space-2)',
        },
    },
});

export default IllustratorCardStyle;
