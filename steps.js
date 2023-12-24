
//Step 1 : Header over to the gelato dashboard https://dashboard.gelato.com/home/dashboard

//Step 2 : Then Create templates for mug and tshirt from template section
// Then copy the template id ( https://dashboard.gelato.com/docs/guides/create-product-from-template/ )

//Step 3 : Get StoreID following the instructions at the end of the page here https://dashboard.gelato.com/docs/guides/create-product-from-template/ and then paste this id in the DataAndUtils.js 

//Step 4 : Get your api key and paste in DataAndUtils.js from here https://dashboard.gelato.com/keys/manage

//Step 5 : Paste the template id in the getTemplate.js file's templateId variable

//Step 6 : now run the file by `node getTemplate.js` in console and copy the values which is required in the productData in DataAndUtils.js for product creation accordingly for tShirt and mug

//Step 7 : Now run the node tShirt.js or node mug.js to create mug or tShirt products

























//Step 1 : Get available catalogs list

// axios.get('https://product.gelatoapis.com/v3/catalogs', {
//   headers: {
//     'X-Api-Key': apiKey,
//   },
// })
// .then(res =>{
//     console.log(res.data)
// })
// .catch(err =>{
//     console.log(err)
// })