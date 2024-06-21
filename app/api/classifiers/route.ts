import { NextApiRequest } from "next";

export function GET(
    req: NextApiRequest,
  ) {
    return Response.json(
      [
        {
          id: 'brand',
          items: [
            {
              name: "Бренд 1",
              id: "1",
            },
            {
              name: "Бренд 2",
              id: "2",
            },
          ]
        },
        {
          id: 'type',
          items: [
            {
              label: "Тип 1",
              value: "1",
            },
            {
              label: "Тип 2",
              value: "2",
            },
          ]
        },
        {
          id: 'category',
          items: [
            {
              label: "Категория 1",
              value: "1",
            },
            {
              label: "Категория 2",
              value: "2",
            },
          ]
        }        
      ]
    )
  }