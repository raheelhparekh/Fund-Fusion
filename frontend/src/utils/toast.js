import { toast } from 'react-toastify';

// Default toast configuration
const defaultConfig = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

// Pre-configured toast functions
export const toastSuccess = (message) => {
  return toast.success(message, {
    ...defaultConfig,
    autoClose: 3000
  });
};

export const toastError = (message) => {
  return toast.error(message, {
    ...defaultConfig,
    autoClose: 5000
  });
};

export const toastInfo = (message) => {
  return toast.info(message, {
    ...defaultConfig
  });
};

export const toastWarning = (message) => {
  return toast.warning(message, {
    ...defaultConfig
  });
};

export const toastSecurityAlert = (message) => {
  return toast.error(message, {
    ...defaultConfig,
    icon: "🔐",
    autoClose: 7000
  });
};
