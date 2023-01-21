import { motion, Variant } from 'framer-motion';
import { chakra, forwardRef } from '@chakra-ui/react';
import IconUI, { IconUIProps } from './iconUI';

type IconMotionVariantType = 'inactive' | 'active';
type IconMotionVariants = {
    [_key in IconMotionVariantType]: Variant;
};

const initIconVariants: IconMotionVariants = {
    inactive: {
        opacity: 1,
    },
    active: {
        opacity: 0,
    },
};

const activeIconVariants: IconMotionVariants = {
    inactive: {
        opacity: 0,
    },
    active: {
        opacity: 1,
    },
};

const MotionIcon = motion<IconUIProps>(IconUI);

/**
 * @todo
 * - Build Motion Component parent interface
 */
type InactiveIcon = React.ReactElement;
type ActiveIcon = React.ReactElement;
type Icon = React.ReactElement;
export interface IconMotionProps {
    iconBundle: [InactiveIcon, ActiveIcon] | [Icon];
    withMotion?: boolean;
};

/**
 * @todo
 * - Deal with the ref issue
 * - Build circle animation
 */
const IconMotion = forwardRef<IconMotionProps, 'div'>((props, ref) => {
    const { iconBundle, withMotion = true } = props;

    if (iconBundle.length === 1 || !withMotion) {
        return (
            <IconUI ref={ref} icon={iconBundle[iconBundle.length - 1]} />
        )
    }

    return (
        <chakra.div ref={ref} pos="relative">
            <MotionIcon
                variants={initIconVariants}
                icon={iconBundle[0]} />
            <MotionIcon
                variants={activeIconVariants}
                icon={iconBundle[1]} />
        </chakra.div>
        
    );
})

export default IconMotion;
