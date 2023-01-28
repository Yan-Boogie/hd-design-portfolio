import {
    forwardRef,
    chakra,
    useStyleConfig,
} from '@chakra-ui/react';

export interface PageUIProps {};

const IconButton = forwardRef<PageUIProps, 'div'>((props, ref) => {
    const { ...rest } = props;

    const styles = useStyleConfig('Page');

    return (
        <chakra.div __css={styles} ref={ref} {...rest} />
    );
});

export default IconButton;