import { TestBed } from '@angular/core/testing';
import { RestApiService } from './rest-api.service';
describe('RestApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(RestApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rest-api.service.spec.js.map