import { WheatherModule } from './../weather/weather.module';
import { TopbarComponent } from './topbar.component';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './../weather/weather.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: WeatherComponent,
    pathMatch: 'full'
  },
  {path: '', component: WeatherComponent},
  {path: '**', redirectTo: ''}
];


describe('TopbarComponent', () => {
  let fixture: ComponentFixture<TopbarComponent>,
      topbarComponent: TopbarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WheatherModule,
        RouterModule.forRoot(ROUTES)
      ],
      declarations: [TopbarComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        }
      ]
    }).compileComponents();

      fixture = TestBed.createComponent(TopbarComponent);
      topbarComponent = fixture.debugElement.componentInstance;

      //spyOn(topbarComponent, 'onClickLogoHandler').and.callThrough();

      fixture.detectChanges();
  }));

  it('should create the ProductComponent', async(() => {
    expect(topbarComponent).toBeTruthy();
  }));

  it('should exists the onClickLogoHandler method in component', async(() => {
    expect(topbarComponent.onClickLogoHandler).toBeDefined();
  }));

});
