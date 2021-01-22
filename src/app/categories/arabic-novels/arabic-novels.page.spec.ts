import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArabicNovelsPage } from './arabic-novels.page';

describe('ArabicNovelsPage', () => {
  let component: ArabicNovelsPage;
  let fixture: ComponentFixture<ArabicNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArabicNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
