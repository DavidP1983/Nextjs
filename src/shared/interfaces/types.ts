import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

// аннотация  одного контакта для компонента ContactInfo
export interface IAddressType {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

// аннотация  одного контакта для компонента ContactInfo
export interface IContactType {
    name: string;
    email: string;
    address: IAddressType;
}


// аннотация контактов глпвной страницы для Contacts
export interface IContacts extends Omit<IContactType, "address"> {
    id: string;
}


// аннотация контактов для PostInfo и главонй страницы Posts,Post
export interface IPost {
    id: number;
    title: string;
    body: string;
}


// анатация главной страницы
export interface ISocialsInfo {
    id: number;
    icon: string;
    path: string;
    fa: IconDefinition;
}