
type MainPreviewProps = {
    keyMain: string;
}

export const MainPreview = ({keyMain}: MainPreviewProps) => {

    const poster = `https://img.youtube.com/vi/${keyMain}/maxresdefault.jpg`

    return (
        <article>
            <div>
                <img className="w-full rounded-[10px]" src={poster} alt=""/>
            </div>
        </article>
    );
};