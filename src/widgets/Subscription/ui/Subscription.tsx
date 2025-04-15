import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import LogoIcon from "../assets/logo.svg"
import BgImage from "../assets/bg.png"

export const Subscription = () => {
    return (
        <section>
            <div style={{ backgroundImage: `linear-gradient(rgba(29, 58, 160, 0.7), rgba(29, 58, 160, 0.9)), url(${BgImage})`  }}
                 className="container max-w-container mx-auto mt-[95px] pt-[75px] pb-[105px] rounded-[10px]">

                <div className=" w-full flex items-center flex-col mx-auto text-white">

                    <div className="text-center mb-[25px] flex gap-[13px]">
                        <img src={LogoIcon} alt=""/>
                        <strong className="text-[25px]">Kinoarea</strong>
                    </div>

                    <div className="text-center">
                        <h2 className="text-[50px] font-bold mb-[26px]">Подпишитесь на E-mail рассылку</h2>
                        <p className="max-w-[700px] mx-auto mb-[34px] text-[22px]">Если хотите быть в курсе последних
                            новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку! </p>
                    </div>

                    <div>
                        <form action="">
                            <div className="flex gap-[8px] mb-[22px]">
                                <input type="text"
                                       className="py-[14px] w-full px-[27px] rounded-[10px] min-w-[425px] text-black"
                                       placeholder="test"/>

                                <ButtonBase onClick={() => {
                                }} title="Подписаться" style="secondary"/>
                            </div>

                            <div className="justify-center flex gap-[10px]">
                                <input type="checkbox"/>
                                <label htmlFor="">12123123 <a href="/test">12123</a></label>
                            </div>
                        </form>

                    </div>


                </div>

            </div>
        </section>
    );
};
