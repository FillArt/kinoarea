import BgImage from "../assets/bg.png"

import {SubscriptionTitle} from "@/widgets/Subscription/ui/SubscriptionTitle.tsx";
import {SubscriptionDescription} from "@/widgets/Subscription/ui/SubscriptionDescription.tsx";
import {SubscriptionForm} from "@/widgets/Subscription/ui/SubscriptionForm.tsx";

export const Subscription = () => {

    return (
        <section>
            <div
                style={{backgroundImage: `linear-gradient(rgba(29, 58, 160, 0.7), rgba(29, 58, 160, 0.9)), url(${BgImage})`}}
                className="container max-w-container mx-auto mt-[95px] pt-[75px] pb-[105px] rounded-[10px]">

                <div className=" w-full flex items-center flex-col mx-auto text-white">
                    <SubscriptionTitle/>
                    <SubscriptionDescription/>
                    <SubscriptionForm/>
                </div>

            </div>
        </section>
    );
};
