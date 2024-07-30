import { NextApiRequest } from "next";

export function GET(
    // req: NextApiRequest,
  ) {
    
    return Response.json(
      [
        {
          id: 'brand',
          items: [
            {
              value: "Бренд 1",
              key: "1",
            },
            {
              value: "Бренд 2",
              key: "2",
            },
          ]
        },
        {
          id: 'type',
          items: [
            {
              value: "Тип 1",
              key: "1",
            },
            {
              value: "Тип 2",
              key: "2",
            },
          ]
        },
        {
          id: 'category',
          items: [
            {
              value: "Категория 1",
              key: "1",
            },
            {
              value: "Категория 2",
              key: "2",
            },
          ]
        },
        {
          id: 'productState',
          items: [
            {
              value: "СТМ / УСТМ",
              key: "1",
            },
            {
              value: "Акции",
              key: "2",
            },
            {
              value: "Уцененный товар",
              key: "3",
            },
            {
              value: "ЖНВЛП",
              key: "4",
            },
            {
              value: "Без маркировки",
              key: "5",
            },
            {
              value: "ЛС",
              key: "6",
            },
            {
              value: "Категории",
              key: "7",
            },
          ]
        }     
      ]
    )
  }