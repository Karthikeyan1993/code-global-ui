import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PlaylistService {
  readonly BASE_URL = 'http://localhost:5000/api/v1/playlist/';
  constructor(private _http: HttpClient) { }

  getAllSongs = (): any => {
    return this._http.get<any[]>(`${this.BASE_URL}` + 'all');
  }

  searchByArtist = (artist): any => {
    return this._http.get<any[]>(`${this.BASE_URL}` + artist);
  }

  getByRank = (rank)=>{
    return this._http.get<any[]>(`${this.BASE_URL}` + 'find/' + rank);
  }

}