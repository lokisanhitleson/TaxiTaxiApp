import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { SharedService } from '../sharedService/shared.service';
import { Storage } from '@ionic/storage';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    token: string;
    constructor(private sharedService: SharedService, private storage: Storage) {
        this.sharedService.currentAuthTokenCheck.subscribe(async data => {
            console.log(data, "subscribe data")
            this.token = data;
        });
    }
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = this.token;
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}