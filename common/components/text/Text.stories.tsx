import { HStack } from '@chakra-ui/react';
import { ComponentMeta } from '@storybook/react';

import Text from './';

export default {
    title: 'Component/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

export const WithMotion = () => (
    <HStack spacing={3}>
        <Text initial="invisible" animate="visible">
            Primary
        </Text>
        <Text initial="invisible" animate="visible" variant="secondary">
            Secondary
        </Text>
    </HStack>
);
