
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import buildDiff from './build-diff.js';
import getFormatter from './formatters/index.js';
import parse from './parsers/index.js';

const getData = (filepath) => {
    const absolutePath = resolve(process.cwd(), filepath);
    const content = readFileSync(absolutePath, 'utf-8');

    return parse(content, extname(absolutePath));
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    const data1 = getData(filepath1);
    const data2 = getData(filepath2);

    const diff = buildDiff(data1, data2);
    const formatter = getFormatter(formatName);

    return formatter(diff);
};

export default genDiff;
