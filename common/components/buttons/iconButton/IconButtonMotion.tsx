import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import IconButtonUI, { IconButtonUIProps } from './IconButtonUI';
import React from 'react';

import { MergeWithMotion, ReactFCWithRef } from 'common/utils/typings';

type MotionVariantTypes = 'inactive' | 'active';
const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    inactive: 'inactive',
    active: 'active',
};

export interface IconButtonMotionProps extends MergeWithMotion<IconButtonUIProps> {};

const MotionIconButton: ReactFCWithRef<IconButtonMotionProps> = motion(IconButtonUI);
const IconButtonMotion = forwardRef<IconButtonMotionProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionIconButton
            ref={ref}
            initial={motionVariantTypes.inactive}
            whileHover={motionVariantTypes.active}
            {...rest} />
    );
});

export default IconButtonMotion;
