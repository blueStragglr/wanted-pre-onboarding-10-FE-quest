export const isValidId = (id: string): boolean => {
  const idRegex = /^[a-z]{2,10}$/;
  return idRegex.test(id);
};

export const isValidPassword = (password: string): boolean => {
  const overallRegex = /^[A-Za-z0-9!@#$%^&*()_+]{6,}$/;
  const uppercaseRegex = /[A-Z]+/;
  return overallRegex.test(password) && uppercaseRegex.test(password);
};
