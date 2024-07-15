export async function getData() {
    /*
    const res = await fetch('https://external-service.com/data', {
      headers: {
        authorization: process.env.API_KEY,
      },
    })
   */
    return [
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
        }        
      ]
  }

  export default getData;