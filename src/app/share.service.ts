import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';

@Injectable()
export class ShareService {

private response=new BehaviorSubject<any>('');
CurrentData=this.response.asObservable();

private currentView = new BehaviorSubject<any>('');
currentItem = this.currentView.asObservable();

constructor(private httpc:HttpClient)
{
   
}
public getdata()
{
 
 this.httpc.get('https://jsonplaceholder.typicode.com/users').subscribe(value=>this.response.next(value));  
  
} 
 
currentItemClick(itemDetails){

    this.currentView.next(itemDetails);

}
   
}

