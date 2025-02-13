import {CardMovie} from "@/common/components/cards";

export const ChinemaList = () => {
    return (
        <div className="mt-14 grid grid-cols-12 gap-[23px]">
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="test" category='action' rating={6.70}/>
            </div>

        </div>
    );
};
;