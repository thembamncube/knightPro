import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnwnersignupPage } from './onwnersignup.page';

describe('OnwnersignupPage', () => {
  let component: OnwnersignupPage;
  let fixture: ComponentFixture<OnwnersignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnwnersignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnwnersignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
