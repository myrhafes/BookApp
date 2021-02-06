import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhilosophyPage } from './philosophy.page';

describe('PhilosophyPage', () => {
  let component: PhilosophyPage;
  let fixture: ComponentFixture<PhilosophyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilosophyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhilosophyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
