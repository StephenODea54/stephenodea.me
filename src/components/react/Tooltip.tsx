import { cn } from '@/lib/utils';
import { Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import React, { forwardRef } from 'react';

export type TooltipProviderProps = React.ComponentPropsWithoutRef<
    typeof Provider
>;
export const TooltipProvider = Provider;

export type TooltipProps = React.ComponentPropsWithoutRef<typeof Root>;
export const Tooltip = Root;

export type TooltipTriggerProps = React.ComponentPropsWithoutRef<
    typeof Trigger
>;
export const TooltipTrigger = Trigger;

export type TooltipContentProps = React.ComponentPropsWithoutRef<
    typeof Content
>;
export const TooltipContent = forwardRef<
    React.ElementRef<typeof Content>,
    TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
    <Content
        className={cn(
            'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
    />
));
TooltipContent.displayName = Content.displayName;
