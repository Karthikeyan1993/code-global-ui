import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common//http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistViewAllComponent } from './playlist/playlist-view-all/playlist-view-all.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaylistService } from './playlist.service';
import { NgxDataGridComponent } from './ngx-data-grid/ngx-data-grid.component';
import { TableFilterPipe } from './table-filter.pipe';
import { TableSortPipe } from './table-sort.pipe';
import { PaginatorPipe } from './paginator.pipe';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { Ng7LoadingSpinnerService } from './ng7-loading-spinner.service';
import { Ng7LoadingSpinnerComponent } from './ng7-loading-spinner/ng7-loading-spinner.component';
import { PlaylistResolverService } from './playlist-resolver.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule],
  declarations: [AppComponent, PlaylistComponent, PlaylistViewAllComponent, PlaylistViewComponent, PageNotFoundComponent, NgxDataGridComponent, TableFilterPipe, TableSortPipe, PaginatorPipe, PaginationControlsComponent, Ng7LoadingSpinnerComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true,}]
})
export class AppModule { }
