import axios from 'axios';
import { tShirtProductData, apiKey, storeId } from './DataAndUtils.js';


axios.post(`https://ecommerce.gelatoapis.com/v1/stores/${storeId}/products:create-from-template`, tShirtProductData, {
  headers: {
    'X-Api-Key': apiKey,
  },
})
.then(res =>{
  console.log(res.data)

})
.catch(err =>{
    console.log(err)
})
