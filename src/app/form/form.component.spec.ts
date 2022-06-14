import { AppModule } from './../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PlayersInfoService } from './../services/players-info.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let playersInfoServiceSpy: jasmine.SpyObj<PlayersInfoService>;
  let routerObjSpy: jasmine.SpyObj<Router>;
  const serviceSpy = jasmine.createSpyObj('PlayersInfoService', ['setPlayerOneName', 'setPlayerTwoName', 'setPlayerOneColor', 'setPlayerTwoColor', 'resetPlayersInfo']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, AppModule],
      declarations: [ FormComponent ],
      providers:[
          { provide: PlayersInfoService, useValue: serviceSpy },
          { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    playersInfoServiceSpy = TestBed.inject(PlayersInfoService) as jasmine.SpyObj<PlayersInfoService>;
    routerObjSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to game route', () => {
    component.play();
    expect(routerObjSpy.navigate).toHaveBeenCalled();
  });

});
