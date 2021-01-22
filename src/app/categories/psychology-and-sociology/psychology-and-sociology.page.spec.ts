import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsychologyAndSociologyPage } from './psychology-and-sociology.page';

describe('PsychologyAndSociologyPage', () => {
  let component: PsychologyAndSociologyPage;
  let fixture: ComponentFixture<PsychologyAndSociologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologyAndSociologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsychologyAndSociologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
