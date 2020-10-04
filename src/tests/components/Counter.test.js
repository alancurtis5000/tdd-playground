import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../../components/Counter';
import { iteratee } from 'lodash';

describe('Counter', () => {
  afterEach(cleanup);

  it('can render', () => {
    expect(true).toEqual(false);
  });

  it('can increment', () => {
    expect(true).toEqual(false);
  });

  it('can decrement', () => {
    expect(true).toEqual(false);
  });

  it('can reset to 0', () => {
    expect(true).toEqual(false);
  });
});
