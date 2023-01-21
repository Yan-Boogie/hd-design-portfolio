import IconButtonMotion, { IconButtonMotionProps } from './IconButtonMotion';
import IconMotion, { IconMotionProps } from '../../icon/iconMotion';

export type MotionVariantTypes = 'inactive' | 'active';
export type DeactiveIcon = React.ReactElement;
export type activeIcon = React.ReactElement;

export interface IconButtonProps extends IconButtonMotionProps {
    iconProps: IconMotionProps;
    iconBundle: [DeactiveIcon, activeIcon];
};

/**
 * @todo
 * - forwardRef features
 */
function IconButton(props: IconButtonProps) {
    const { iconProps, iconBundle, ...iconButtonProps } = props;

    return (
        <IconButtonMotion {...iconButtonProps}>
            <IconMotion iconType="initIcon" icon={iconBundle[0]} />
            <IconMotion iconType="activeIcon" icon={iconBundle[1]} />
        </IconButtonMotion>
    );
}

export default IconButton;