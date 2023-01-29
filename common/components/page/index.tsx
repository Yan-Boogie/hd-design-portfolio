import { AnimatePresence } from 'framer-motion';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import PageMotion, { PageMotionProps } from './PageMotion';
import Transition from './components/transition';

export interface PageProps extends PageMotionProps {};

const Page = forwardRef<PageProps, 'div'>((props, ref) => {
    const { children, ...rest } = props;
    const styles = useMultiStyleConfig('Page');

    return (
        <StylesProvider.Provider value={styles}>
            <AnimatePresence exitBeforeEnter>
                <PageMotion ref={ref} {...rest}>
                    {children}
                    <AnimatePresence exitBeforeEnter>
                        <Transition />
                    </AnimatePresence>
                </PageMotion>
            </AnimatePresence>
        </StylesProvider.Provider>
    );
});

export default Page;
