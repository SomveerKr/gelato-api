import axios from 'axios';
import { mugProductData,storeId, apiKey } from './DataAndUtils.js';

axios
  .post(`https://ecommerce.gelatoapis.com/v1/stores/${storeId}/products:create-from-template`, mugProductData, {
    headers: {
      'X-Api-Key': apiKey,
    },
  })
  .then((res) => {
    console.log(res.data);
    // const variants = res.data.variants;
    // variants.forEach(element => {
    //   console.log(element.imagePlaceholders)
    // });
  })
  .catch((err) => {
    console.log(err);
  });
