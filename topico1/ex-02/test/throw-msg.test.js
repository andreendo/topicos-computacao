function foo() {
    throw 'yes, some message thrown';
}

test('bug checking exception message', () => {
    expect(() => {
        foo();
    }).toThrow('some message'); 
    
    // toThrow checa somente se a string passada eh SUBSTRING da msg da exceção
});