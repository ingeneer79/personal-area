export interface ApiError {
    status: number;
    data: { message: string };
  }

  export interface FilterSelectedValue {
    id: string;
    values: string[] | Date 
  }
  
