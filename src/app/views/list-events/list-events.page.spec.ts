import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListEventsPage } from './list-events.page';

describe('ListEventsPage', () => {
  let component: ListEventsPage;
  let fixture: ComponentFixture<ListEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
