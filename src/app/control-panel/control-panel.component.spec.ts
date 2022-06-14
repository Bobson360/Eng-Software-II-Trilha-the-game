import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponent } from './control-panel.component';

describe('ControlPanelComponent', () => {
  let component: ControlPanelComponent;
  let fixture: ComponentFixture<ControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should play sound', () => {
    spyOn(component.audio, 'play');
    component.playSound();
    expect(component.audio.play).toHaveBeenCalled();
  });

  it('should turn off sound', () => {
    spyOn(component.audio, 'pause');
    component.stopSound();
    expect(component.audio.pause).toHaveBeenCalled();
  });

  it('should toggle sound', () => {
    spyOn(component.audio, 'play');
    spyOn(component.audio, 'pause');
    component.isAudioPlaying = true;
    fixture.detectChanges();
    component.toggleSound();
    expect(component.isAudioPlaying).toBeFalsy();
  });

  it('should toggle sound to off', () => {
    spyOn(component.audio, 'play');
    spyOn(component.audio, 'pause');
    component.isAudioPlaying = false;
    fixture.detectChanges();
    component.toggleSound();
    expect(component.isAudioPlaying).toBeTruthy();
  });
});
