import axios from 'axios';
import { URL } from '../../varGlobal';


export const fetchAllInstancias = async() => {

    try{
        const {data} = await axios.get(`${URL}/api/allinstancias`);
        console.log('que trae data de fetchAllInstancias: ', data);
        return data;
        
    }catch(error){
        console.log('error en fetchAllInstancias: ', error.message);
    }
};