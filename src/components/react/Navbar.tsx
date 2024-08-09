import { buttonVariants } from './Button';
import { Dock, DockIcon } from './Dock';
import { GitHubIcon } from './GitHubIcon';
import { ModeToggle } from './ModeToggle';
import { HomeIcon, NotebookIcon } from 'lucide-react';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/react/Tooltip';
import { cn } from '@/lib/utils';

const LINKS = [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/notes', icon: NotebookIcon, label: 'Notes' },
];

const SOCIALS = [
    {
        name: 'GitHub',
        url: 'https://github.com/StephenODea54',
        icon: GitHubIcon,
    },
];

export const Navbar = () => {
    return (
        <div className='pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom'>
            <div className='fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background'></div>
            <Dock className='pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
                {LINKS.map((link) => (
                    <DockIcon key={link.href}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            buttonVariants({
                                                variant: 'ghost',
                                                size: 'icon',
                                            }),
                                            'size-12',
                                        )}
                                    >
                                        <link.icon className='size-4' />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{link.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DockIcon>
                ))}
                {SOCIALS.map((social) => (
                    <DockIcon key={social.name}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        className={cn(
                                            buttonVariants({
                                                variant: 'ghost',
                                                size: 'icon',
                                            }),
                                            'size-12',
                                        )}
                                        href={social.url}
                                        target='_blank'
                                    >
                                        <social.icon className='size-4' />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DockIcon>
                ))}
                <DockIcon>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ModeToggle />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DockIcon>
            </Dock>
        </div>
    );
};
