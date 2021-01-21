import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslamicPage } from './islamic.page';

describe('IslamicPage', () => {
  let component: IslamicPage;
  let fixture: ComponentFixture<IslamicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslamicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslamicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
