export interface UserData {
    id: number
    name?: string
    firstName?: string
    secondName?: string
    lastName: string
    imageUrl: string
    email: string
    attributes: UserDataAttribute[]
  }
  
  export interface UserDataAttribute {
    type: string
    values: UserDataAttributeValue[]
  }
  
  export interface UserDataAttributeValue {
    id: number
    value: string
  }

  export interface UserNameProps {
    session: any
  }
  