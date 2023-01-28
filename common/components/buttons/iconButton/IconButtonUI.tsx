import {
    IconButton as CKUIconButton,
    IconButtonProps as CKUIconButtonProps,
    forwardRef,
    useStyleConfig,
} from '@chakra-ui/react';

export interface IconButtonUIProps extends Omit<CKUIconButtonProps, 'transition' | 'onAnimationStart'> {};

const IconButton = forwardRef<IconButtonUIProps, 'button'>((props, ref) => {
    const { children, ...rest } = props;

    const styles = useStyleConfig('IconButton');

    return (
        <CKUIconButton isRound __css={styles} ref={ref} {...rest}>
            {children}
        </CKUIconButton>
    );
});

export default IconButton;