/**
 * @todos
 * - Deal with Gesture motion
 */

import { motion, Variant, useInView } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CardButtonUI, { CardButtonUIProps } from './cardButtonUI';

type CardButtonMotionViewVariantsTypes = 'unviewed' | 'viewed';
type CardButtonMotionGestureVariantsTypes = 'init' | 'hovered';
type CardButtonMotionVariantsTypes = CardButtonMotionViewVariantsTypes | CardButtonMotionGestureVariantsTypes;

type CardButtonMotionVariants = {
    [_key in CardButtonMotionVariantsTypes]: Variant;
};

const cardButtonMotionVariants: CardButtonMotionVariants = {
    unviewed: {
        opacity: 0,
    },
    viewed: {
        opacity: 1,
    },
    init: {},
    hovered: {},
};

const MotionCardButton = motion<CardButtonUIProps>(CardButtonUI);

export interface MotionCardButtonProps extends CardButtonUIProps {

};

const CardButtonMotion = forwardRef<MotionCardButtonProps, "button">((props, ref) => {
    const { ...rest } = props;
    const isInView = useInView(ref, { once: true });

    return (
        <MotionCardButton
            animate={isInView ? 'viewed' : 'unviewed'}
            variants={cardButtonMotionVariants}
            {...rest} />
    );
});