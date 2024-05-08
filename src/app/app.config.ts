import { ApplicationConfig, isDevMode } from "@angular/core";
import { routes } from "./app.routes";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import * as fromCategories from './categories/store/categories.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
        [fromCategories.featureKey]: fromCategories.reducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};