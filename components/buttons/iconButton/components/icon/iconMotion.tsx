import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import IconUI, { IconUIProps } from './iconUI';
import type { MotionVariantTypes } from '../../';

type IconTypes = 'initIcon' | 'activeIcon';
export interface IconMotionProps extends Omit<IconUIProps, 'variant'> {
    iconType: IconTypes;
};

type MotionVariant = {
    [_key in MotionVariantTypes]: Variant;
};

const initVariant: MotionVariant = {
    deactivated: {
        opacity: 1,
    },
    activated: {
        opacity: 0,
    },
};

const activeVariant: MotionVariant = {
    deactivated: {
        opacity: 0,
    },
    activated: {
        opacity: 1,
    },
};

const getMotionVariant = (iconType: IconTypes): MotionVariant => {
    switch (iconType) {
        case 'activeIcon':
            return activeVariant;
        case 'initIcon':
        default:
            return initVariant;
    }
};

const MotionIcon = motion(IconUI);
const IconMotion = forwardRef<IconMotionProps, 'div'>((props, ref) => {
    const { iconType } = props;

    return (
        <MotionIcon
            ref={ref}
            variants={getMotionVariant(iconType)}
            variant={iconType === 'activeIcon' ? 'overlap' : ''} />
    );
})

export default IconMotion;
