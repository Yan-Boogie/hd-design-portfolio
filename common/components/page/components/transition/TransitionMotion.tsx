import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import TransitionUI from './TransitionUI';

import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type TransitionMotionVariantTypes = 'hidden' | 'show' | 'hide';
type TransitionMotionVariants = {
    [_key in TransitionMotionVariantTypes]: Variant;
};

const transitionVariants: TransitionMotionVariants = {
    hidden: { scaleX: 2, x: 500},
    show: { scaleX: 3, x: -5000 },
    hide: { scaleX: 2, x: 1200 },
};

type MergedMotionProps = MergeWithMotion<{}>;
export interface TransitionMotionProps extends MergedMotionProps {};

const MotionTransition: ReactFCWithRef<MergedMotionProps> = motion(TransitionUI);
const TransitionMotion = forwardRef<TransitionMotionProps, 'div'>((_, ref) => {
    return (
        <MotionTransition
            ref={ref}
            initial="hidden"
            animate="show"
            exit="hide"
            transition={{ duration: 1.8 }}
            variants={transitionVariants} />
    )
});

export default TransitionMotion;
