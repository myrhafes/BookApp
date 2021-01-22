import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RomanticNovelsPage } from './romantic-novels.page';

describe('RomanticNovelsPage', () => {
  let component: RomanticNovelsPage;
  let fixture: ComponentFixture<RomanticNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanticNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RomanticNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
