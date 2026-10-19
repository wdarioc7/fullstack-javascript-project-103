
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import buildDiff from './build-diff.js';
import getFormatter from './formatters/index.js';
import parse from './parsers/index.js';

const getData = (filepath) => {
    const absolutePath = resolve(process.cwd(), filepath);
    const content = readFileSync(absolutePath, 'utf-8');
    const extension = extname(absolutePath);

    return {
        data: parse(content, extension),
        extension,
    };
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    const file1 = getData(filepath1);
    const file2 = getData(filepath2);

    const diff = buildDiff(file1.data, file2.data);
    const formatter = getFormatter(formatName);

    return formatter(diff, file1.extension, file2.extension);
};

export default genDiff;
