import { forwardRef, Container, VStack } from '@chakra-ui/react';

import Text from '@/common/components/text';
import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface CardBodyUIProps {
    title: string;
    content: string;
};

const CardBodyUI = forwardRef<CardBodyUIProps, 'div'>((props, ref) => {
    const { title, content } = props;
    const styles = useProvidedMultipartStyles();

    return (
        <VStack ref={ref} __css={styles.cardBodyContainer}>
            <Text sx={styles.cardBodyTitle}>{title}</Text>
            <Container>
                <Text sx={styles.cardaBodyContent}>{content}</Text>
            </Container>
        </VStack>
    );
});

export default CardBodyUI;
