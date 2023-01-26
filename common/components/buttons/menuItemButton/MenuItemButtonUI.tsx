import { chakra, Button, ButtonProps, useStyleConfig, forwardRef } from '@chakra-ui/react';

export interface MenuItemButtonUIProps extends ButtonProps {};

const MenuItemButtonUI = forwardRef<MenuItemButtonUIProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    const styles = useStyleConfig('MenuIconButton');

    return (
        <Button ref={ref} variant="unstyled" __css={styles} {...rest} />
    );
});

export interface BorderLineProps {
    disabled?: boolean;
}

export const BorderLine = forwardRef<BorderLineProps, 'div'>((props, ref) => {
    const { disabled = false } = props;

    return (
        <chakra.div display={disabled ? 'none' : 'initial'} backgroundColor="fontColors.primary" ref={ref} pos="absolute" h="1" w="full" bottom={3} left={0} />
    )
});

export default MenuItemButtonUI;
