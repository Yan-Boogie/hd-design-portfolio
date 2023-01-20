import {
    IconButton as CKUIconButton,
    IconButtonProps as CKUIconButtonProps,
    forwardRef,
    Box,
} from '@chakra-ui/react';

export interface IconButtonUIProps extends CKUIconButtonProps {};

const IconButton = forwardRef<IconButtonUIProps, 'button'>((props: IconButtonUIProps, ref) => {
    const { children, ...rest } = props;

    return (
        <CKUIconButton isRound ref={ref} {...rest}>
            <Box pos="relative">
                {children}
            </Box>
        </CKUIconButton>
    );
});

export default IconButton;