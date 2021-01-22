import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnglishLiteraturePage } from './english-literature.page';

describe('EnglishLiteraturePage', () => {
  let component: EnglishLiteraturePage;
  let fixture: ComponentFixture<EnglishLiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishLiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishLiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
