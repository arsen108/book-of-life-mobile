import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from 'react-native-paper';
import styled from "styled-components/native";

function PrimaryInput({name, label, control, errors, errorMessage}) {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
            <TextInput
                label={label}
                value={value}
                onChangeText={onChange}
                mode='outlined'
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
