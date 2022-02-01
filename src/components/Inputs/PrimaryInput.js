import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components/native";

function PrimaryInput({name, label, control, errors, errorMessage}) {
  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <StyledInputError>{errorMessage}</StyledInputError>}
    </>
  );
}

export default PrimaryInput;

const StyledTextInput = styled.TextInput``

const StyledInputLabel = styled.Text``

const StyledInputError = styled.Text``
