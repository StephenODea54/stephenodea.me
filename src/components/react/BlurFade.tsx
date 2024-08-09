import {
    AnimatePresence,
    motion,
    useInView,
    type Variants,
} from 'framer-motion';
import { useRef } from 'react';

export type BlurFadeProps = {
    blur?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    inView?: boolean;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    yOffset?: number;
};

export const BlurFade = ({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    blur = '6px',
}: BlurFadeProps) => {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: '-50px' });
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = variant || defaultVariants;
    return (
        <AnimatePresence>
            <motion.div
                animate={isInView ? 'visible' : 'hidden'}
                className={className}
                exit='hidden'
                initial='hidden'
                ref={ref}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: 'easeOut',
                }}
                variants={combinedVariants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
