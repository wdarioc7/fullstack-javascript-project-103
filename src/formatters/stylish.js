
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

const formatValue = (key, value, depth) => {
    if (value === '') {
        return `${key}:`;
    }

    return `${key}: ${stringify(value, depth)}`;
};

const formatNode = (node, depth) => {
    const markerIndent = getIndent(depth, 2);
    const normalIndent = getIndent(depth);

    switch (node.type) {
        case 'nested': {
            const children = node.children
                .map((child) => formatNode(child, depth + 1))
                .join('\n');

            return `${normalIndent}${node.name}: {\n${children}\n${normalIndent}}`;
        }

        case 'unchanged':
            return `${normalIndent}${formatValue(node.name, node.value, depth)}`;

        case 'added':
            return `${markerIndent}+ ${formatValue(node.name, node.value, depth)}`;

        case 'removed':
            return `${markerIndent}- ${formatValue(node.name, node.value, depth)}`;

        case 'changed':
            return [
                `${markerIndent}- ${formatValue(node.name, node.oldValue, depth)}`,
                `${markerIndent}+ ${formatValue(node.name, node.newValue, depth)}`,
            ].join('\n');

        default:
            throw new Error(`Tipo de diferencia desconocido: ${node.type}`);
    }
};

const stylish = (diff) => {
    const lines = diff.map((node) => formatNode(node, 1));

    return `{\n${lines.join('\n')}\n}`;
};

export default stylish;
