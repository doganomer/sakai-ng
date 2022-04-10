import { HttpClient } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IdentityDto } from '../api/dto/identityDto';

@Injectable()
export class IssuedIdentityService {

    constructor(private http: HttpClient) { }

    getIssuedIdentities() {  
        return this.http.get<any>('assets/demo/data/issuedIdentities.json');
        // .toPromise()
        // .then(res => res.data as IdentityDto[])
        // .then(data => data);
    }
}
