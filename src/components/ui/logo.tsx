import Image from 'next/image';
import { useTheme } from 'next-themes';


const Logo = () => {
    const { theme } = useTheme();

    return (<div className="flex items-center">
        <Image
        src={`/logo-${theme === 'dark' ? 'dark' : 'light'}.png`}
        alt="Logo"
        className="mr-1"
        width={32}
        height={32}
        />
        <span className="text-lg text-primary font-semibold mr-8 whitespace-nowrap">Eclectic Musings</span>
    </div>)
}

export default Logo;
