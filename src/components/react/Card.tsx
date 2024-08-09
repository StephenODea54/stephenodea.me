import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export type CardProps = React.ComponentProps<'div'>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => (
        <div
            className={cn('rounded-lg bg-card text-card-foreground', className)}
            ref={ref}
            {...props}
        />
    ),
);
Card.displayName = 'Card';

export type CardHeaderProps = React.ComponentProps<'div'>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => (
        <div className={cn('flex flex-col', className)} ref={ref} {...props} />
    ),
);
CardHeader.displayName = 'CardHeader';

export type CardTitleProps = React.ComponentProps<'h3'>;

export const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
    ({ className, ...props }, ref) => (
        <h3
            className={cn(
                'text-2xl font-semibold leading-none tracking-tight',
                className,
            )}
            ref={ref}
            {...props}
        />
    ),
);
CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = React.ComponentProps<'p'>;

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>(({ className, ...props }, ref) => (
    <p
        className={cn('text-sm text-muted-foreground', className)}
        ref={ref}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

export type CardContentProps = React.ComponentProps<'div'>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => (
        <div
            className={cn(
                'text-pretty font-sans text-sm text-muted-foreground',
                className,
            )}
            ref={ref}
            {...props}
        />
    ),
);
CardContent.displayName = 'CardContent';

export type CardFooterProps = React.ComponentProps<'div'>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => (
        <div
            className={cn('flex items-center pt-2', className)}
            ref={ref}
            {...props}
        />
    ),
);
CardFooter.displayName = 'CardFooter';
