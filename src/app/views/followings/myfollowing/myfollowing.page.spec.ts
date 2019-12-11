import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfollowingPage } from './myfollowing.page';

describe('MyfollowingPage', () => {
  let component: MyfollowingPage;
  let fixture: ComponentFixture<MyfollowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfollowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
