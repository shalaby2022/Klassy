import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
import "./styles.scss";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Submit = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(Submit)} noValidate className="col-12 p-3">
        {/* <div className="col-10 mx-auto"> */}
        <h2 className="text-primary">Klassy</h2>
        {/* </div> */}
        <h3 className="text-center fw-bolder text-info">Welcome to Klassy</h3>
        <div className="col-12 mb-4 mx-auto">
          <h6 className="py-2">Email</h6>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="col-12"
            {...register("Email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.Email && errors.Email.type === "required" && (
            <p className="text-danger my-1">Email Is required</p>
          )}
          {errors.Email && errors.Email.type === "pattern" && (
            <p className="text-danger my-1">Please Enter a valid Email</p>
          )}
        </div>
        <div className="col-12 mb-4 mx-auto">
          <h6 className="py-2">Password</h6>
          <FormControl className="col-12" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              {...register("password", {
                required: true,
                minLength: 10,
                maxLength: 20,
              })}
            />
          </FormControl>
          {errors.password && errors.password.type === "required" && (
            <p className="text-danger my-1">Password Is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-danger my-1">Min length is 10</p>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <p className="text-danger my-1">Max length is 20</p>
          )}
        </div>
        <div className="mt-5">
          <button className="btn btn-primary col-12 mx-auto d-inline-block py-2 fw-bold">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
