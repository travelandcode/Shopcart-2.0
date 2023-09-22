import Service from "./Service"

function Services(){
    const services = [
        {
            "title":"Frequently Asked Questions",
            "description": "Your go-to resource for finding solutions and essential information in one convenient place.",
            "img": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"
        },
        {
            "title": "Online Payment Process",
            "description": "Discover how to securely and seamlessly make payments on our platform.",
            "img": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"
        },
        {
            "title":"Home Delivery Option",
            "description": "Learn about delivery areas, timing, and how to get your favorite products delivered right to your doorstep.",
            "img": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"
        }
    ]
    return (
        <div className="[ service-section ][ w-[1460px] h-[670px] ][ mx-auto ][ px-[40px] pb-[100px] ][ flex flex-col ]">
            <h3 className="[ service-title ][ text-[#231f1e] font-[Eina02,sans-serif] text-[28px] font-bold ][ mb-[40px] ]">Services To Help You Shop</h3>
            <div className="[ services-container ][ w-[1376px] h-full ][ grid grid-flow-col gap-[16px] ]">
                {services.map(service =>(
                    <Service img={service.img} description={service.description} title={service.title} />
                ))}
            </div>
        </div>
    );
}

export default Services;