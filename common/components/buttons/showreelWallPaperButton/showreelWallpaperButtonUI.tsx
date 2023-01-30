import { Box, forwardRef, Image, ImageProps } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface ShowreelWallpaperButtonUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    children: React.ReactNode;
};

const ShowreelWallpaperButtonUI = forwardRef<ShowreelWallpaperButtonUIProps, 'button'>((props, ref) => {
    const { src, alt, children } = props;

    const styles = useProvidedMultipartStyles({ name: 'showReelWallPaperButton' });

    return (
        <Box
            ref={ref}
            as="button"
            __css={styles}
        >
            <Image w="100%" maxWidth="1280px" src={src} alt={alt} />
            {children}
        </Box>
    );
})

export const MaskUI = forwardRef<{}, 'div'>((_, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'mask' });

    return (
        <Box ref={ref} __css={styles} />
    );
});

export default ShowreelWallpaperButtonUI;
