import { ComponentMeta } from '@storybook/react';

import MenuItemButton from './';

export default {
    title: 'Component/Button/MenuItemButton',
    component: MenuItemButton,
} as ComponentMeta<typeof MenuItemButton>;

export const Base = () => (
    <MenuItemButton>
        Work
    </MenuItemButton>
);

export const Disabled = () => (
    <MenuItemButton disabled>
        About
    </MenuItemButton>
);
