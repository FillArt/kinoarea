import {FacebookIcon, FacebookShareButton, VKShareButton, VKIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

export const ShareContent = () => {

    const shareUrl = `https://mywebsite.com/share/video/123`;

    return (
        <div className="flex gap-2">
            <VKShareButton url={shareUrl} className="transition-transform hover:scale-110">
                <VKIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </VKShareButton>
            <FacebookShareButton url={shareUrl} className="transition-transform hover:scale-110">
                <FacebookIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} className="transition-transform hover:scale-110">
                <TwitterIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} className="transition-transform hover:scale-110">
                <LinkedinIcon size={42} bgStyle={{ fill: "transparent" }} iconFillColor="#6D7792" />
            </LinkedinShareButton>

        </div>
    );
};
