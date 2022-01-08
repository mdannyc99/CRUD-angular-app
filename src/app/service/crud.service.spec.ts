import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

// Manual imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

/* // Default data
describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/

// New Data
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/employees'
  constructor(private HttpClient: HttpClient) { }
  AddEmployee(employeeData: Employee):Observable<any>{
    return this.HttpClient.post(this.API+"?insert=1", employeeData);
  }
}


