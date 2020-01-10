import { Date } from './Date';
import { Rating } from './Rating';
import { Pegi } from './Pegi';

export class Game
{
    public id:string;
    public title:string;
    public language:string;
    public price:number;
    public price_currency:string;
    public relatedGenre_id:string;
    public releaseDate: Date;
    public developer: string;
    public relatedPlatforms_id: Array<string>
    public publisher: string;
    public rating: Rating;
    public pegi: Pegi;
    public coverArt: string;
    constructor(){
        this.relatedPlatforms_id = new Array<string>(0);
    }
}