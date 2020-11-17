import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingFeedBackPage } from './booking-feed-back.page';

describe('BookingFeedBackPage', () => {
  let component: BookingFeedBackPage;
  let fixture: ComponentFixture<BookingFeedBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFeedBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFeedBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
