import { Routes } from '@angular/router';
import {BoardComponent} from "./board/board/board.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";

export const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: '**', component: NotFoundComponent }
];
