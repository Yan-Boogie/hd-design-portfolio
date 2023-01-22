import { chakra, useStyleConfig, forwardRef } from '@chakra-ui/react';

export interface IconUIProps {
    icon: React.ReactElement;
    variant?: string;
};

/**
 * @todo
 * - Build IconUI with chakra <Icon> component
 */
const IconUI = forwardRef<IconUIProps, 'div'>((props, ref) => {
    const { icon, variant = '' } = props;

    const styles = useStyleConfig('Icon', { variant });

    return (
        <chakra.div __css={styles} ref={ref}>{icon}</chakra.div>
    );
})

export default IconUI;
