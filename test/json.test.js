
import { describe, expect, it } from 'vitest';
import json from '../src/formatters/json.js';

describe('json formatter', () => {
    it('returns a JSON representation of the diff tree', () => {
        const diff = [
            {
                name: 'host',
                type: 'changed',
                oldValue: 'localhost',
                newValue: 'example.com',
            },
            {
                name: 'port',
                type: 'added',
                value: 443,
            },
            {
                name: 'timeout',
                type: 'removed',
                value: 30,
            },
        ];

        const result = json(diff);

        expect(JSON.parse(result)).toEqual(diff);
    });

    it('formats the result with indentation', () => {
        const diff = [
            {
                name: 'enabled',
                type: 'added',
                value: true,
            },
        ];

        expect(json(diff)).toBe(JSON.stringify(diff, null, 2));
    });

    it('returns an empty JSON array for an empty diff', () => {
        expect(json([])).toBe('[]');
    });
});
