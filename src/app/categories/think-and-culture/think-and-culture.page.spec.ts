import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThinkAndCulturePage } from './think-and-culture.page';

describe('ThinkAndCulturePage', () => {
  let component: ThinkAndCulturePage;
  let fixture: ComponentFixture<ThinkAndCulturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkAndCulturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThinkAndCulturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
