import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

import { ViewMessagePage } from './view-message.page';

describe('ViewMessagePage', () => {
  let component: ViewMessagePage;
  let fixture: ComponentFixture<ViewMessagePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ViewMessagePage],
        imports: [
          IonicModule.forRoot(),
          ViewMessagePageRoutingModule,
          RouterTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(ViewMessagePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
