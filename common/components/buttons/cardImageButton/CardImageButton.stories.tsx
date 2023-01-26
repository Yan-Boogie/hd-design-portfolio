import { ComponentMeta } from '@storybook/react';

import CardImageButton from './';

export default {
    title: 'Component/Button/CardImageButton',
    component: CardImageButton,
} as ComponentMeta<typeof CardImageButton>;

export const Basic = () => (
    <CardImageButton
        title="Title"
        content="Content"
        src="/mock/mock-1.jpg"
        alt="mock image" />
);
