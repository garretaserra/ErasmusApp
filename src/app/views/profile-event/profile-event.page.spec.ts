import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEventPage } from './profile-event.page';

describe('ProfileEventPage', () => {
  let component: ProfileEventPage;
  let fixture: ComponentFixture<ProfileEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
