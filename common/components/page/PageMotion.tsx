import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import PageUI, { PageUIProps } from './PageUI';

import type { MergeWithMotion, ReactFCWithRef } from 'common/utils/typings';

type PageMotionVariantTypes = 'enter' | 'exit';
type PageMotionVariants = {
    [_key in PageMotionVariantTypes]: Variant;
};

const pageVariants: PageMotionVariants = {
    enter: { opacity: 1, transition: { when: 'beforeChildren' } },
    exit: { opacity: 0, transition: { when: 'afterChildren' } },
};

type MergedMotionProps = MergeWithMotion<PageUIProps>;
export interface PageMotionProps extends MergedMotionProps {};

const MotionPage: ReactFCWithRef<MergedMotionProps> = motion(PageUI);
const PageMotion = forwardRef<PageMotionProps, 'div'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionPage
            initial={{ opacity: 0 }}
            animate="enter"
            exit="exit"
            variants={pageVariants}
            ref={ref}
            {...rest} />
    );
});

export default PageMotion;
