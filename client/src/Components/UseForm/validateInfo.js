export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Please type a username.';
  } else if (values.username.length < 6) {
    errors.username = 'Username must be more than 6 characters.';
  }

  if (!values.email) {
    errors.email = 'Email Required.';
  } else if (
    !/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/i.test(values.email)
  ) {
    errors.email = 'Email address is invalid.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or longer.';
  }

  if (!values.password2) {
    errors.password2 = 'Second password is required.';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match.';
  }

  return errors;
}
