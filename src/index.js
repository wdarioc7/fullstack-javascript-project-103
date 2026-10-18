import _ from 'lodash';
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import parse from './parser.js';

const getData = (filepath) => {
    const absolutePath = resolve(process.cwd(), filepath);
    const content = readFileSync(absolutePath, 'utf-8');

    return parse(content, extname(absolutePath));
};

const getValue = (value) => (
    typeof value === 'string' ? value : String(value)
);

const genDiff = (filepath1, filepath2) => {
    const data1 = getData(filepath1);
    const data2 = getData(filepath2);

    const keys = _.sortBy([
        ...Object.keys(data1),
        ...Object.keys(data2),
    ].filter((key, index, array) => array.indexOf(key) === index));

    const lines = keys.flatMap((key) => {
        const has1 = Object.hasOwn(data1, key);
        const has2 = Object.hasOwn(data2, key);

        if (has1 && has2 && data1[key] === data2[key]) {
            return [`    ${key}: ${getValue(data1[key])}`];
        }

        return [
            ...(has1 ? [`  - ${key}: ${getValue(data1[key])}`] : []),
            ...(has2 ? [`  + ${key}: ${getValue(data2[key])}`] : []),
        ];
    });

    return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
