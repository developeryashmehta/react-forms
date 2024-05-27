import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../Hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return !isEmail(value) && !isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    return !hasMinLength(value, 6);
  });

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValues.password, 6);

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((previousValue) => ({
  //     ...previousValue,
  //     [identifier]: value,
  //   }));
  //   setEdit((previousEdit) => ({
  //     ...previousEdit,
  //     [identifier]: false,
  //   }));
  // }

  // function handleInputBlur(identifier) {
  //   setEdit((previousEdit) => ({
  //     ...previousEdit,
  //     [identifier]: true,
  //   }));
  // }

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"email"}
          id="email"
          error={emailHasError && <p>Please enter a valid email</p>}
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label={"password"}
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={passwordHasError && <p>Please enter a valid password</p>}
          value={passwordValue}
          required
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
