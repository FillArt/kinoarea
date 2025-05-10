import {WithoutSubscribeLayout} from "@/shared/layouts";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {useNavigate} from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <WithoutSubscribeLayout>
            <div className="container text-center text-white ">
                <div className="text-white font-black leading-tight mb-[26px]">
                    <h1 className="text-[150px]">404</h1>
                    <p className="text-[50px]">Кина не будет :(</p>
                </div>
                <p className="text-[18px] mb-[32px]">Возможно, данного адреса страницы не сущетсвует, или странциа была перемещена.</p>
                <div className="flex gap-[15px] justify-center mb-[32px]">
                    <ButtonBase
                        title="Вернуться на главную"
                        onClick={() => navigate("/kinoarea")}
                    />
                    <ButtonBase
                        title="Поиск по сайту"
                        onClick={() => alert('Открываю форму поиска ...')}
                        style="border"
                        className="text-white"
                    />
                </div>
            </div>

        </WithoutSubscribeLayout>
    );
};