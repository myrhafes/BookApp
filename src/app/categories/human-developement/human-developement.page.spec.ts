import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumanDevelopementPage } from './human-developement.page';

describe('HumanDevelopementPage', () => {
  let component: HumanDevelopementPage;
  let fixture: ComponentFixture<HumanDevelopementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanDevelopementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumanDevelopementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
