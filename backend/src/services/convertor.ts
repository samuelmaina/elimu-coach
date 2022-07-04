const digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const base10 = digits.slice(0, 10);

function baseConvertor(number: string, fromBase: number, toBase: number) {
  const converted = Number.parseInt(number, fromBase);
  return converted.toString(toBase);
}

function perfectConvertor(number: string, from: number, to: number) {
  rejectIfAnyBaseIsOutOfRanger(from, to);
  var from_digits = digits.slice(0, from);
  var to_digits = digits.slice(0, to);

  var dec_value = number
    .split("")
    .reverse()
    .reduce(function (carry, digit, index) {
      if (from_digits.indexOf(digit) === -1)
        throw new Error("Invalid digit `" + digit + "` for base " + from + ".");
      return (carry += from_digits.indexOf(digit) * Math.pow(from, index));
    }, 0);

  var new_value = "";
  while (dec_value > 0) {
    new_value = to_digits[dec_value % to] + new_value;
    dec_value = (dec_value - (dec_value % to)) / to;
  }
  return new_value || "0";
}

function rejectIfAnyBaseIsOutOfRanger(base1: number, base2: number) {
  const upperLimit = 62;
  if (base1 > upperLimit || base2 > upperLimit) {
    throw new Error(
      "Can only convert number that are lower or equal to  " + upperLimit
    );
  }
}

export { baseConvertor, perfectConvertor };
