import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectDashboardComponent } from './page-project-dashboard.component';

describe('PageProjectDashboardComponent', () => {
  let component: PageProjectDashboardComponent;
  let fixture: ComponentFixture<PageProjectDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
