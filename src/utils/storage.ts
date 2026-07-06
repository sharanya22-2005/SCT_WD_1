// Memory storage fallback for environments where localStorage is blocked (e.g. sandboxed iframes)
const memoryStorage: Record<string, string> = {};

export const safeStorage = {
  getItem(key: string): string | null {
    try {
      return window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (e) {
      console.warn('localStorage is disabled or blocked. Using memory fallback.', e);
      return memoryStorage[key] || null;
    }
  },

  setItem(key: string, value: string): void {
    try {
      if (window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn('localStorage is disabled or blocked. Saving to memory fallback.', e);
      memoryStorage[key] = value;
    }
  },

  removeItem(key: string): void {
    try {
      if (window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn('localStorage is disabled or blocked.', e);
      delete memoryStorage[key];
    }
  }
};
