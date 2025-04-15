import LogoIcon from "@/widgets/Subscription/assets/logo.svg";

export const SubscriptionTitle = () => {
    return (
        <div className="text-center mb-[25px] flex gap-[13px]">
            <img src={LogoIcon} alt=""/>
            <strong className="text-[25px]">Kinoarea</strong>
        </div>
    );
};
