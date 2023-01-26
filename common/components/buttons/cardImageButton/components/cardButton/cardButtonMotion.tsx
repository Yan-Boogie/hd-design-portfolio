/**
 * @todos
 * - Deal with Gesture motion
 */
import { useRef, useImperativeHandle } from 'react';
import { motion, Variant, useInView } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CardButtonUI, { CardButtonUIProps } from './cardButtonUI';

import type { MergeWithMotion, ReactFCWithRef } from 'common/utils/typings';
import type { MotionVariantsTypes } from '../../types';

type CardButtonMotionVariants = {
    [_key in MotionVariantsTypes]: Variant;
};

const cardButtonMotionVariants: CardButtonMotionVariants = {
    unviewed: { opacity: 0 },
    unhovered: { opacity: 1 },
    hovered: { opacity: 1, backgroundColor: 'brand.secondary', boxShadow: '10px 10px 5px rgba(0,0,0,0.5)' },
};

type MergedMotionProps = MergeWithMotion<CardButtonUIProps>;
export interface CardButtonMotionProps extends MergedMotionProps {};

const MotionCardButton: ReactFCWithRef<MergedMotionProps> = motion(CardButtonUI);
const CardButtonMotion = forwardRef<CardButtonMotionProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    const isInView = useInView(buttonRef, { once: true });

    return (
        <MotionCardButton
            ref={buttonRef}
            animate={isInView ? 'unhovered' : 'unviewed'}
            whileHover="hovered"
            variants={cardButtonMotionVariants}
            {...rest} />
    );
});

export default CardButtonMotion;
