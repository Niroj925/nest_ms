import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as joi from "joi";
import { ClientConfigService } from "./client-config.service";

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            validationSchema:joi.object({
                USER_CLIENT_PORT:joi.number().default(3001),
                BOOKS_CLIENT_PORT:joi.number().default(3002)
            })
        })
    ],
    providers:[ClientConfigService],
    exports:[ClientConfigService]
})
export class ClientConfigModule{};