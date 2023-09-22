import StoresData from '../../constants/stores.json' 
import Store from './Store'

function Stores(){

    const stores = StoresData
    return(
        <div className="[ best-selling-store-area ][ h-[514px] w-[1460px] ][ pb-[70px] ][ mx-auto ][ mt-[80px] ][ px-[65px] ][ flex flex-col ]">
            <h className="[ best-selling-store-title ][ text-best-selling-store-title-txt ][ text-center ][ mb-[40px] ]">Best Selling Store</h>
            <div className="[ best-selling-store-grid ][ grid grid-flow-col ][ w-[1376px] ]">
                {stores.map(store =>( 
                    <Store brandName={store.brandName} img={store.img} brandImg={store.brandImg}/> 
                ))}
                
            </div>
        </div>
    );
}

export default Stores;