import _ from 'lodash';

const isObject = (value) => (
    _.isPlainObject(value)
);

const buildDiff = (data1, data2) => {
    const keys = _.sortBy([
        ...Object.keys(data1),
        ...Object.keys(data2),
    ].filter((key, index, array) => array.indexOf(key) === index));

    return keys.map((key) => {
        const has1 = Object.hasOwn(data1, key);
        const has2 = Object.hasOwn(data2, key);
        const value1 = data1[key];
        const value2 = data2[key];

        if (has1 && has2 && isObject(value1) && isObject(value2)) {
            return {
                name: key,
                type: 'nested',
                children: buildDiff(value1, value2),
            };
        }

        if (has1 && has2 && _.isEqual(value1, value2)) {
            return {
                name: key,
                type: 'unchanged',
                value: value1,
            };
        }

        if (has1 && has2) {
            return {
                name: key,
                type: 'changed',
                oldValue: value1,
                newValue: value2,
            };
        }

        if (has1) {
            return {
                name: key,
                type: 'removed',
                value: value1,
            };
        }

        return {
            name: key,
            type: 'added',
            value: value2,
        };
    });
};

export default buildDiff;