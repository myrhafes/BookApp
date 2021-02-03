import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisconnectPage } from './disconnect.page';

describe('DisconnectPage', () => {
  let component: DisconnectPage;
  let fixture: ComponentFixture<DisconnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisconnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
