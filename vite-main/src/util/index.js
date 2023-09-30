// export default function useLoginValid(form) {
//   const emailRegex =
//     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?!.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?]).{8,}$/;
//   // const passwordRegex =
//   //   /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{8,}$/;

//   const emailIsValid = form.email && emailRegex.test(form.email);
//   const passwordIsValid = form.password && passwordRegex.test(form.password);

//   return {
//     email: emailIsValid,
//     password: passwordIsValid,
//   };
// }
