import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const helpers = createMultiStyleConfigHelpers([
    'page',
    'transition',
]);

const PageStyle = helpers.defineMultiStyleConfig({
    baseStyle: {
        page: {
            width: 'full',
            backgroundImage: 'url("/img-noise.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
        },
        transition: {
            width: '100vw',
            height: '100vh',
            background: `linear-gradient(
                to right,
                var(--chakra-colors-transitions-50) 5%,
                var(--chakra-colors-transitions-100) 10%,
                var(--chakra-colors-transitions-200) 20%,
                var(--chakra-colors-transitions-300) 50%,
                var(--chakra-colors-transitions-200) 80%,
                var(--chakra-colors-transitions-100) 90%,
                var(--chakra-colors-transitions-50) 100%
            )`,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: 'fixed',
        },
    }
});

export default PageStyle;