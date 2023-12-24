import axios from 'axios';
import { apiKey } from './DataAndUtils.js';

const templateId = '8016e649-5aa9-45e4-af04-ad364813afd8'
//template id => 8016e649-5aa9-45e4-af04-ad364813afd8
  axios.get(`https://ecommerce.gelatoapis.com/v1/templates/${templateId}`, {
  headers: {
    'X-Api-Key': apiKey,
  },
})
.then(res =>{
    console.log(res.data)
    // console.log(res.data.variants.map(variant => console.log(variant.imagePlaceholders)))
})
.catch(err =>{
    console.log(err)
})


const response = {
    id: '8016e649-5aa9-45e4-af04-ad364813afd8',
    clientId: '8f7a7633-6f9b-4244-838a-4a8e7ad7ab2f',
    templateName: 'Heavyweight Unisex Crewneck T-shirt',
    title: 'Heavyweight Unisex Crewneck T-shirt',
    description: '<div>\n' +
      '   <p>This heavyweight cotton t-shirt is a durable staple product with a classic fit. One of the most popular items, it has a relaxed style made for everyday and casual wear</p>\n' +
      ' <p>- Seamless double-needle collar\n' +
      '<br>- Double-needle sleeve and bottom hems\n' +
      '<br>- 100% cotton\n' +
      '<br>- Taped neck and shoulders for durability</p>\n' +
      ' <p>This product is made on demand. No minimums.</p>\n' +
      '</div>\n',
    previewUrl: 'https://gelato-api-live.s3.eu-west-1.amazonaws.com/ecommerce/store_product_image/472970b5-7673-48f4-99ff-1c02b1610af4/preview?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3QM3COBPZOL2E4GY%2F20231224%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231224T181421Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=a842aed301b9c271ac22f0fe2ba4f2e5a5007908dc605984cb6d781b3df7894d',
    variants: [
      {
        id: '76a844f2-7bce-40d0-a282-7834687a78e6',
        title: 'White - 2XL - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: '69ee86d5-3860-4e3e-a775-c8124f681b03',
        title: 'White - M - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: 'ffb05250-c78c-421e-b3e1-7dc131cce4db',
        title: 'White - XL - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: '66c33b43-5001-4903-bfe2-a8f0f9063d2c',
        title: 'White - S - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: '97a9a3fa-1d69-4cde-a381-b05e65678b8a',
        title: 'White - L - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: 'c8254156-8175-450b-8365-3ecfdb3d336a',
        title: 'White - 3XL - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: '9c2f13af-462d-4aec-9f45-f48708bcd46f',
        title: 'White - 5XL - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      },
      {
        id: 'fe981e04-fd1a-41ed-9c71-ec4c5ba66e52',
        title: 'White - 4XL - Direct-to-garment (DTG)',
        variantOptions: [Array],
        imagePlaceholders: [Array]
      }
    ],
    createdAt: '2023-12-19T11:07:23+0000',
    updatedAt: '2023-12-24T18:09:58+0000'
  }