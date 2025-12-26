import { create } from 'zustand';
import Cookies from 'js-cookie';
import { refreshSession } from '@/features/auth/api/refresh';

interface SessionState {
  timeLeft: number;
  showRefreshModal: boolean;
  tick: () => void;
  resetVisualTimer: () => void;
  handleActualRefresh: () => Promise<void>;
  checkSessionTime: () => void;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  timeLeft: 3600,
  showRefreshModal: false,

  tick: () => {
    const { timeLeft } = get();
    if (timeLeft <= 1) {
      window.location.href = 'http://localhost:8080/login';
      return;
    }
    set({ timeLeft: timeLeft - 1 });
  },

  resetVisualTimer: () => {
    set({ timeLeft: 3600 });
  },

  handleActualRefresh: async () => {
    const result = await refreshSession();
    if (result.success) {
      set({ showRefreshModal: false, timeLeft: 3600 });
    } else {
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = 'http://localhost:8080/login';
    }
  },

  checkSessionTime: () => {
    const loginAt = Cookies.get('login_at');
    if (loginAt) {
      const loginTime = new Date(loginAt).getTime();
      const currentTime = new Date().getTime();
      const diffMs = currentTime - loginTime;

       if (diffMs >= 1000 * 60 * 55) {
        set({ showRefreshModal: true });
      }
    }
  },
}));
