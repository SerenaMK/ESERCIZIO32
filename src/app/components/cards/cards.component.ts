import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/models/cards.interface';
import { CardsService } from 'src/app/service/cards.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

    sub!: Subscription;
    cards: Cards[] | undefined;

    constructor(private http: HttpClient, private cardsSrv: CardsService) { }

    ngOnInit(): void {
        this.recuperaCards();
    }

    recuperaCards() {
        this.sub = this.cardsSrv.get().subscribe((res) => {
            console.log(res);
            this.cards = res;
        });
    }

    cancellaCard(id: number) {
        this.sub = this.cardsSrv.delete(id).subscribe(() => {
            this.cards = this.cards?.filter((card) => card.id != id);
            console.log(`Utente ${id} cancellato.`);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    miPiace() {
        this.cardsSrv.likeSubject.next(null)
        // this.cardsSrv.like();
    }
}
