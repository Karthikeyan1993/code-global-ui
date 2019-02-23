import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlaylistService } from '../../playlist.service';
@Component({
  selector: 'app-playlist-view-all',
  templateUrl: './playlist-view-all.component.html',
  styleUrls: ['./playlist-view-all.component.css']
})
export class PlaylistViewAllComponent implements OnInit {
  rowData = [];
  colDefs = [];
  search;
  isFirstSearch = false;
  constructor(private _PlaylistService: PlaylistService) { }

  ngOnInit() {
    this.colDefs = [
      {
        displayName: 'Rank',
        field: 'rank'
      }, {
        displayName: 'Name',
        field: 'name'
      }, {
        displayName: 'Artists',
        field: 'artists'
      }, {
        displayName: 'Danceability',
        field: 'danceability'
      }, {
        displayName: 'Energy',
        field: 'energy'
      }, {
        displayName: 'Key',
        field: 'key'
      }, {
        displayName: 'Loudness',
        field: 'loudness'
      }, {
        displayName: 'Mode',
        field: 'mode'
      }, {
        displayName: 'Speechiness',
        field: 'speechiness'
      }, {
        displayName: 'Acousticness',
        field: 'acousticness'
      }, {
        displayName: 'instrumentalness',
        field: 'instrumentalness'
      }, {
        displayName: 'liveness',
        field: 'liveness'
      }, {
        displayName: 'Valence',
        field: 'valence'
      }, {
        displayName: 'Tempo',
        field: 'tempo'
      }, {
        displayName: 'Duration_ms',
        field: 'duration_ms'
      }, {
        displayName: 'Time_signature',
        field: 'time_signature'
      }
    ]
    this.getMusicData();
  }

  getMusicData = () => {
    this._PlaylistService.getAllSongs().subscribe((res) => {
      this.rowData = res.data;
    });
  }

  searchDataByArtist = () => {
    this._PlaylistService.searchByArtist(this.search).subscribe((res) => {
      this.rowData = res.data;
      this.isFirstSearch = true;
    });
  }

  trackSearch = (e) => {
    if (this.search.length == 0 && this.isFirstSearch) {
      this.getMusicData();
    }
  }


}