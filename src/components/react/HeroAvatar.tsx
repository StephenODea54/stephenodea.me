import { Avatar, AvatarFallback, AvatarImage } from '@/components/react/Avatar';

export const HeroAvatar = () => {
    return (
        <Avatar className='size-44 border'>
            <AvatarImage alt="Stephen O'Dea" src='/me.png' />
            <AvatarFallback>SO</AvatarFallback>
        </Avatar>
    );
};
