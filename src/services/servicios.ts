import { Injectable } from '@angular/core';
@Injectable()
export class Servicios {
    constructor() { }
    public queVoyqueMancho() {
        console.log("Me han invocado desde un evento load y el metodo esta en el servicio");
    }
}
