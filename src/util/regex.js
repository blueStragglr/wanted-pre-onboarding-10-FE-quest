export const emailCheck = (email) => {
  const reg =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  return reg.test(email);
};

export const passwordCheck = (pwd) => {
  const reg = /^[a-zA-Z0-9]{8,20}$/;
  return reg.test(pwd);
};
