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
            color: Colors.primary1,
          },
          color: Colors.primary1,
          '&.Mui-focused': {
            color: Colors.primary,
          },
        }
      }}
      label={label}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderWidth: "1px", borderColor: Colors.primary1 },
          "&.Mui-focused fieldset": {
            borderColor: Colors.primary,
          },
          "&:hover fieldset": {
            borderColor: Colors.primary,
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