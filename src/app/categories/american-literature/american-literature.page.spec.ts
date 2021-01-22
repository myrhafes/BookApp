import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmericanLiteraturePage } from './american-literature.page';

describe('AmericanLiteraturePage', () => {
  let component: AmericanLiteraturePage;
  let fixture: ComponentFixture<AmericanLiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanLiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmericanLiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
