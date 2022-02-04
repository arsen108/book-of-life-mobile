import React from "react";
import {Controller} from "react-hook-form";
import {TextInput} from 'react-native-paper';
import styled from "styled-components/native";

function PrimaryInput({name, label, control, errors, errorMessage, marginTop}) {
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, value}}) => (
                    <StyledInputLabel marginTop={marginTop}>
                        <TextInput
                            label={label}
                            value={value}
                            onChangeText={onChange}
                            mode='outlined'
                            outlineColor={"#DCBF8F"}
                            activeOutlineColor={"#DCBF8F"}
                            style={{backgroundColor: 'transparent'}}
                            theme={{
                                colors: {
                                    placeholder: 'white', text: 'white', primary: 'white'
                                }
                            }}
                        />
                        {errors[name] && <StyledInputError>{errorMessage}</StyledInputError>}
                    </StyledInputLabel>
                )}
                name={name}
            />
        </>
    );
}

export default PrimaryInput;

const StyledInputLabel = styled.View`
  position: relative;

  margin-top: ${props => props.marginTop || 0};
`

const StyledInputError = styled.Text`
  position: absolute;
  top: calc(100% + 4px);
  left: 16px;

  color: #ED5959;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`
