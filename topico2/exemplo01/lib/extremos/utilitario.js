const R = require('ramda');

const reduceMaior = (mAtual, currentValue, currentIndex) => {
    if (currentValue > mAtual.maior) {
        return { maior: currentValue, indiceMaior: currentIndex };
    }
    return mAtual;
};

const reduceMenor = (mAtual, currentValue, currentIndex) => {
    if (currentValue < mAtual.menor) {
        return { menor: currentValue, indiceMenor: currentIndex };
    }
    return mAtual;
};

exports.acharExtremos = function (v) {
    if (v == null || v.length === 0) return {};

    const eMaior = v.reduce(reduceMaior, { maior: v[0], indiceMaior: 0 });
    const eMenor = v.reduce(reduceMenor, { menor: v[0], indiceMenor: 0 });
    return { ...eMaior, ...eMenor };
}