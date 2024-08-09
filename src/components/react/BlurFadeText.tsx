import { cn } from '@/lib/utils';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useMemo } from 'react';

export type BlurFadeTextProps = {
    animateByCharacter?: boolean;
    className?: string;
    characterDelay?: number;
    duration?: number;
    delay?: number;
    text: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    yOffset?: number;
};

export const BlurFadeText = ({
    animateByCharacter = false,
    className,
    characterDelay = 0.03,
    delay = 0,
    text,
    variant,
    yOffset = 8,
}: BlurFadeTextProps) => {
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
        visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
    };
    const combinedVariants = variant || defaultVariants;
    const characters = useMemo(() => Array.from(text), [text]);

    if (animateByCharacter) {
        return (
            <div className='flex'>
                <AnimatePresence>
                    {characters.map((char, i) => (
                        <motion.span
                            animate='visible'
                            className={cn('inline-block', className)}
                            exit='hidden'
                            initial='hidden'
                            key={i}
                            style={{
                                width: char.trim() === '' ? '0.2em' : 'auto',
                            }}
                            transition={{
                                yoyo: Infinity,
                                delay: delay + i * characterDelay,
                                ease: 'easeOut',
                            }}
                            variants={combinedVariants}
                        >
                            {char}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className='flex'>
            <AnimatePresence>
                <motion.span
                    animate='visible'
                    className={cn('inline-block', className)}
                    exit='hidden'
                    initial='hidden'
                    transition={{
                        yoyo: Infinity,
                        delay,
                        ease: 'easeOut',
                    }}
                    variants={combinedVariants}
                >
                    {text}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};
