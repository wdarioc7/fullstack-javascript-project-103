import yaml from 'js-yaml';

const parsers = {
    '.json': JSON.parse,
    '.yml': yaml.load,
    '.yaml': yaml.load,
};

const parse = (content, extension) => {
    const parser = parsers[extension];

    if (!parser) {
        throw new Error(`Unsupported file format: ${extension}`);
    }

    return parser(content);
};

export default parse;