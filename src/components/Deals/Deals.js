import DealsList from "./DealsList";

function Deals() {

    return(
        <div className="[ deals-container ][ h-deals-container w-deals-container ][ px-deals-horizontal ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ deals-txt ][ text-deals-txt text-deals ][ mb-deals-text-margin ][ text-center ] ">Today's Best Deals For You</h3>
            <DealsList />
        </div>
    );
}

export default Deals;