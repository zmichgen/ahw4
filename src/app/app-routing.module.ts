import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';

const routes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: 'item', component: ItemInfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
