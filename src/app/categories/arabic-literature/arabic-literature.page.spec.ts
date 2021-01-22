import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArabicLiteraturePage } from './arabic-literature.page';

describe('ArabicLiteraturePage', () => {
  let component: ArabicLiteraturePage;
  let fixture: ComponentFixture<ArabicLiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicLiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArabicLiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
