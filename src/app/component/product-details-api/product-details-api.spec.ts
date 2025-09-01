import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsApi } from './product-details-api';

describe('ProductDetailsApi', () => {
  let component: ProductDetailsApi;
  let fixture: ComponentFixture<ProductDetailsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
