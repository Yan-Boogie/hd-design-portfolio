import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import ShowreelWallpaperButtonUI, { MaskUI, ShowreelWallpaperButtonUIProps } from './showreelWallPaperButtonUI';
import type { MotionVariants } from '@/common/utils/typings';

type MotionVariantTypes = 'hovered' | 'init';

const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    hovered: 'hovered',
    init: 'init',
};

const maskVariants: MotionVariants<MotionVariantTypes> = {
    init: {
        opacity: 0,
    },
    hovered: {
        opacity: 1,
    },
};

const MotionShowreelWallpaperButton = motion<ShowreelWallpaperButtonUIProps>(ShowreelWallpaperButtonUI);
const MotionMask = motion(MaskUI);

export interface ShowreelWallpaperButtonMotionProps extends ShowreelWallpaperButtonUIProps {}

const ShowreelWallpaperButtonMotion = forwardRef<ShowreelWallpaperButtonMotionProps, 'button'>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <MotionShowreelWallpaperButton
            ref={ref}
            initial={motionVariantTypes.init}
            whileHover={motionVariantTypes.hovered}
            {...rest}>
            <MotionMask variants={maskVariants} />
            {children}
        </MotionShowreelWallpaperButton>
    );
});

export default ShowreelWallpaperButtonMotion;
