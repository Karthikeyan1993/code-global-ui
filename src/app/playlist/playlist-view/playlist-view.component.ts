import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {
  song;
  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this.song = this._router.snapshot.data.song.data;
  }

}