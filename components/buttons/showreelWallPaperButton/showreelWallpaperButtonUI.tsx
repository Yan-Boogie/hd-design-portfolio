import { useStyles, Box, forwardRef, Image, ImageProps } from '@chakra-ui/react';

export interface ShowreelWallpaperButtonUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    children: React.ReactNode;
};

const ShowreelWallpaperButtonUI = forwardRef<ShowreelWallpaperButtonUIProps, 'button'>((props, ref) => {
    const { src, alt, children } = props;

    const styles = useStyles();

    return (
        <Box as="button" __css={styles.showReelWallPaperButton} ref={ref}>
            <Image w="100%" src={src} alt={alt} />
            {children}
        </Box>
    );
})

export function MaskUI() {
    const styles = useStyles();

    return (
        <Box __css={styles.mask} />
    );
}

export default ShowreelWallpaperButtonUI;
