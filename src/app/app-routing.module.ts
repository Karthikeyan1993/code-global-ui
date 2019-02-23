import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistViewAllComponent } from './playlist/playlist-view-all/playlist-view-all.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaylistResolverService } from './playlist-resolver.service';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'playlist'
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
    children: [
      {
        path: '',
        component: PlaylistViewAllComponent
      }, {
        path: 'view/:rank',
        component: PlaylistViewComponent,
        resolve:{song:PlaylistResolverService}
      }
    ]
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }