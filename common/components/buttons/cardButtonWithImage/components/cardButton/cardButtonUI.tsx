import {
    Box,
    Card as CKUCard,
    CardProps as CKUCardProps,
    useStyles,
    forwardRef,
} from '@chakra-ui/react';

/**
 * @todo
 * - divider
 */
export interface CardButtonUIProps extends CKUCardProps {};

const CardButtonUI = forwardRef<CardButtonUIProps, "button">((props, ref) => {
    const { ...rest } = props;
    const styles = useStyles();

    return (
        <Box ref={ref} as="button">
            <CKUCard __css={styles.cardButton} {...rest} />
        </Box>
    )
})

export default CardButtonUI;
