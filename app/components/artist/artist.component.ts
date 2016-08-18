import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist, Album } from '../../models/artist';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [SpotifyService]

})

export class ArtistComponent implements OnInit {

    id: string;
    artist: Artist[];
    albums: Album[];


    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() { 
        console.log('ngOnInit - Called');
        console.log(JSON.stringify(this._route.params));
        this._route.params
            .map(params => params['id'])
            .subscribe((id)=> {
                this._spotifyService.getArtist(id)
                    .subscribe(artist=> {
                        this.artist = artist;
                        console.log(JSON.stringify(this.artist));
                    })

                 this._spotifyService.getAlbum(id)
                    .subscribe(albums=> {
                        this.albums = albums.items;
                    })
            });
    }

}