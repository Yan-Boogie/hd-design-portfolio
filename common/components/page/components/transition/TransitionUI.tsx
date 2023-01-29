import { forwardRef, chakra } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

const TransitionUI = forwardRef<{}, 'div'>((_, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'transition' });

    return (
        <chakra.div ref={ref} __css={styles} />
    );
});

export default TransitionUI;
