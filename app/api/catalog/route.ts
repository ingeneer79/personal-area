import { NextApiRequest } from "next";

export function GET(
    req: NextApiRequest,
  ) {
    return Response.json(
      [
       {
        barCode: '1234567890123',
        name: 'Витамин Д',
        typeName: 'БАД',
        nds: 50,
        brandName: 'Vitamir',
        multiplicity: 100060,
        categoryName: 'Женское',
        components: 'AAAAAAA',
        priceWithNds: 200,
        orc: 390,
        sum: 1000,
        quantity: 0,        
       },
       {
        barCode: '1234567890123',
        name: 'Витамин Д',
        typeName: 'БАД',
        nds: 50,
        brandName: 'Vitamir',
        multiplicity: 100060,
        categoryName: 'Женское',
        components: 'AAAAAAA',
        priceWithNds: 200,
        orc: 390,
        sum: 1000,
        quantity: 0,        
       },
       {
        barCode: '1234567890123',
        name: 'Витамин Д',
        typeName: 'БАД',
        nds: 50,
        brandName: 'Vitamir',
        multiplicity: 100060,
        categoryName: 'Женское',
        components: 'AAAAAAA',
        priceWithNds: 200,
        orc: 390,
        sum: 1000,
        quantity: 0,        
       }       
      ]
    )
  }