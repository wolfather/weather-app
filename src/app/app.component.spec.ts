import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { LoaderModule } from './../loader/loader.module';
import { WheatherModule } from './../weather/weather.module';
import { WeatherComponent } from './../weather/weather.component';
import { TopbarModule } from './../topbar/topbar.module';
import { ServicesModule } from './../services/services.module';
import { TopbarComponent } from '../topbar/topbar.component';


const ROUTES: Routes = [
  {
    path: 'home',
    component: WeatherComponent,
    pathMatch: 'full'
  },
  {path: '', component: WeatherComponent},
  {path: '**', redirectTo: ''}
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        TopbarModule,
        WheatherModule,
        LoaderModule,
        RouterModule.forRoot(ROUTES),
        ServicesModule.forRoot()
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
