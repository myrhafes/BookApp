import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchLiteraturePage } from './french-literature.page';

describe('FrenchLiteraturePage', () => {
  let component: FrenchLiteraturePage;
  let fixture: ComponentFixture<FrenchLiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchLiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
