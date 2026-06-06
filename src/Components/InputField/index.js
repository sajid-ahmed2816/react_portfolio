import { TextField } from "@mui/material";
import Colors from "../../assets/style";

function InputField({
  type,
  label,
  fullWidth,
  error,
  helperText,
  register,
  multiline,
  rows,
}) {
  return (
    <TextField
      fullWidth={fullWidth}
      type={type}
      InputLabelProps={{
        sx: {
          ":hover": {
            color: Colors.primary2,
          },
          color: Colors.primary2,
          '&.Mui-focused': {
            color: Colors.primary2,
          },
        }
      }}
      label={label}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderWidth: "1px", borderColor: Colors.primary2 },
          "&.Mui-focused fieldset": {
            borderColor: Colors.primary2,
          },
          "&:hover fieldset": {
            borderColor: Colors.primary2,
          },
        },
        "& .MuiInputBase-input": {
          color: Colors.white, // or '#fff'
        },
      }}
      error={error}
      helperText={helperText}
      {...register}
      multiline={multiline}
      rows={rows}
    />
  )
}

export default InputField