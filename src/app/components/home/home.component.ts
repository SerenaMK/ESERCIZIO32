import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    count: number | undefined;

    constructor(private cardsSrv: CardsService) { }

    ngOnInit(): void {
        this.cardsSrv.likeObservable.subscribe(() => {
            if (this.count == undefined){
                this.count = 0;
            }
            this.count++;

            // this.count = data;
        })
    }

}
