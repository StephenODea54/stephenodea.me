import { cn } from '@/lib/utils';
import { Badge } from '@/components/react/Badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/react/Card';

export type ProjectCardProps = {
    className?: string;
    description: string;
    href?: string;
    image?: string;
    links?: {
        href: string;
        label: string;
    }[];
    tags?: string[];
    title: string;
};

export const ProjectCard = ({
    className,
    description,
    href,
    image,
    links,
    tags,
    title,
}: ProjectCardProps) => {
    return (
        <Card
            className={
                'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
            }
        >
            <a
                href={href || '#'}
                className={cn('block cursor-pointer', className)}
            >
                {image && (
                    <img
                        alt={title}
                        className='h-40 w-full overflow-hidden object-cover object-center'
                        src={image}
                    />
                )}
            </a>
            <CardHeader className='px-2'>
                <div className='space-y-1'>
                    <CardTitle className='mt-1 text-base'>{title}</CardTitle>
                    <p className='prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground'>
                        {description}
                    </p>
                </div>
            </CardHeader>
            <CardContent className='mt-auto flex flex-col px-2'>
                {tags && tags.length > 0 && (
                    <div className='mt-2 flex flex-wrap gap-1'>
                        {tags?.map((tag) => (
                            <Badge
                                className='px-1 py-0 text-[10px]'
                                variant='secondary'
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className='px-2 pb-2'>
                {links && links.length > 0 && (
                    <div className='flex flex-row flex-wrap items-start gap-1'>
                        {links?.map((link, idx) => (
                            <a href={link?.href} key={idx} target='_blank'>
                                <Badge
                                    className='flex gap-2 px-2 py-1 text-[10px]'
                                    key={idx}
                                >
                                    {link.label}
                                </Badge>
                            </a>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};
