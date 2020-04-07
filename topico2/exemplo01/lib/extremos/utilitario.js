const R = require('ramda');

const reduceMaior = (mAtual, currentValue, currentIndex) => {
    if (currentValue > mAtual.maior)
        return {
            maior: currentValue,
            indiceMaior: currentIndex
        };

    return mAtual;
};

const reduceMenor = (mAtual, currentValue, currentIndex) => {
    if (currentValue < mAtual.menor)
        return {
            menor: currentValue,
            indiceMenor: currentIndex
        };

    return mAtual;
};

exports.acharExtremos = arr => {
    return R.ifElse(
        arr => arr == null || arr.length === 0,
        () => ({}),
        (arr) => ({
            ...arr.reduce(reduceMaior, { maior: arr[0], indiceMaior: 0 }),
            ...arr.reduce(reduceMenor, { menor: arr[0], indiceMenor: 0 })
        })
    )(arr);
}