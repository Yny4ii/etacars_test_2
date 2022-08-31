export const checkInput = (input: string): boolean => {
  if (input.includes(".")) {
    const numbers = input.split(".").pop();
    return numbers?.length ? numbers.length <= 5 : false;
  } else {
    return Number(input) <= 100000000;
  }
};
