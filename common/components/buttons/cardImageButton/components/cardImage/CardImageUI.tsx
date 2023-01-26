import { Center, forwardRef, Image, ImageProps } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface CardImageUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
};

const CardImageUI = forwardRef<CardImageUIProps, 'div'>((props, ref) => {
    const { src, alt } = props;
    const styles = useProvidedMultipartStyles({ name: 'cardImageContainer' });

    return (
        <Center ref={ref} __css={styles}>
            <Image w="full" src={src} alt={alt} />
        </Center>
    );
});

export default CardImageUI;
