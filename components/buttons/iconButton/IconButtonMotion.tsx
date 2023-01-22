import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import IconButtonUI, { IconButtonUIProps } from './IconButtonUI';

type MotionVariantTypes = 'inactive' | 'active';
const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    inactive: 'inactive',
    active: 'active',
};

export interface IconButtonMotionProps extends IconButtonUIProps {};

const MotionIconButton = motion<IconButtonUIProps>(IconButtonUI);
const IconButtonMotion = forwardRef<IconButtonMotionProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionIconButton
            ref={ref}
            initial={motionVariantTypes.inactive}
            whileHover={motionVariantTypes.active}
            {...rest} />
    );
});

export default IconButtonMotion;
