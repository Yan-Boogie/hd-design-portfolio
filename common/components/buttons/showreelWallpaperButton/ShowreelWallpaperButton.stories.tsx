import { ComponentMeta } from '@storybook/react';

import ShowreelWallpaperButton from './';

export default {
    title: 'Component/Button/ShowreelWallpaperButton',
    component: ShowreelWallpaperButton,
} as ComponentMeta<typeof ShowreelWallpaperButton>;

export const ShowreelButton = () => (
    <ShowreelWallpaperButton src="/butt-animation.gif" alt="Main Page Wallpaper" />
);
