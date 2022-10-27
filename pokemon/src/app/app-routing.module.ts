import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

const routes: Routes = [
  { path: 'search-pokemon', component: SearchPokemonComponent },
  { path: 'item-pokemon/:id', component: ItemPokemonComponent },
  { path: '', redirectTo: '/search-pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
