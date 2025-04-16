import BgImage from "../assets/bg.png"

import {SubscriptionTitle} from "@/widgets/Subscription/ui/SubscriptionTitle.tsx";
import {SubscriptionDescription} from "@/widgets/Subscription/ui/SubscriptionDescription.tsx";
import {SubscriptionForm} from "@/widgets/Subscription/ui/SubscriptionForm.tsx";

export const Subscription = () => {

    return (
        <section className="mt-[95px]">
            <div

                className="container max-w-container mx-auto">

                <div
                    className="tabletLg:pt-[75px] phone:pt-[51px] pt-[26px] tabletLg:pb-[105px] phone:pb-[50px] pb-[25px] rounded-[10px]"
                    style={{backgroundImage: `linear-gradient(rgba(29, 58, 160, 0.9), rgba(29, 58, 160, 0.9)), url(${BgImage})`}}>
                    <div className=" w-full flex items-center flex-col mx-auto text-white">
                        <SubscriptionTitle/>
                        <SubscriptionDescription/>
                        <SubscriptionForm/>
                    </div>
                </div>


            </div>
        </section>
    );
};
