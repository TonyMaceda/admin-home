import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { Route } from './shared/enums/route.enum';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: Route.START,
    component: LayoutComponent,
    children: [
      {
        path: Route.EXPENSES,
        loadChildren: () => import('./modules/expenses/expenses.module').then(m => m.ExpensesModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
