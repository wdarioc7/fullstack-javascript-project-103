
const INDENT_SIZE = 4;

const getIndent = (depth, offset = 0) => (
    ' '.repeat(depth * INDENT_SIZE - offset)
);

const stringify = (value, depth) => {
    if (value === null) {
        return 'null';
    }

    if (typeof value !== 'object') {
        return String(value);
    }

    const indent = getIndent(depth);
    const childIndent = getIndent(depth + 1);

    const lines = Object.entries(value).map(
        ([key, childValue]) => (
            `${childIndent}${key}: ${stringify(childValue, depth + 1)}`
        ),
    );

    return `{\n${lines.join('\n')}\n${indent}}`;
};

const formatValue = (key, value, depth, preserveEmptySpace) => {
    if (value === '') {
        return preserveEmptySpace ? `${key}: ` : `${key}:`;
    }

    return `${key}: ${stringify(value, depth)}`;
};

const formatNode = (node, depth, preserveEmptySpace) => {
    const markerIndent = getIndent(depth, 2);
    const normalIndent = getIndent(depth);

    switch (node.type) {
        case 'nested': {
            const children = node.children
                .map((child) => formatNode(child, depth + 1, preserveEmptySpace))
                .join('\n');

            return `${normalIndent}${node.name}: {\n${children}\n${normalIndent}}`;
        }

        case 'unchanged':
            return `${normalIndent}${formatValue(node.name, node.value, depth, preserveEmptySpace)}`;

        case 'added':
            return `${markerIndent}+ ${formatValue(node.name, node.value, depth, preserveEmptySpace)}`;

        case 'removed':
            return `${markerIndent}- ${formatValue(node.name, node.value, depth, preserveEmptySpace)}`;

        case 'changed':
            return [
                `${markerIndent}- ${formatValue(node.name, node.oldValue, depth, preserveEmptySpace)}`,
                `${markerIndent}+ ${formatValue(node.name, node.newValue, depth, preserveEmptySpace)}`,
            ].join('\n');

        default:
            throw new Error(`Tipo de diferencia desconocido: ${node.type}`);
    }
};

const stylish = (diff, extension1, extension2) => {
    const yamlExtensions = ['.yml', '.yaml'];

    const preserveEmptySpace = yamlExtensions.includes(extension1)
        || yamlExtensions.includes(extension2);

    const lines = diff.map(
        (node) => formatNode(node, 1, preserveEmptySpace),
    );

    return `{\n${lines.join('\n')}\n}`;
};

export default stylish;
