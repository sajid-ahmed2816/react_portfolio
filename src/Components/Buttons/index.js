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
        color: Colors.white,
        ":hover": {
          backgroundColor: Colors.primary,
          boxShadow: `0px 0px 0px 2px ${Colors.primary2}`
        }
      }}
    >
      {loading
        ? <CircularProgress
          sx={{
            color: Colors.primary2,
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
        borderColor: Colors.primary1,
        color: Colors.primary1,
        ":hover": {
          borderColor: Colors.primary,
          boxShadow: `0px 0px 0px 1px ${Colors.primary2}`
        }
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}