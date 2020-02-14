import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledParagraphComponent } from './titled-paragraph.component';

describe('TitledParagraphComponent', () => {
  let component: TitledParagraphComponent;
  let fixture: ComponentFixture<TitledParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitledParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
