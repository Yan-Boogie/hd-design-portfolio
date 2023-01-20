import IconButtonMotion, { IconButtonMotionProps } from './IconButtonMotion';
import IconMotion, { IconMotionProps } from './components/icon/iconMotion';

export type MotionVariantTypes = 'deactivated' | 'activated';
export type DeactivatedIcon = React.ReactElement;
export type ActivatedIcon = React.ReactElement;

export interface IconButtonProps extends IconButtonMotionProps {
    iconProps: IconMotionProps;
    iconBundle: [DeactivatedIcon, ActivatedIcon];
};

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