import { Address, Company, Post, data } from "src/interface/data.interface";

export class dataDTO implements data{
    posts: Post[];
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
   
    
}