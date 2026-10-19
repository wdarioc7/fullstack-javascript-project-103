
const formatValue = (value) => {
    if (value !== null && typeof value === 'object') {
        return '[complex value]';
    }

    if (typeof value === 'string') {
        return `'${value}'`;
    }

    return String(value);
};

const plain = (diff, parentPath = '') => {
    const lines = diff.flatMap((node) => {
        const propertyPath = parentPath
            ? `${parentPath}.${node.name}`
            : node.name;

        switch (node.type) {
            case 'nested':
                return plain(node.children, propertyPath);

            case 'unchanged':
                return [];

            case 'added':
                return `Property '${propertyPath}' was added with value: ${formatValue(node.value)}`;

            case 'removed':
                return `Property '${propertyPath}' was removed`;

            case 'changed':
                return `Property '${propertyPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;

            default:
                throw new Error(`Unknown diff type: ${node.type}`);
        }
    });

    return lines.join('\n');
};

export default plain;