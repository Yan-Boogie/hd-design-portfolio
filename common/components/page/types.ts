import { Variant } from 'framer-motion';

export type PageMotionVariantTypes = 'enter' | 'exit';
export type PageMotionVariants = {
    [_key in PageMotionVariantTypes]: Variant;
};

export type HeaderMotionVariantTypes = 'transparent' | 'hidden';
export type HeaderMotionVariants = {
    [_key in HeaderMotionVariantTypes]: Variant;
};
