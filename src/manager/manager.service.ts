import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios, { HttpStatusCode } from 'axios';
import { firstValueFrom } from 'rxjs';
import { DbService } from 'src/db/db.service';
import { data } from 'src/interface/data.interface';
import { dataDTO } from './dto/data.dto';

@Injectable()
export class ManagerService {
  
   

   constructor(private dbService: DbService) {}
  
  // constructor(private readonly httpService: HttpService) {}
    async test(){
        return "hello toon"
    }
    async getUserAPI( ) {
        // const counts = count
        // const myArray = []
        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = await axios.get(url);
        return data.data.map((user: any) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address:{
                street : user.address.street,
                suite: user.address.suite,
                city:user.address.city,
                zipcode: user.address.zipcode,
                geo:{
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng,
                },
           
            }, 
            company: {
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs
            },
        }));
    }
    async getPostAPI(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = await axios.get(url);
        //return data.data;
        return data.data.map((post: any) => ({
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.body,
          }));
    }
    async mapData(){
       try{
            const users = await this.getUserAPI();
            const posts = await this.getPostAPI();
            // console.log("users",users)
            // console.log("--------------------");
            // // console.log("posts",posts)
            // console.log("--------------------");
            const result = users.map((user) =>{
                const map = posts.filter((post) => {
                    // console.log(map)
                    // console.log("u",user.id);
                    // console.log("p",post.post.userId);
                    return user.id === post.userId;
      
                });
                return { ...user, posts: map };
            })
            return result 
           // return await this.dbService.saveData(result);
       }catch(err){
        throw new HttpException(err.message, HttpStatusCode.BadRequest);
       }
    }
    async ceateData(){
        try{
            const m = await this.mapData();
            //   console.log("m",m)
            //  return m.id
          return await this.dbService.saveData(m);
        }catch(err){
            throw new HttpException(err.message, HttpStatusCode.BadRequest);
        }
    }
   
}
