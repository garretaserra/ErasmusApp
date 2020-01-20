import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosErasmusRegisterPage } from './datos-erasmus-register.page';

describe('DatosErasmusRegisterPage', () => {
  let component: DatosErasmusRegisterPage;
  let fixture: ComponentFixture<DatosErasmusRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosErasmusRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosErasmusRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
