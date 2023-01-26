import { forwardRef } from '@chakra-ui/react';

import IconMotion, { IconMotionProps } from '../IconMotion';
import IconUI, { IconUIProps } from '../IconUI';

const InactivePath = () => (
    <>
        <path
            fill="#fff"
            d="M135.06 43.9l88.59 88.59-88.59 88.59H46.47l88.59-88.59L46.47 43.9h88.59m1.24-3H39.23l5.12 5.12 86.47 86.47-86.47 86.48-5.12 5.12h97.08l.88-.88 88.59-88.59 2.12-2.12-2.12-2.12-88.6-88.6-.88-.88z"
        />
        <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth={3}
            d="M135.06 43.9L135.06 221.09"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            fill="#fef7de"
            d="M135.06 132.5L135.06 43.9 46.47 43.9 135.06 132.5zM135.06 221.09L135.06 132.5 46.47 221.09 135.06 221.09z"
        />
        <path
            fill="#fcc881"
            d="M223.65 132.5L135.06 43.9 135.06 221.09 223.65 132.5z"
        />
    </>
);

/**
 * @todos
 * - Refactor the features to index.tsx
 */
type IsIconMotionProps = (el: any) => el is IconUIProps;

const isIconMotionProps: IsIconMotionProps = (el) => (el.motionType === 'none');

export type CarouselRightProps = { motionType: 'full' | 'none' | 'half' } & (Omit<IconMotionProps, 'pathBundle'> | IconUIProps);

export const CarouselRight = forwardRef<CarouselRightProps, 'div' | 'svg'>((props, ref) => {
    if (isIconMotionProps(props)) {
        const { fontSize = '6xl', ...rest } = props;
        
        return (
            <IconUI fontSize={fontSize} ref={ref} {...rest} />
        );
    }

    const { fontSize = '6xl', motionType, ...rest } = props;

    if (motionType === 'half') return (
        <IconMotion
            fontSize={fontSize}
            viewBox='0 0 270.12 264.99'
            pathBundle={[<ActivePath key="active" />]}
            {...rest} />
    );

    return (
        <IconMotion
            fontSize={fontSize}
            viewBox='0 0 270.12 264.99'
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
