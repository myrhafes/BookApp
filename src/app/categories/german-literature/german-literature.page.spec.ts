import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GermanLiteraturePage } from './german-literature.page';

describe('GermanLiteraturePage', () => {
  let component: GermanLiteraturePage;
  let fixture: ComponentFixture<GermanLiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanLiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GermanLiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
