export const prefix = '8powers';

export function saveLocalStorage(
  name: string,
  storeState: string | Record<string, any>,
) {
  if (!localStorage) {
    throw new Error('store serialization failed');
  }

  localStorage.setItem(`${prefix}.${name}`, JSON.stringify(storeState));
}

export function loadLocalStorage(name: string) {
  if (!localStorage) {
    throw new Error('store deserialization failed');
  }

  const serializedState = localStorage.getItem(`${prefix}.${name}`);

  if (serializedState === null) {
    return false;
  }

  return JSON.parse(serializedState);
}

export function deleteLocalStorage(name: string) {
  if (!localStorage) {
    throw new Error('store remove failed');
  }

  localStorage.removeItem(`${prefix}.${name}`);
}
