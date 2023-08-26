import 'client-only';

export function getLocalStorage(key: string) {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : undefined;
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
