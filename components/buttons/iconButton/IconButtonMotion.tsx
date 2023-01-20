import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import IconButtonUI, { IconButtonUIProps } from './IconButtonUI';
import type { MotionVariantTypes } from './';

const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    deactivated: 'deactivated',
    activated: 'activated',
};

export interface IconButtonMotionProps extends IconButtonUIProps {};

const MotionIconButton = motion(IconButtonUI);
const IconButtonMotion = forwardRef<IconButtonMotionProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionIconButton
            ref={ref}
            initial={motionVariantTypes.deactivated}
            whileHover={motionVariantTypes.activated}
            {...rest} />
    );
});

export default IconButtonMotion;
