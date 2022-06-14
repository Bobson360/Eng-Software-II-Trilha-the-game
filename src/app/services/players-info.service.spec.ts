import { TestBed } from '@angular/core/testing';

import { PlayersInfoService } from './players-info.service';

describe('PlayersInfoService', () => {
  let service: PlayersInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get and set player one name', () => {
    service.setPlayerOneName("TESTE");
    const playerOneName = service.getPlayerOneName();
    expect(playerOneName).toBe('TESTE');
  });

  it('should get and set player two name', () => {
    service.setPlayerTwoName("TESTE2");
    const playerTwoName = service.getPlayerTwoName();
    expect(playerTwoName).toBe('TESTE2');
  });

  it('should get and set player one color ', () => {
    service.setPlayerOneColor("#ff0000");
    const playerOneColor = service.getPlayerOneColor();
    expect(playerOneColor).toBe('#ff0000');
  });

  it('should get and set player two color', () => {
    service.setPlayerTwoColor("#000000");
    const playerTwoColor = service.getPlayerTwoColor();
    expect(playerTwoColor).toBe('#000000');
  });

});
