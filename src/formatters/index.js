
import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const formatters = {
    stylish,
    plain,
    json,
};

const getFormatter = (formatName) => {
    const formatter = formatters[formatName];

    if (!formatter) {
        throw new Error(`Unsupported format: ${formatName}`);
    }

    return formatter;
};

export default getFormatter;
