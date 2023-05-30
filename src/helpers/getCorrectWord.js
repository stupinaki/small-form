
export function getCorrectWord(number) {
    const words = ["год", "года", "лет"];
    const mod10 = number % 10;

    if (mod10 === 1) {
        return words[0];
    }
    if (mod10 >= 2 && mod10 <= 4 && (number > 20 || number < 10)) {
        return words[1];
    }
    return words[2];
}

