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