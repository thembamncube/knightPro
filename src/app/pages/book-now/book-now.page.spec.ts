import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookNOwPage } from './book-now.page';

describe('BookNOwPage', () => {
  let component: BookNOwPage;
  let fixture: ComponentFixture<BookNOwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNOwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookNOwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
