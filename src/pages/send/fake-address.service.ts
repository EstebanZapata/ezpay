import { Injectable } from '@angular/core';

@Injectable()
export class FakeAddressService {
  private fakeAddress:string;

  constructor() { }

  public setFakeAddress(fakeAddress:string) {
    this.fakeAddress = fakeAddress;
  }

  public getFakeAddress():string {
    return this.fakeAddress;
  }
}
