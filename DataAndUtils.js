const apiKey =
  'fb98cc15-d033-4e4a-ba8b-9a04046711d0-67580619-40e6-44a2-baec-6e650112c0e2:f83cd6cf-7b76-43c8-bbcd-a3add9e611e5';
const storeId = 'b301ef7c-7733-4ee5-9dae-08e434936904'


const tShirtProductData = {
  //copied from dashboard
  templateId: '8016e649-5aa9-45e4-af04-ad364813afd8',
  //copy from the response of node getTemplate.js
  title: 'Heavyweight Unisex Crewneck T-shirt',
  //copy from the response of node getTemplate.js
  description:
    '<div>\n' +
    '   <p>This heavyweight cotton t-shirt is a durable staple product with a classic fit. One of the most popular items, it has a relaxed style made for everyday and casual wear</p>\n' +
    ' <p>- Seamless double-needle collar\n' +
    '<br>- Double-needle sleeve and bottom hems\n' +
    '<br>- 100% cotton\n' +
    '<br>- Taped neck and shoulders for durability</p>\n' +
    ' <p>This product is made on demand. No minimums.</p>\n' +
    '</div>\n',
  //Leave it this way if you want it to visible this producr on your live store
  isVisibleInTheOnlineStore: true,
  salesChannels: ['web'],
  tags: ['tshirt', 'unisex'],
  //Get the templateVariantId from the response of `node getTemplate.js` and imagePlaceholders is optional and not working from api(only working from dashboard while customizing templates)
  variants: [
    {
      templateVariantId: '76a844f2-7bce-40d0-a282-7834687a78e6',
      //NO NEED OF IMAGE PLACEHOLDERS AS IT CAN ONLY BE DONE FROM THE DASHBOARD'S TEMPLATES SECTION
      //   "imagePlaceholders": [
      //       {
      //         "layerId":"front",
      //           "name": "treeHouse.png",
      //           "fileUrl": "https://png.pngtree.com/png-clipart/20231001/original/pngtree-green-grass-landscape-watercolor-clipart-ai-generated-png-image_13220443.png"
      //       }
      //   ]
    },
    {
      templateVariantId: 'ffb05250-c78c-421e-b3e1-7dc131cce4db',
    },
    {
      templateVariantId: '66c33b43-5001-4903-bfe2-a8f0f9063d2c',
    },
    {
      templateVariantId: '97a9a3fa-1d69-4cde-a381-b05e65678b8a',
    },
  ],
};


const mugProductData = {
    templateId: '3b28980d-4ef0-4079-8887-850a505d28d0',
    title: 'White 11oz Ceramic Mug',
    description:
      '<div>\n' +
      '  <p>This beautiful ceramic mug is perfect for any event of the day. Your morning coffee,hot beverage you enjoy. The mug is glossy white and the prints come out beautifully and vividl quality and luster when used in both microwaves and the dishwasher. </p>\n' +
      '  <p>- Ceramic 11oz mug</p>\n' +
      '  <p>- Dishwasher and microwave safe</p>\n' +
      '  <p>- Product safety tests conducted by independent third party laboratories.</p>\n' +
      '</div>',
    previewUrl:
      'https://gelato-api-live.s3.eu-west-1.amazonaws.com/ecommerce/store_product_imag38f7938/preview?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-C2F20231221%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231221T205402Z&X-Amz-SignedHeaders=hosnature=e0d2cd698015f7a61f48f851b4d354c5c9b39b50af1c2433756fb34858117efd',
    isVisibleInTheOnlineStore: true,
    salesChannels: ['web'],
    tags: ['mug', 'best mug'],
    variants: [
      {
        templateVariantId: '41549527-3b93-452f-bec8-07e58bd4be43',
        //NO NEED OF IMAGE PLACEHOLDERS AS IT CAN ONLY BE DONE FROM THE DASHBOARD'S TEMPLATES SECTION
        // "imagePlaceholders": [
        //     {
        //         "name": "mugImage",
        //         "fileUrl": "https://s44783.pcdn.co/wp-content/uploads/2023/06/f12.png"
        //     }
        // ]
      },
    ],
  };

  export {mugProductData, tShirtProductData, storeId, apiKey }