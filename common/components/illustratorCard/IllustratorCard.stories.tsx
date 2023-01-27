import { ComponentMeta } from '@storybook/react';

import IllustratorCard from './';

export default {
    title: 'Component/IllustratorCard',
    component: IllustratorCard,
} as ComponentMeta<typeof IllustratorCard>;

export const Base = () => (
    <IllustratorCard
        src="/mock/mock-1.jpg"
        alt="mock image"
        onClick={() => console.log('clicked')} />
);
