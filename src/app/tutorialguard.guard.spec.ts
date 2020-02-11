import { TestBed, async, inject } from '@angular/core/testing';

import { TutorialguardGuard } from './tutorialguard.guard';

describe('TutorialguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialguardGuard]
    });
  });

  it('should ...', inject([TutorialguardGuard], (guard: TutorialguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
