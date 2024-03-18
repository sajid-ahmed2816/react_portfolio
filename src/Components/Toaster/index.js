import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colors from '../../assets/style';
import { TaskAlt } from '@mui/icons-material';

export default function ToasterContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={true}
      theme="dark"
      limit={1}
    />
  );
}

export const SuccessToaster = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: true,
    progress: undefined,
    style: {
      background: Colors.primary1,
      color: Colors.white
    },
    progressStyle: {
      background: Colors.white
    },
    icon: <TaskAlt sx={{ color: Colors.white }} />
  });
}