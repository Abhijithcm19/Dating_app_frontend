export const validatePassword = (value: string): string | true => {
  if (value.length < 8) {
    return "Password must be at least 8 characters long";
  }
  return true;
};
