import { ComponentFixture, TestBed } from '@angular/core/testing';

import { album } from './album';

describe('Album', () => {
  let component: album;
  let fixture: ComponentFixture<album>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [album]
    })
    .compileComponents();

    fixture = TestBed.createComponent(album);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
