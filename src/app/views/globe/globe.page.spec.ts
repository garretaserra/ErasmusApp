import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobePage } from './globe.page';

describe('GlobePage', () => {
  let component: GlobePage;
  let fixture: ComponentFixture<GlobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
