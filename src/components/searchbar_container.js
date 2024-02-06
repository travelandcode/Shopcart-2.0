import ImageSearchResult from "./product_search_result";
import SearchRecommendation from "./search_recommendation";

function SearchResults({results,recommendations}){
    let count = 0
    let recommendationCount = 0
    return (
        <div className='[ search-bar-results ][ w-[450px] h-auto ][ py-[20px] ][ bg-white ][ mx-auto ][ mt-[20px] ][ z-[100] ][ rounded-[15px] ][ shadow-[#181818] shadow-lg ][ overflow-y-hidden ]'>
            {recommendations.length === 0 && results.length === 0 && <p>No results found.</p>}
            {
                 recommendations.map((recommendation) => {
                    recommendationCount = recommendationCount + 1
                    if(recommendationCount <= 5)
                    return <SearchRecommendation data={recommendation} />
                })
            }
            {
                results.map((result) => {
                    count = count + 1
                    if(count <= 8)
                    return <ImageSearchResult data={result} />
                })
            }
        </div>
    );
}

export default SearchResults;