import { describe, expect, it } from 'vitest';
import stylish from '../src/formatters/stylish.js';

describe('stylish', () => {
    it('lanza un error para un tipo de diferencia desconocido', () => {
        const diff = [
            {
                name: 'test',
                type: 'unknown',
                value: 'value',
            },
        ];

        expect(() => stylish(diff)).toThrow(
            'Tipo de diferencia desconocido: unknown',
        );
    });
});
