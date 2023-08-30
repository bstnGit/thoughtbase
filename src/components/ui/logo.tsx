import * as React from "react";
import Link from 'next/link';

type LogoProps = {
    className?: string
}

const Logo: React.FC<LogoProps> = (props) => (
    <Link href="/">
        <div className={`flex items-center ${props.className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} className="fill-primary shrink-0">
                <path d="m2.5 8.9 9 5.2c.2.1.3.1.5.1s.3 0 .5-.1l9-5.2c.2-.1.3-.2.4-.4.2-.5.1-1.1-.4-1.4l-9-5.2c-.3-.2-.7-.2-1 0l-9 5.2c-.2.1-.3.2-.4.4-.2.5-.1 1.1.4 1.4zm19 2.2-.2-.1-8.8 5.1c-.3.2-.7.2-1 0L2.7 11l-.2.1c-.5.3-.6.9-.4 1.4.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4-.1-.2-.2-.3-.4-.4zm0 4-.2-.1-8.8 5.1c-.3.2-.7.2-1 0L2.7 15l-.2.1c-.5.3-.6.9-.4 1.4.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4-.1-.2-.2-.3-.4-.4z" />
            </svg>

            <span className="text-lg text-primary font-semibold ml-2 whitespace-nowrap">Eclectic Musings</span>
        </div>
    </Link>
)

export default Logo;
