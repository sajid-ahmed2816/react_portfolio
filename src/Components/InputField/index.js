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
          color: Colors.secondary,
          '&.Mui-focused': {
            color: Colors.secondary,
          },
        }
      }}
      label={label}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderWidth: "2px", },
          "&.Mui-focused fieldset": {
            borderColor: Colors.secondary,
          },
          "&:hover fieldset": {
            borderColor: Colors.secondary,
          },
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