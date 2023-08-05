import { TestBed } from '@angular/core/testing';

import { ProductPublicService } from './product-public.service';

describe('ProductPublicService', () => {
  let service: ProductPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
