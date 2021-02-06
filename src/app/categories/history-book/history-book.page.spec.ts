import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryBookPage } from './history-book.page';

describe('HistoryBookPage', () => {
  let component: HistoryBookPage;
  let fixture: ComponentFixture<HistoryBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
