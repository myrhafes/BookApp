import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternationalNovelsPage } from './international-novels.page';

describe('InternationalNovelsPage', () => {
  let component: InternationalNovelsPage;
  let fixture: ComponentFixture<InternationalNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
