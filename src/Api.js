import axios from 'axios';


const searchImage = async(term)=>{
    const response = await  axios.get('https://api.unsplash.com/search/photos',{
    headers:{
            Authorization: 'Client-ID fIyt6wzYB8I_k3NCUjSBo8etsxfnPPs-Cy1KQty66dY'
    },
    params:{
        query: term,
    }
    });
    return response.data.results;
};

export default searchImage;