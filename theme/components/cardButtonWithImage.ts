import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'cardButton',
    'cardImage',
    'cardBody',
]);

const CardButtonWithImage = helpers.defineMultiStyleConfig({
    baseStyle: {
        cardButton: {
            display: 'flex',
        }
    },
    sizes: {
        sm: {
            cardButton: {
                flexDirection: 'column',
            }
        },
        md: {
            cardButton: {
                flexDirection: 'row',
            }
        }
    },
});

export default CardButtonWithImage;
