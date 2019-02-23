import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PlaylistResolverService implements Resolve<any> {

  constructor(private _PlaylistService: PlaylistService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this._PlaylistService.getByRank(route.paramMap.get('rank'));
  }

}