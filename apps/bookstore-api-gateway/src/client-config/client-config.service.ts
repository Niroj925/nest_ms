import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientOptions, Transport } from "@nestjs/microservices";

@Injectable()
export class ClientConfigService{
    constructor(private config:ConfigService){}

    getBooksClientPort():number{
        return this.config.get<number>(' BOOKS_CLIENT_PORT')
    }

    getUserClientPort():number{
        return this.config.get<number>(' USER_CLIENT_PORT')
    }

    booksClientOptions():ClientOptions{
        return{
            transport:Transport.TCP,
            options:{port:this.getBooksClientPort()}
        }
    }

    userClientOptions():ClientOptions{
        return{
            transport:Transport.TCP,
            options:{port:this.getUserClientPort()}
        }
    }
}