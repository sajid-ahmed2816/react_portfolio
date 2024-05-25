import { Button, CircularProgress } from "@mui/material";
import Colors from '../../assets/style';

export const PrimaryButton = ({
  type,
  fullWidth,
  title,
  loading,
  onClick,
  disabled
}) => {
  return (
    <Button
      disabled={disabled}
      variant='contained'
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
      sx={{
        ":hover": {
          backgroundColor: Colors.primary,
          boxShadow: `0px 0px 5px 2px ${Colors.secondary}`
        }
      }}
    >
      {loading
        ? <CircularProgress
          sx={{
            color: Colors.secondary,
            width: "26px !important",
            height: "26px !important",
          }}
        />
        : title}
    </Button>
  )
}

export const SecondaryButton = ({
  fullWidth,
  title,
  onClick
}) => {
  return (
    <Button
      variant='outlined'
      fullWidth={fullWidth}
      sx={{
        borderColor: Colors.secondary,
        color: Colors.secondary,
        ":hover": {
          background: Colors.primaryGradient,
          boxShadow: `0px 0px 5px 2px ${Colors.secondary}`
        }
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}