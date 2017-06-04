import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CareerHttpService {

  constructor(
    private http: Http
  ) { }
 getCareers() {
    return this.http.get(`http://localhost:3000/career`)
    .map((res:Response) => res.json());
}
}
