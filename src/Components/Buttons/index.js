import { Button, CircularProgress } from "@mui/material";
import Colors from '../../assets/style';

export const PrimaryButton = ({
  endIcon,
  type,
  fullWidth,
  title,
  loading,
  onClick,
  disabled,
  sx
}) => {
  return (
    <Button
      variant='contained'
      endIcon={endIcon}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
      sx={{
        boxShadow: "none",
        "::before": {
          content: "''",
          display: "block",
          width: 0,
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          transition: "all 0.3s ease-in-out",
          borderRadius: "4px",
          border: `1px solid ${Colors.primary2}`,
        },
        ":hover": {
          boxShadow: "none",
          background: "transparent",
          color: Colors.primary2,
          "::before": {
            width: "100%",
            background: "transparent",
          },
        },
        ...sx
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
  endIcon,
  fullWidth,
  title,
  onClick,
  sx
}) => {
  return (
    <Button
      variant='outlined'
      endIcon={endIcon}
      fullWidth={fullWidth}
      sx={{
        borderColor: Colors.primary2,
        color: Colors.primary2,
        "::before": {
          content: "''",
          display: "block",
          width: 0,
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          transition: "all 0.3s ease-in-out",
        },
        ":hover": {
          border: `1px solid ${Colors.primary2}`,
          boxShadow: "none",
          background: "transparent",
          color: Colors.black,
          "::before": {
            width: "100%",
            background: Colors.primary2
          }
        },
        ...sx
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}