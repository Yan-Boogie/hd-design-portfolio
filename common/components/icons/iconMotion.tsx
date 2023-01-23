import { motion, Variant } from 'framer-motion';
import { chakra, forwardRef } from '@chakra-ui/react';

import IconUI, { IconUIProps } from './iconUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type IconMotionVariantsTypes = 'inactive' | 'active' | 'hovered' | 'init';
type IconMotionVariants = {
    [_key in IconMotionVariantsTypes]: Variant;
};

const initIconVariants: IconMotionVariants = {
    init: {
        opacity: 0,
    },
    inactive: {
        opacity: 1,
    },
    active: {
        opacity: 0,
    },
    hovered: {
        opacity: 0,
    },
};

const activeIconVariants: IconMotionVariants = {
    init: {
        opacity: 0,
    },
    inactive: {
        opacity: 0,
    },
    active: {
        opacity: 1,
    },
    hovered: {
        opacity: 1,
    },
};

type InactivePath = React.ReactElement;
type ActivePath = React.ReactElement;

type MergedMotionProps = MergeWithMotion<IconUIProps>;
export interface IconMotionProps extends Omit<MergedMotionProps, 'variant'> {
    pathBundle: [InactivePath, ActivePath] | [ActivePath];
};

const MotionIcon: ReactFCWithRef<MergedMotionProps> = motion(IconUI);

/**
 * @todo
 * - Build circle animation
 */
const IconMotion = forwardRef<IconMotionProps, 'div'>((props, ref) => {
    const { pathBundle, ...rest } = props;

    if (pathBundle.length === 1) return (
        <MotionIcon variants={activeIconVariants} {...rest}>
            {pathBundle[0]}
        </MotionIcon>
    );

    return (
        <chakra.div ref={ref} pos="relative" w="100%" h="100%">
            <MotionIcon initial="init" variants={initIconVariants} {...rest}>
                {pathBundle[0]}
            </MotionIcon>
            <MotionIcon initial="init" variants={activeIconVariants} variant="overlap" {...rest}>
                {pathBundle[1]}
            </MotionIcon>
        </chakra.div>
        
    );
})

export default IconMotion;
