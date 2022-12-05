import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../models/cards.interface';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CardsService {

    likeSubject = new Subject();
    likeObservable = this.likeSubject.asObservable();

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<Cards[]>("https://jsonplaceholder.typicode.com/photos?_page=7&_limit=20").pipe(map(response => response));
    }

    delete(id: number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
    }

    // Appunti:
    // likeObservable.subscribe(() =>)
    // likeSubject.next(count)

    // Altro modo di farlo:
    // likes = 0;
    // like() {
    //     this.likes++;
    //     this.likeSubject.next(this.likes)
    // }
    // e poi richiamo like() in miPiace(), poi in home.component.ts metto il parametro data dopo subscribe e metto this.count = data al posto di this.count++;



}
