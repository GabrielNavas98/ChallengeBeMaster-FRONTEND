export default function submitValidations(user) {
  let errors = {};
  if (!user.user_name) {
    errors.user_name = "Username is required";
  }
  if (!user.user_email) {
    errors.user_email = "Email is required";
  }
  if (!user.password) {
    errors.password = "Password is required";
  }
  return errors
}