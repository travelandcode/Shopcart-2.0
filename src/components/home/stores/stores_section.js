import StoresData from '../../constants/stores.json' 
import Store from './store'

function Stores(){

    const stores = StoresData
    return(
        <div className="[ store-area ][ h-[514px] w-[1360px] phone:w-screen phone:h-auto tablet:w-screen tablet:h-auto ][ pb-[70px] ][ mx-auto ][ mt-[80px] phone:mt-[20px] ][ px-[40px] phone:px-[10px] phone:py-[20px] ][ flex flex-col ]">
            <h className="[ store-title ][ leading-[100%] font-bold text-[28px] phone:text-[20px] ][ text-center ][ mb-[40px] phone:mb-[20px] ]">Best Selling Store</h>
            <div className="[ store-grid ][ grid grid-flow-col phone:grid-rows-2 tablet:grid-rows-2 phone:gap-y-[15px] phone:gap-x-[15px] tablet:gap-y-[15px] tablet:gap-x-[15px] ][ w-[1280px] phone:w-[340px] tablet:w-[740px] ][ mx-auto ]">
                {stores.map(store =>( 
                    <Store brandName={store.brandName} img={store.img} brandImg={store.brandImg}/> 
                ))}
                
            </div>
        </div>
    );
}

export default Stores;