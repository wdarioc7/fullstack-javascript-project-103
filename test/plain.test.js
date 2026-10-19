
import { describe, expect, it } from 'vitest';
import plain from '../src/formatters/plain.js';

describe('plain formatter', () => {
    it('formats added, removed, changed and unchanged properties', () => {
        const diff = [
            { name: 'host', type: 'unchanged', value: 'codica.io' },
            { name: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
            { name: 'verbose', type: 'added', value: true },
            { name: 'proxy', type: 'removed', value: '127.0.0.1' },
        ];

        expect(plain(diff)).toBe([
            "Property 'timeout' was updated. From 50 to 20",
            "Property 'verbose' was added with value: true",
            "Property 'proxy' was removed",
        ].join('\n'));
    });

    it('formats nested paths and complex values', () => {
        const diff = [
            {
                name: 'common',
                type: 'nested',
                children: [
                    { name: 'follow', type: 'added', value: false },
                    { name: 'setting5', type: 'added', value: { key: 'value' } },
                    {
                        name: 'setting6',
                        type: 'nested',
                        children: [
                            {
                                name: 'wow',
                                type: 'changed',
                                oldValue: '',
                                newValue: 'so much',
                            },
                        ],
                    },
                ],
            },
        ];

        expect(plain(diff)).toBe([
            "Property 'common.follow' was added with value: false",
            "Property 'common.setting5' was added with value: [complex value]",
            "Property 'common.setting6.wow' was updated. From '' to 'so much'",
        ].join('\n'));
    });

    it('returns an empty string when there are no changes', () => {
        expect(plain([
            { name: 'host', type: 'unchanged', value: 'codica.io' },
        ])).toBe('');
    });
});
