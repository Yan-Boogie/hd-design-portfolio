import { ComponentMeta } from '@storybook/react';

import VideoPlayer from './';

export default {
    title: 'Component/VideoPlayer',
    component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const link = 'https://vimeo.com/714795278';

export const Thumbnail = () => (
    <VideoPlayer thumbnail url={link} />
);
