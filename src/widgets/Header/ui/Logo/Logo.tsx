import LogoIcon from './assets/logo.svg';

export const Logo = () => {
    return (
        <div className="flex items-center gap-[6px]">
            <a href="/">
                <img src={LogoIcon} alt="Kinoarea Logo"/>
            </a>
            <strong className="text-descriptionFontSize text-white">
                <span style={{color: '#3657CB'}}>Kino</span>
                area
            </strong>
        </div>
    );
};