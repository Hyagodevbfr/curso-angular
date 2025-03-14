import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'change-number', component: ChangeNumberComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'list-render', component: ListRenderComponent },
  { path: 'json-placeholder', component: JsonPlaceholderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
