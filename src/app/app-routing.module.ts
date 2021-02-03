import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'islamic',
    loadChildren: () => import('./categories/islamic/islamic.module').then( m => m.IslamicPageModule)
  },
  {
    path: 'think-and-culture',
    loadChildren: () => import('./categories/think-and-culture/think-and-culture.module').then( m => m.ThinkAndCulturePageModule)
  },
  {
    path: 'human-developement',
    loadChildren: () => import('./categories/human-developement/human-developement.module').then( m => m.HumanDevelopementPageModule)
  },
  {
    path: 'psychology-and-sociology',
    loadChildren: () => import('./categories/psychology-and-sociology/psychology-and-sociology.module').then( m => m.PsychologyAndSociologyPageModule)
  },
  {
    path: 'philosophy',
    loadChildren: () => import('./categories/philosophy/philosophy.module').then( m => m.PhilosophyPageModule)
  },
  {
    path: 'arabic-literature',
    loadChildren: () => import('./categories/arabic-literature/arabic-literature.module').then( m => m.ArabicLiteraturePageModule)
  },
  {
    path: 'english-literature',
    loadChildren: () => import('./categories/english-literature/english-literature.module').then( m => m.EnglishLiteraturePageModule)
  },
  {
    path: 'american-literature',
    loadChildren: () => import('./categories/american-literature/american-literature.module').then( m => m.AmericanLiteraturePageModule)
  },
  {
    path: 'german-literature',
    loadChildren: () => import('./categories/german-literature/german-literature.module').then( m => m.GermanLiteraturePageModule)
  },
  {
    path: 'french-literature',
    loadChildren: () => import('./categories/french-literature/french-literature.module').then( m => m.FrenchLiteraturePageModule)
  },
  {
    path: 'history-book',
    loadChildren: () => import('./categories/history-book/history-book.module').then( m => m.HistoryBookPageModule)
  },
  {
    path: 'medical-book',
    loadChildren: () => import('./categories/medical-book/medical-book.module').then( m => m.MedicalBookPageModule)
  },
  {
    path: 'international-novels',
    loadChildren: () => import('./categories/international-novels/international-novels.module').then( m => m.InternationalNovelsPageModule)
  },
  {
    path: 'arabic-novels',
    loadChildren: () => import('./categories/arabic-novels/arabic-novels.module').then( m => m.ArabicNovelsPageModule)
  },
  {
    path: 'romantic-novels',
    loadChildren: () => import('./categories/romantic-novels/romantic-novels.module').then( m => m.RomanticNovelsPageModule)
  },
  {
    path: 'horror-novels',
    loadChildren: () => import('./categories/horror-novels/horror-novels.module').then( m => m.HorrorNovelsPageModule)
  },
  {
    path: 'pocket-novels',
    loadChildren: () => import('./categories/pocket-novels/pocket-novels.module').then( m => m.PocketNovelsPageModule)
  },
  {
    path: 'children-stories',
    loadChildren: () => import('./categories/children-stories/children-stories.module').then( m => m.ChildrenStoriesPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pdf/pdf.module').then( m => m.PdfPageModule)
  },  {
    path: 'disconnect',
    loadChildren: () => import('./disconnect/disconnect.module').then( m => m.DisconnectPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
