import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosErasmusPage } from './datos-erasmus.page';

describe('DatosErasmusPage', () => {
  let component: DatosErasmusPage;
  let fixture: ComponentFixture<DatosErasmusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosErasmusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosErasmusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
