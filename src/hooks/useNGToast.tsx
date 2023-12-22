import { toast as hotToast, Toast } from 'react-hot-toast/headless';

type ToastOptions = Partial<Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'>>;

interface ToastParams {
  duration?: number;
}
export default function useNGToast(params?: ToastParams) {
  const { duration = 2500 } = params ?? {};
  const toast = {
    success: (message: string, options?: ToastOptions): string => {
      return hotToast.success(message, { duration, ...options });
    },
    error: (message: string, options?: ToastOptions): string => {
      return hotToast.error(message, { duration, ...options });
    },
  };

  return { toast };
}
