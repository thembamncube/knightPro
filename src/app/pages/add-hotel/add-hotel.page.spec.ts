import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHotelPage } from './add-hotel.page';

describe('AddHotelPage', () => {
  let component: AddHotelPage;
  let fixture: ComponentFixture<AddHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
