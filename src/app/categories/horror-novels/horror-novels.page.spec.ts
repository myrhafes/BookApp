import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorrorNovelsPage } from './horror-novels.page';

describe('HorrorNovelsPage', () => {
  let component: HorrorNovelsPage;
  let fixture: ComponentFixture<HorrorNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorrorNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
