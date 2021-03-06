import { Injectable, InjectionToken, Provider } from "@angular/core";

export const API_URL_TOKEN = new InjectionToken('API_URL');
export const MY_SERVICE = new InjectionToken('MY_SERVICE');

@Injectable()
export class MyService {
    value = 123;
    constructor() {}
}


export const apiURLprovider: Provider = {
    provide: API_URL_TOKEN,
    useValue: 'http://localhost:4000/api/'
 };

 export const myServiceProvider: Provider = {
    provide: MY_SERVICE,
    useClass: MyService
 };