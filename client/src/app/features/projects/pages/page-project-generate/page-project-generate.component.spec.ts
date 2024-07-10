import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGenerateComponent } from './page-project-generate.component';

describe('PageProjectGenerateComponent', () => {
  let component: PageProjectGenerateComponent;
  let fixture: ComponentFixture<PageProjectGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectGenerateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
