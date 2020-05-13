import { ReversePipe } from './reverse.pipe';
import { Pipe } from '@angular/core';

describe('ReversePipe', () => {
  const pipe = new ReversePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Reverse a string', () => {
    expect(pipe.transform('Hello')).toEqual('olleH');
  });
});
