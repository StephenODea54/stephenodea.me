import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { Badge } from './Badge';
import { Card, CardHeader } from './Card';

export type ResumeCardProps = {
    altText: string;
    badges?: readonly string[];
    description?: string[];
    href?: string;
    logoUrl: string;
    period: string;
    subtitle?: string;
    title: string;
};

export const ResumeCard = ({
    altText,
    badges,
    description,
    href,
    logoUrl,
    period,
    subtitle,
    title,
}: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <a
            className='group'
            href={href || '#'}
            onClick={handleClick}
            target='_blank'
        >
            <Card className='flex'>
                <div className='flex-none'>
                    <Avatar className='bg-muted-background m-auto size-12 border dark:bg-foreground'>
                        <AvatarImage
                            alt={altText}
                            className='object-contain'
                            src={logoUrl}
                        />
                        <AvatarFallback>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className='ml-4 flex-grow flex-col items-center'>
                    <CardHeader>
                        <div className='flex items-center justify-between gap-x-2 text-base'>
                            <h3 className='inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm'>
                                {title}
                                {badges && (
                                    <span className='inline-flex gap-x-1'>
                                        {badges.map((badge, index) => (
                                            <Badge
                                                className='align-middle text-xs'
                                                key={index}
                                                variant='secondary'
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                )}
                                <ChevronRightIcon
                                    className={cn(
                                        'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                                        isExpanded ? 'rotate-90' : 'rotate-0',
                                    )}
                                />
                            </h3>
                            <div className='text-right text-xs tabular-nums text-muted-foreground sm:text-sm'>
                                {period}
                            </div>
                        </div>
                        {subtitle && (
                            <div className='font-sans text-xs'>{subtitle}</div>
                        )}
                    </CardHeader>
                    {description && (
                        <motion.div
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                height: isExpanded ? 'auto' : 0,
                            }}
                            className='mt-2 text-xs sm:text-sm'
                            initial={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <ul className='ml-6 list-disc [&>li]:mt-2'>
                                {description.map((bulletPoint) => (
                                    <li key={bulletPoint}>{bulletPoint}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </Card>
        </a>
    );
};
