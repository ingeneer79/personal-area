export const constantsMap = {
    pages:  {
        home: {
            mainText: 'Главная',
        },   
        wayBills: {
            mainText: 'Накладные',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },
                {
                    title: 'Накладные',
                    href: '/waybills',
                }
            ],
            filter: {
                address: {
                    id: 'address',
                    title: 'Адрес',                    
                },
                waybillNumber: {
                    id: 'waybillNumber',
                    title: 'Номер накладной',
                },
                period: {
                    id: 'period',
                    title: 'Период',
                    type: 'date-range',
                },
                marking: {
                    id: 'marking',
                    title: 'Маркировка',
                    classifierId: 'marking',
                },
                markingStatus: {
                    id: 'markingStatus',
                    title: 'Статус маркировки',
                    classifierId: 'markingStatus',
                },

            },
            actions: {
                downloadAll: 'Скачать все',
                viewCertificates: 'Просмотреть сертификаты',
                downloadCertificates: 'Скачать сертификаты',
                exportToExcel: 'Выгрузить в  EXCEL',
                exportToElectronicWaybill: 'Выгрузить электронную накладную',
            }         
        },   
        catalog: {
            mainText: 'Каталог',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },
                {
                    title: 'Каталог',
                    href: '/catalog',
                }
            ],
            filter: {
                brand: {
                    id: 'brand',
                    title: 'Бренд',
                    classifierId: 'brand',
                },
                type: {
                    id: 'type',
                    title: 'Тип',
                    classifierId: 'type',
                },
                category: {
                    id: 'category',    
                    title: 'Категория',
                    classifierId: 'category',
                }
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
        petitions: {
            mainText: 'Претензии',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },
                {
                    title: 'Претензии',
                    href: '/petitions',
                }
            ],
            filter: {
                period: {
                    id: 'period',
                    title: 'Период',
                    type: 'date-range',
                },
                status: {
                    id: 'petitionStatus',
                    title: 'Статус',
                    classifierId: 'petitionStatus',
                },
                deliveryAddress: {
                    id: 'deliveryAddress',
                    title: 'Адрес доставки',
                    classifierId: 'deliveryAddress',
                },                
            },
            actions: {
                documents: 'Возвратные документы',
                print: 'Распечатать претензию (и)',
                exportToExcel: 'Выгрузить в  EXCEL',
                reject: 'Отозвать претензию (и)',
                newPetition: 'Новая претензия',
            }
        },           
        finance: {
            mainText: 'Финансы',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },            
                {
                    title: 'Финансы',
                    href: '/finance',
                }                
            ],
            actions: {
                requestVerification: 'Запросить акт сверки',
                sendVerification: 'Отправить акт сверки',
                debtAmount: 'Сумма дебиторской задолженности',
                overdueDebtAmount: "Сумма просроченной дебиторской задолженности"
            }
        },   
        certificates: {
            mainText: 'Сертификаты',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },
                {
                    title: 'Сертификаты',
                    href: '/certificates',
                }                     
            ],
        },   
        stm: {
            mainText: 'СТМ',
            breadCrumbs: [
                {
                    title: 'Главная',
                    href: '/',
                },
                {
                    title: 'СТМ',
                    href: '/stm',
                }                   
            ],
            actions: {
                viewCatalog: 'Просмотреть каталог',
                downloadStmCatalog: 'Скачать каталог СТМ',
                feedback: 'Обратная связь',
                exportExcel: 'Выгрузить в EXCEL',
            },
            filter: {
                form: {
                    id: 'form',
                    title: 'Форма выпуска',
                    classifierId: 'form',
                },
                category: {
                    id: 'category',
                    title: 'Категории',
                    classifierId: 'category',
                }

            }
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