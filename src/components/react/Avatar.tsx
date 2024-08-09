import { cn } from '@/lib/utils';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

export type AvatarProps = React.ComponentPropsWithoutRef<typeof Root>;

export const Avatar = forwardRef<React.ElementRef<typeof Root>, AvatarProps>(
    ({ className, ...props }, ref) => (
        <Root
            className={cn(
                'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                className,
            )}
            ref={ref}
            {...props}
        />
    ),
);
Avatar.displayName = Root.displayName;

export type AvatarImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const AvatarImage = forwardRef<
    React.ElementRef<typeof Image>,
    AvatarImageProps
>(({ className, ...props }, ref) => (
    <Image
        className={cn('aspect-square h-full w-full', className)}
        ref={ref}
        {...props}
    />
));
AvatarImage.displayName = Image.displayName;

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
    typeof Fallback
>;

export const AvatarFallback = forwardRef<
    React.ElementRef<typeof Fallback>,
    AvatarFallbackProps
>(({ className, ...props }, ref) => (
    <Fallback
        className={cn(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            className,
        )}
        ref={ref}
        {...props}
    />
));
AvatarFallback.displayName = Fallback.displayName;
