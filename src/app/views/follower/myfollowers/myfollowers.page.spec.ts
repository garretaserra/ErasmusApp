import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfollowersPage } from './myfollowers.page';

describe('MyfollowersPage', () => {
  let component: MyfollowersPage;
  let fixture: ComponentFixture<MyfollowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfollowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
