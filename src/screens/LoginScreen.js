import React, { useContext } from "react";
import { View, Button } from "react-native";
import { useForm } from "react-hook-form";
import { Context as AuthContext } from "../context/AuthContext";
import PrimaryInput from "../components/Inputs/PrimaryInput";

function LoginScreen() {
  const { login } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <View>
      <PrimaryInput
        control={control}
        label={"Email"}
        name={"email"}
        errors={errors}
        errorMessage={"Field is Required"}
      />
      <PrimaryInput
        control={control}
        label={"Password"}
        name={"password"}
        errors={errors}
        errorMessage={"Field is Required"}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default LoginScreen;
