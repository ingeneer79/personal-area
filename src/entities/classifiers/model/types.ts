
export interface ClassifierObjectItem {
    key: string;
    value: string;
    description: string;
}
export interface ClassifierObject {
    id: string;
    description?: string;
    items: ClassifierObjectItem[]
}

export interface Brand {
    id: string;
    value: string;
    description: string;
}