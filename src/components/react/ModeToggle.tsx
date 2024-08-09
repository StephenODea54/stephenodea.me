import { useEffect, useState } from 'react';

import { Button } from '@/components/react/Button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ModeToggle = () => {
    const [theme, setThemeState] = useState<'theme-light' | 'dark' | 'system'>(
        'theme-light',
    );

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setThemeState(isDarkMode ? 'dark' : 'theme-light');
    }, []);

    useEffect(() => {
        const isDark =
            theme === 'dark' ||
            (theme === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    }, [theme]);

    return (
        <Button
            variant='ghost'
            type='button'
            size='icon'
            className='px-2'
            onClick={() =>
                setThemeState(theme === 'dark' ? 'theme-light' : 'dark')
            }
        >
            <SunIcon className='h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200' />
            <MoonIcon className='hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200' />
        </Button>
    );
};
