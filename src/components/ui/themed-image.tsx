import Image from 'next/image';
import { useTheme } from 'next-themes';

interface ThemedImageProps {
    fileName: string;
    alt?: string;
    width: number;
    height: number;
    className?: string;
}

const ThemedImage: React.FC<ThemedImageProps> = ({ fileName, alt, width, height, className }) => {
    const { theme } = useTheme();

    return (
        <Image
            src={`/${theme === "dark" ? "dark" : "light"}/${fileName}`}
            alt={alt ?? ""}
            className={className}
            width={width}
            height={height}
        />
    );
}

export default ThemedImage;
