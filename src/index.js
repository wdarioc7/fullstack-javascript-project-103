
import fs from 'node:fs';
import path from 'node:path';
import buildDiff from './build-diff.js';
import format from './formatters/index.js';
import parse from './parsers/index.js';

const getFileData = (filepath) => {
    const absolutePath = path.resolve(process.cwd(), filepath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    const extension = path.extname(absolutePath);

    return parse(data, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    const data1 = getFileData(filepath1);
    const data2 = getFileData(filepath2);

    const diff = buildDiff(data1, data2);

    return format(formatName)(diff);
};

export default genDiff;
