import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'cardButton',
    /** Card Image */
    'cardImageContainer',
    /** Card Body */
    'cardBodyContainer',
    'cardBodyTitle',
    'cardaBodyContent',
]);

const CardImageButtonStyle = helpers.defineMultiStyleConfig({
    baseStyle: {
        cardButton: {
            display: 'flex',
            flexDirection: { sm: 'column', md: 'row' },
            border: '1px solid',
            borderRadius: 'base',
        },
        cardBodyContainer: {
            width: 'full',
            height: 'full',
        },
        cardImageContainer: {
            width: 'full',
            height: 'full',
        },
        cardBodyTitle: {
            color: 'fontColors.primary',
            fontSize: '2xl',
            fontWeight: 'bold',
        },
        cardaBodyContent: {
            color: 'fontColors.secondary',
            fontSize: 'md',
            fontWeight: 'normal',
        },
    },
});

export default CardImageButtonStyle;
