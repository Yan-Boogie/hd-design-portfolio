import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CardBodyUI, { CardBodyUIProps } from './CardBodyUI';

import type { MergeWithMotion, ReactFCWithRef } from 'common/utils/typings';
import type { MotionVariantsTypes } from '../../types';

type CardBodyMotionVariants = {
    [_key in MotionVariantsTypes]: Variant;
};

const cardBodyMotionVariants: CardBodyMotionVariants = {
    unviewed: { opacity: 0 },
    unhovered: { opacity: 1 },
    hovered: { opacity: 1 },
};

type MergedMotionProps = MergeWithMotion<CardBodyUIProps>;
export interface CardBodyMotionProps extends MergedMotionProps {};

const MotionCardBody: ReactFCWithRef<MergedMotionProps> = motion(CardBodyUI);
const CardBodyMotion = forwardRef<CardBodyMotionProps, 'div'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionCardBody
            ref={ref}
            variants={cardBodyMotionVariants}
            {...rest} />
    )
});

export default CardBodyMotion;
