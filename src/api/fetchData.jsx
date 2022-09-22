const BASE_URL = `https://api.punkapi.com/v2/`;

// fetch BEERS
export const getBeers = async (page, perPage) => {
    try{
       return await fetch(`${BASE_URL}beers?page=${page}&per_page=${perPage}`).then(res=>{
            return res.json();
        }).then((res)=>{
            return res;
        }).catch(err=>{
            throw new Error(err);
        })
    }catch(error){
        console.log(error);
    }
}
