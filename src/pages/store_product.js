import BasePage from '../layouts/base_page';
import ProductSection from '../components/product/product_section';
import { useParams } from 'react-router-dom/cjs/react-router-dom';


function StoreProduct(){
    const {id} = useParams()
    return(
        <BasePage>
            <ProductSection id={id} />
        </BasePage>  
    );
}

export default StoreProduct;