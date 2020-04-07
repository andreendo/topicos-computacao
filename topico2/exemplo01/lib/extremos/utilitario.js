const R = require('ramda');

exports.acharExtremos = function (v) {
    if (v == null) return {};

    if (!v.length) return {};

    const eMaior = v.reduce((mAtual, currentValue, currentIndex) => {
        if (currentValue > mAtual.maior) {
            return { maior: currentValue, indiceMaior: currentIndex };
        }
        return mAtual;
    },
        { maior: v[0], indiceMaior: 0 });

    const eMenor = v.reduce((mAtual, currentValue, currentIndex) => {
        if (currentValue < mAtual.menor) {
            return { menor: currentValue, indiceMenor: currentIndex };
        }
        return mAtual;
    },
        { menor: v[0], indiceMenor: 0 });

    return { ...eMaior, ...eMenor };
}