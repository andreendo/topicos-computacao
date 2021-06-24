class ArrayProcessor {

    validate(arr) {
        if (arr == null)
            throw 'tipo invalido';

        if (arr.length == 0)
            throw 'array vazio';
    }

    process(arr) {
        this.validate(arr);

        this.menor = Number.POSITIVE_INFINITY;
        this.maior = Number.NEGATIVE_INFINITY;

        for (let num of arr) {
            if (num < this.menor)
                this.menor = num;

            if (num > this.maior)
                this.maior = num;
        }
    }
}

module.exports = ArrayProcessor;