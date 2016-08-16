import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
    searchStr: string;
    searchRes: Artist[];

    constructor(private _spotifyService: SpotifyService) {

    }

    ngOnInit() { }

    searchMusic() {
        console.log(this.searchStr);
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res=> {
                //console.log(res.artists.items);
                this.searchRes = res.artists.items;
            })
    }
}

export class Album {
    id: number;
    name: string;

}

export class Artist {
    id: number;
    name: string;
    genres: any;
    albums: Album[];

}