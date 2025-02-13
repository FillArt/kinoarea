import {CardMovie} from "@/common/components/cards";

export const ChinemaList = () => {
    return (
        <div className="mt-14 grid grid-cols-12 gap-[23px]">
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={10.0}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={9.2}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={8.4}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={7.7}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={6.1}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={5.5}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={4.7}/>
            </div>
            <div className="col-span-3">
                <CardMovie title="Title" category='action' rating={3.1}/>
            </div>

        </div>
    );
};
;