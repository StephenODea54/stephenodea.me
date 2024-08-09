import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    useRef,
    type PropsWithChildren,
} from 'react';

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export const dockVariants = cva(
    'mx-auto w-max h-full p-2 flex items-end rounded-full border',
);

export type DockProps = VariantProps<typeof dockVariants> & {
    children: React.ReactNode;
    className?: string;
    magnification?: number;
    distance?: number;
};

export const Dock = forwardRef<HTMLDivElement, DockProps>(
    (
        {
            children,
            className,
            distance = DEFAULT_DISTANCE,
            magnification = DEFAULT_MAGNIFICATION,
            ...props
        },
        ref,
    ) => {
        const mousex = useMotionValue(Infinity);

        const renderChildren = () => {
            return Children.map(children, (child: any) => {
                if (isValidElement(child)) {
                    return cloneElement(child, {
                        distance,
                        magnification,
                        mousex,
                    } as DockIconProps);
                }
                return child;
            });
        };

        return (
            <motion.div
                className={cn(dockVariants({ className }))}
                onMouseLeave={() => mousex.set(Infinity)}
                onMouseMove={(e) => mousex.set(e.pageX)}
                ref={ref}
                {...props}
            >
                {renderChildren()}
            </motion.div>
        );
    },
);
Dock.displayName = 'Dock';

export type DockIconProps = {
    mousex?: any;
    children?: React.ReactNode;
    className?: string;
    distance?: number;
    magnification?: number;
    props?: PropsWithChildren;
    size?: number;
};

export const DockIcon = ({
    size,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    mousex,
    className,
    children,
    ...props
}: DockIconProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const distanceCalc = useTransform(mousex, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [40, magnification, 40],
    );

    const width = useSpring(widthSync, {
        damping: 12,
        mass: 0.1,
        stiffness: 150,
    });

    return (
        <motion.div
            className={cn(
                'flex aspect-square cursor-pointer items-center justify-center rounded-full',
                className,
            )}
            ref={ref}
            style={{ width }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
DockIcon.displayName = 'DockIcon';
