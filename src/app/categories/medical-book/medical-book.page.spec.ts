import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalBookPage } from './medical-book.page';

describe('MedicalBookPage', () => {
  let component: MedicalBookPage;
  let fixture: ComponentFixture<MedicalBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
