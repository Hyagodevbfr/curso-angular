import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PlaceholderDetailComponent } from './components/placeholder-detail/placeholder-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'change-number', component: ChangeNumberComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'list-render', component: ListRenderComponent },
  { path: 'json-placeholder', component: JsonPlaceholderComponent },
  { path: 'json-placeholder/:id', component: PlaceholderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
