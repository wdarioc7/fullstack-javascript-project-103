import { describe, expect, it } from 'vitest';
import genDiff from '../src/index.js';

describe('genDiff', () => {
  it('compara dos archivos JSON planos', () => {
    expect(genDiff('file1.json', 'file2.json')).toBe(`{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
  });

  it('compara dos archivos YAML planos', () => {
    expect(genDiff('file1.yml', 'file2.yml')).toBe(`{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
  });

});
