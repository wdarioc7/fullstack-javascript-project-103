
const stringify = (value, depth) => {
    if (value === null) {
        return 'null';
    }

    if (typeof value !== 'object') {
        return String(value);
    }

    const indent = '    '.repeat(depth + 1);
    const closingIndent = '    '.repeat(depth);

    const lines = Object.entries(value).map(
        ([key, nestedValue]) =>
            `${indent}${key}: ${stringify(nestedValue, depth + 1)}`,
    );

    return `{\n${lines.join('\n')}\n${closingIndent}}`;
};

const formatValue = (key, value, depth) => {
    if (value === '') {
        return `${key}:`;
    }

    return `${key}: ${stringify(value, depth)}`;
};

const formatNode = (node, depth) => {
    const indent = '    '.repeat(depth);
    const signIndent = '    '.repeat(depth - 1) + '  ';

    switch (node.type) {
        case 'nested': {
            const currentIndent = '    '.repeat(depth);

            const children = node.children
                .map((child) => formatNode(child, depth + 1))
                .join('\n');

            return `${currentIndent}${node.name}: {\n${children}\n${currentIndent}}`;
        }

        case 'added':
            return `${signIndent}+ ${formatValue(node.name, node.value, depth)}`;

        case 'removed':
            return `${signIndent}- ${formatValue(node.name, node.value, depth)}`;

        case 'unchanged':
            return `${indent}${formatValue(node.name, node.value, depth)}`;

        case 'changed':
            return `${signIndent}- ${formatValue(node.name, node.oldValue, depth)}\n${signIndent}+ ${formatValue(node.name, node.newValue, depth)}`;

        default:
            throw new Error(`Tipo de diferencia desconocido: ${node.type}`);
    }
};

const stylish = (diff) => {
    const lines = diff.map((node) => formatNode(node, 1));

    return `{\n${lines.join('\n')}\n}`;
};

export default stylish;
