import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NgrxService {
API_KEY = 'YOUR_API_KEY';
constructor(public  httpclient: HttpClient ) { }
public getValues(){
  return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
}

}
