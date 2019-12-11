import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypostsPage } from './myposts.page';

describe('MypostsPage', () => {
  let component: MypostsPage;
  let fixture: ComponentFixture<MypostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
