import {
    Box,
    Card as CKUCard,
    CardProps as CKUCardProps,
    forwardRef,
} from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface CardButtonUIProps extends CKUCardProps {};

const CardButtonUI = forwardRef<CardButtonUIProps, 'button'>((props, ref) => {
    const { ...rest } = props;
    const styles = useProvidedMultipartStyles();

    return (
        <Box ref={ref} as="button">
            <CKUCard __css={styles.cardButton} {...rest} />
        </Box>
    )
})

export default CardButtonUI;
