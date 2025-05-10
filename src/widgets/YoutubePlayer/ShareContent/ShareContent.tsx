import {FacebookIcon, FacebookShareButton, VKShareButton, VKIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

type ShareContentProps = {
    url: string;
}

export const ShareContent = ({url}: ShareContentProps) => {
    return (
        <div className="flex gap-2">
            <VKShareButton url={url} className="transition-transform hover:scale-110">
                <VKIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </VKShareButton>
            <FacebookShareButton url={url} className="transition-transform hover:scale-110">
                <FacebookIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </FacebookShareButton>
            <TwitterShareButton url={url} className="transition-transform hover:scale-110">
                <TwitterIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </TwitterShareButton>
            <LinkedinShareButton url={url} className="transition-transform hover:scale-110">
                <LinkedinIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </LinkedinShareButton>

        </div>
    );
};
