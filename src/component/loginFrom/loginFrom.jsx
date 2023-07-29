import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

//Components
import { Button, TextField, Typography } from "@mui/material";

//Constants
import { emailRegex, EMAIL, WELCOME, ROUTES } from "../../utils/constants";

//Styles
import styles from "./utils/styles";

const LoginFrom = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //Helpers
  const navigation = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigation(`${ROUTES.HOME}`);
  };
  return (
    <div id="loginFrom">
      <form style={styles.from} onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={styles.title} variant="h5">
          {WELCOME}
        </Typography>
        <Controller
          name={EMAIL}
          id={EMAIL}
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              placeholder="Email"
              variant="standard"
              error={errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          id="password"
          control={control}
          rules={{
            required: "required",
            maxLength: { value: 10, message: "password should be lessthan 10" },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              type="password"
              placeholder="Password"
              variant="standard"
              error={errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button sx={styles.button} variant="contained" type="submit">
          Login
        </Button>
        <Typography variant="caption">
          New to Shop? <Link to={`signup`}>Create an account.</Link>
        </Typography>
      </form>
    </div>
  );
};

export default LoginFrom;
