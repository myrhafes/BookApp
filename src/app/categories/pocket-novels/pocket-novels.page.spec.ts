import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PocketNovelsPage } from './pocket-novels.page';

describe('PocketNovelsPage', () => {
  let component: PocketNovelsPage;
  let fixture: ComponentFixture<PocketNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocketNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PocketNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
