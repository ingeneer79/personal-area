export const constantsMap = {
    pages:  {
        home: {
            mainText: 'Главная',
        },   
        wayBills: {
            mainText: '',
            filter: {
                brand: 'Бренд',
                type: 'Тип',
                category: 'Категория',
            },
            actions: {
                loadOrder: 'Загрузить заказ',
                downloadTemplate: 'Скачать шаблон',
                uploadByTemplate: 'Загрузить по шаблону',
                downloadPriceList: 'Скачать прайс-лист',
                sendPriceListByFTP: 'Отправить прайс-лист на FTP',
                myOrders: 'Мои заказы',
                newOrder: 'Новый заказ',
            }
        },   
        catalog: {
            mainText: 'Каталог',
            filter: {
                brand: 'Бренд',
                type: 'Тип',
                category: 'Категория',
            },
            actions: {
                loadOrder: 'Загрузить заказ',
                downloadTemplate: 'Скачать шаблон',
                uploadByTemplate: 'Загрузить по шаблону',
                downloadPriceList: 'Скачать прайс-лист',
                sendPriceListByFTP: 'Отправить прайс-лист на FTP',
                myOrders: 'Мои заказы',
                newOrder: 'Новый заказ',
            }
        },   
        waybills: {
            mainText: 'Накладные',
        },   
        finances: {
            mainText: 'Финансы',
        },   
        certificates: {
            mainText: 'Сертификаты',
        },   
        stm: {
            mainText: 'СТМ',
        },
    },
    widgets: {
        header: {
            bag: 'Корзина',
            user: 'Пользователь',
            login: 'Войти',
            logout: 'Выйти',
        },
    },
    shared: {
        config: {
          apiUrl: process.env.NEXT_PUBLIC_API_URL,
          defaultError: 'Пожалуйста, перезагрузите страницу или попробуйте позже',
          reloadPageText: 'Перезагрузить страницу',
        },
    },     
}