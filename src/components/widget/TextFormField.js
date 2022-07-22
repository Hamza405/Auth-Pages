import { TextField, InputAdornment } from "@material-ui/core";
import { forwardRef } from "react";

const TextFormField = forwardRef((props, ref) => {
  return (
    <TextField
      inputRef={ref}
      id="input-with-icon-textfield"
      type={props.type}
      label={props.lable}
      placeholder={props.placeHolder}
      InputProps={{
        startAdornment: (
          <InputAdornment style={{ color: "#000842" }} position="start">
            {props.icon}
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
});

export default TextFormField;
