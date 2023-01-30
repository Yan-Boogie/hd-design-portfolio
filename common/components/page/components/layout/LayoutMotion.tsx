import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import { LayoutUI, LayoutUIProps, HeaderUI, FooterUI } from './LayoutUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import type { PageMotionVariants, HeaderMotionVariants } from '../../types';

const layoutVariants: PageMotionVariants = {
    enter: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.3 } },
    exit: { opacity: 0, transition: { when: 'afterChildren' } },
};

const headerMotionVariants: HeaderMotionVariants = {
    transparent: { backgroundColor: 'transparent' },
    hidden: { opacity: 0 },
};

type MergedLayoutMotionProps = MergeWithMotion<LayoutUIProps>;
export interface LayoutMotionProps extends MergedLayoutMotionProps{};

const MotionHeader = motion(HeaderUI);
const MotionFooter = motion(FooterUI);
const MotionLayout: ReactFCWithRef<MergedLayoutMotionProps> = motion(LayoutUI);
const LayoutMotion = forwardRef<LayoutMotionProps, 'div'>((props, ref) => {
    const { children, ...rest } = props;
    const [headerVariant, setHeaderVariant] = useState<string>('');
    const { scrollY } = useScroll();
    const footerRef = useRef(null);

    const isFooterInView = useInView(footerRef);

    useEffect(() => {
        if (isFooterInView) return () => {};

        const onScroll = (el: number) => {
            if (el <= 0) setHeaderVariant ('');
            if (el > 0) setHeaderVariant('transparent');
        };

        const unsubScrollY = scrollY.onChange(onScroll);

        return () => {
            unsubScrollY();
        }
    }, [scrollY, isFooterInView]);

    useEffect(() => {
        if (isFooterInView) setHeaderVariant('hidden');
    }, [isFooterInView]);

    return (
        <MotionLayout
            initial={{ opacity: 0 }}
            // animate="enter"
            // exit="exit"
            variants={layoutVariants}
            ref={ref}
            {...rest}>
            <MotionHeader
                animate={headerVariant}
                variants={headerMotionVariants} />
            {children}
            <MotionFooter
                ref={footerRef} />
        </MotionLayout>
    );
});

export default LayoutMotion;
