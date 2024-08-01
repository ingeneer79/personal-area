export const translateType = (type: string) => {
  switch (type) {
    case "phone":
      return "Телефон";
    case "email":
      return "Почта";
    case "address":
      return "Адрес";
    default:
      return undefined;
  }
};

export default translateType