import ThemedImage from './themed-image';

const Logo = () => {

    return (<div className="flex items-center">
        <ThemedImage
            fileName="logo.png"
            alt="Logo"
            className="mr-1"
            width={32}
            height={32}
        />
        <span className="text-lg text-primary font-semibold mr-8 whitespace-nowrap">Eclectic Musings</span>
    </div>)
}

export default Logo;
