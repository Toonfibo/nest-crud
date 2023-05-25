import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { type } from "os";
import { Address, Company, Post, data } from "src/interface/data.interface";

@Schema({ versionKey: false })
export class  dataScehema implements data{
    @Prop()
    id: number;
    @Prop()
    name: string;
    @Prop()
    username: string;
    @Prop()
    email: string;
     @Prop()
    address:Address ;
    @Prop()
    phone: string;
    @Prop()
    website: string;
    @Prop()
    company:Company;
    @Prop()
    posts: Post[];
   
}
export const dataScehemas = SchemaFactory.createForClass(dataScehema);
