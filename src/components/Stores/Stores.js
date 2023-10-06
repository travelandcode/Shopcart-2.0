import StoresData from '../../constants/stores.json' 
import Store from './Store'

function Stores(){

    const stores = StoresData
    return(
        <div className="[ store-area ][ h-[514px] w-[1360px] ][ pb-[70px]][ mx-auto ][ mt-[80px] ][ px-[40px] ][ flex flex-col ]">
            <h className="[ store-title ][ leading-[100%] font-bold text-[28px] ][ text-center ][ mb-[40px] ]">Best Selling Store</h>
            <div className="[ store-grid ][ grid grid-flow-col ][ w-[1280px] ][ mx-auto ]">
                {stores.map(store =>( 
                    <Store brandName={store.brandName} img={store.img} brandImg={store.brandImg}/> 
                ))}
                
            </div>
        </div>
    );
}

export default Stores;