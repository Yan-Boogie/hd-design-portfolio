import { useRef, useImperativeHandle } from 'react';
import { Divider, useMultiStyleConfig, forwardRef } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import { CardBody, CardBodyProps } from './components/cardBody';
import { CardButton, CardButtonProps } from './components/cardButton';
import { CardImage, CardImageProps } from './components/cardImage';

export interface CardImageButtonProps {
    cardBodyOptions?: Omit<CardBodyProps, 'title' | 'content'>;
    cardButtonOptions?: CardButtonProps;
    cardImageOptions?: Omit<CardImageProps, 'src' | 'alt'>;
    src: CardImageProps['src'];
    alt: CardImageProps['alt'];
    title: CardBodyProps['title'];
    content: CardBodyProps['content'];
};

const CardImageButton = forwardRef<CardImageButtonProps, any>((props, ref) => {
    const { title, content, src, alt, cardBodyOptions, cardButtonOptions, cardImageOptions } = props;
    const styles = useMultiStyleConfig('CardImageButton');
    const buttonRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        getButtonRef: () => buttonRef.current,
        getImageRef: () => imageRef.current,
        getBodyRef: () => bodyRef.current,
    }));

    return (
        <StylesProvider.Provider value={styles}>
            <CardButton ref={buttonRef} {...cardButtonOptions}>
                <CardImage ref={imageRef} src={src} alt={alt} {...cardImageOptions} />
                <Divider orientation='vertical' />
                <CardBody ref={bodyRef} title={title} content={content} {...cardBodyOptions} />
            </CardButton>
        </StylesProvider.Provider>
    );
});

export default CardImageButton;
