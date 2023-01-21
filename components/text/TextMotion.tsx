import { motion, Variant } from 'framer-motion';
import { Text, forwardRef, TextProps } from '@chakra-ui/react';

type TextMotionVariantTypes = 'visible' | 'invisible';

/**
 * @todo
 * Build MotionVariant generic type
 */
type MotionVariant = {
    [_key in TextMotionVariantTypes]: Variant;
}

const textVariants: MotionVariant = {
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export interface TextMotionProps extends TextProps {
    getMotionProps: () => { initial: TextMotionVariantTypes; animate: TextMotionVariantTypes } | undefined;
};

const MotionText = motion(Text);
const TextMotion = forwardRef<TextMotionProps, 'p'>((props, ref) => {
    const { getMotionProps, ...rest } = props;

    if (typeof getMotionProps !== 'function') {
        return <Text {...rest} />
    }

    return (
      <MotionText
        ref={ref}
        {...getMotionProps()}
        variants={textVariants}
        {...rest} />
    );
});

export default TextMotion;
