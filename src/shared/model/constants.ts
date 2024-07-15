export const constantsMap = {
    pages:  {
        home: {
            mainText: 'Главная',
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
        inbound: {
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
          apiUrl: 'http://localhost:4000/api',
          defaultError: 'Пожалуйста, перезагрузите страницу или попробуйте позже',
          reloadPageText: 'Перезагрузить страницу',
        },
    },     
}