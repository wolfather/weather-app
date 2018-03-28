import { CityService } from './../city/city.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './../loader/loader.module';
import { ServicesModule } from './../services/services.module';
import { WeatherComponent } from './../weather/weather.component';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WheatherService } from './weather.service';

describe('WeatherComponent', () => {
    let fixture: ComponentFixture<WeatherComponent>,
        weatherComponent: WeatherComponent;

    const queryElement = (element: string) => fixture.debugElement.query(By.css(element)).nativeElement;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [WeatherComponent],
        imports: [
            LoaderModule,
            HttpClientModule,
            ServicesModule.forRoot()
        ],
        providers: [
            WheatherService,
            CityService
        ]
      }).compileComponents();
        TestBed.get(WheatherService);
        TestBed.get(CityService);
  
        fixture = TestBed.createComponent(WeatherComponent);
        weatherComponent = fixture.debugElement.componentInstance;
        
        spyOn(weatherComponent, 'onCheckDataHandler').and.callThrough();
  
        fixture.detectChanges();
    }));
    
    
    it('should create the WeatherComponent', async(() => {
        expect(weatherComponent).toBeTruthy();
    }));

    
    it('should exists onCheckDataHandler method and should be called on ngInit', async(() => {
        weatherComponent.ngOnInit();
        
        expect(weatherComponent.onCheckDataHandler).toBeDefined();
        expect(weatherComponent.onCheckDataHandler).toHaveBeenCalled();
    }));
    
    it('should be defined the onSetValuesHandler', async(() => {
        expect(weatherComponent.onSetValuesHandler).toBeDefined();
    }));

    it('should calls the CityService.loadingCitiesResults after ngOnInit calls onCheckDataHandler', async(() => {
        inject([CityService], (injectService: CityService) => {
            weatherComponent.ngOnInit();
            expect(injectService.loadingCitiesResults).toHaveBeenCalled();
        });
    }));

    it('should calls the CityService.getCities after ngOnInit calls onCheckDataHandler', async(() => {
        inject([CityService], (injectService: CityService) => {
            weatherComponent.ngOnInit();
            expect(injectService.getCities).toHaveBeenCalled();
        });
    }));

    it('should have an element .wheather-box', async(() => {
        let weatherBox = queryElement('.weather-box');
        expect(weatherBox).toBeDefined();
    }));
    it('should have an element .weather-box-title', async(() => {
        let weatherBox = queryElement('.weather-box-title');
        expect(weatherBox).toBeDefined();
    }));

    it('should have an element .weather-box-temperature', async(() => {
        let weatherBoxTemperature = queryElement('.weather-box-temperature');
        expect(weatherBoxTemperature).toBeDefined();
    }));

    
  });