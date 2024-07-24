type AttributeValue = {
  id: number;
  value: string;
};

type Attribute = {
  type: string;
  values: AttributeValue[];
};

export type ProfileConfig = {
  id: number;
  firstName: string;
  secondName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  attributes: Attribute[];
};
