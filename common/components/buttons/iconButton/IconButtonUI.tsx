import {
    IconButton as CKUIconButton,
    IconButtonProps as CKUIconButtonProps,
    forwardRef,
} from '@chakra-ui/react';

export interface IconButtonUIProps extends Omit<CKUIconButtonProps, 'transition' | 'onAnimationStart'> {};

const IconButton = forwardRef<IconButtonUIProps, 'button'>((props: IconButtonUIProps, ref) => {
    const { children, ...rest } = props;

    return (
        <CKUIconButton isRound ref={ref} {...rest}>
            {children}
        </CKUIconButton>
    );
});

export default IconButton;