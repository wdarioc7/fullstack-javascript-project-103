import { describe, expect, it } from 'vitest';
import parse from '../src/parsers/index.js';

describe('parse', () => {
    it('lanza un error cuando la extensión no está soportada', () => {
        expect(() => parse('contenido', '.txt')).toThrow(
            'Unsupported file format: .txt',
        );
    });
});
