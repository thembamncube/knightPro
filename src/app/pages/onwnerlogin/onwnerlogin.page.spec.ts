import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnwnerloginPage } from './onwnerlogin.page';

describe('OnwnerloginPage', () => {
  let component: OnwnerloginPage;
  let fixture: ComponentFixture<OnwnerloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnwnerloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnwnerloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
