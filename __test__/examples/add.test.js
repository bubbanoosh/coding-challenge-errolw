const add = (a, b) => a + b;

const generateGreeting = (name = 'Anon') => `Hello ${name}`;

test('Should add two numbers', () => {
    const result = add(2, 6);

    expect(result).toBe(8);
});

test('Name is correct', () => {
    const result = generateGreeting('Errol');
    expect(result).toContain('Errol');
});

test('Should generate with default name', () => {
    const result = generateGreeting();
    expect(result).toContain('Anon');
});