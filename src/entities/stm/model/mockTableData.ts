interface MockTableData {
  key: string;
  name: string;
  form: string;
  categoryName: string;
  packaging: string;
  quantity: number;
  technicalRegulationInfo: string;
  activeIngredients: string;
  fullComposition: string;
  applicationArea: string;
  marketingInfo: string;
  registrationNumber: string;
  registrationYear: number;
  registrationName: string;
}

const mockTableData: MockTableData[] = [
  {
    key: "1",
    name: "Витамин Д",
    form: "Таблетка",
    categoryName: "Женское",
    packaging: "Банка",
    quantity: 60,
    registrationNumber: "12345",
    registrationYear: 2021,
    registrationName: "Витамин Д3",
    technicalRegulationInfo: "Соответствует ТР ТС 123/2014",
    activeIngredients: "Холекальциферол",
    fullComposition: "Холекальциферол, наполнитель, стабилизатор",
    applicationArea: "Укрепление костей и иммунитета",
    marketingInfo: "Подходит для ежедневного применения",
  },
  {
    key: "2",
    name: "Витамин Д",
    form: "Таблетка",
    categoryName: "Женское",
    packaging: "Банка",
    quantity: 60,
    registrationNumber: "67890",
    registrationYear: 2022,
    registrationName: "Витамин Д2",
    technicalRegulationInfo: "Соответствует ТР ТС 123/2014",
    activeIngredients: "Эргокальциферол",
    fullComposition: "Эргокальциферол, наполнитель, стабилизатор",
    applicationArea: "Укрепление костей и иммунитета",
    marketingInfo: "Рекомендуется к применению в зимний период",
  },
  {
    key: "3",
    name: "Витамин Д",
    form: "Таблетка",
    categoryName: "Женское",
    packaging: "Банка",
    quantity: 60,
    registrationNumber: "11223",
    registrationYear: 2020,
    registrationName: "Витамин D",
    technicalRegulationInfo: "Соответствует ТР ТС 123/2014",
    activeIngredients: "Холекальциферол",
    fullComposition: "Холекальциферол, наполнитель, стабилизатор",
    applicationArea: "Поддержка здоровья кожи",
    marketingInfo: "Быстро восполняет дефицит витамина Д",
  },
  {
    key: "4",
    name: "Витамин Д",
    form: "Таблетка",
    categoryName: "Женское",
    packaging: "Банка",
    quantity: 60,
    registrationNumber: "44556",
    registrationYear: 2021,
    registrationName: "Витамин Д3",
    technicalRegulationInfo: "Соответствует ТР ТС 123/2014",
    activeIngredients: "Холекальциферол",
    fullComposition: "Холекальциферол, наполнитель, стабилизатор",
    applicationArea: "Поддержка сердечно-сосудистой системы",
    marketingInfo: "Удобная форма приема",
  },
];

export default mockTableData;
