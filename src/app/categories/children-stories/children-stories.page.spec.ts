import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildrenStoriesPage } from './children-stories.page';

describe('ChildrenStoriesPage', () => {
  let component: ChildrenStoriesPage;
  let fixture: ComponentFixture<ChildrenStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrenStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
