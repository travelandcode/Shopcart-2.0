import DealsList from "./DealsList";

function Deals() {
    const products = [
        {
            id:0,
            name: "HomePod Mini",
            description: "Table with air purifier, stained veneer/black",
            price: "$239.00",
            img_src:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png"
        },
        {
            id:1,
            name: "Instax Mini 9",
            description: "Selfie mode and selfie mirror, Macro mode",
            price: "$99.00",
            img_src:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png"
        },
        {
            id:2,
            name: "Base Camp Duffel M",
            description: "Table with air purifier, stained veneer/black",
            price: "$159.00",
            img_src:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png"
        },
    
    ]
    return(
        <div className="[ deals-container ][ h-deals-container w-deals-container ][ px-deals-horizontal ][ flex flex-col ][ mt-deals-margin ][ mx-auto ]">
            <h3 className="[ deals-txt ][ text-deals-txt text-deals ][ mb-deals-text-margin ] ">Today's Best Deals For You</h3>
            <DealsList products={products}/>
        </div>
    );
}

export default Deals;