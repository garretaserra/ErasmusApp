import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherProfilePage } from './other-profile.page';

describe('OtherProfilePage', () => {
  let component: OtherProfilePage;
  let fixture: ComponentFixture<OtherProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
