import cryptoJS from 'crypto-js';

const cryptoJSSecretKey: string = import.meta.env.VITE_CRYPTO_JS;

export const setItemToLocalStorage = (key: string, data: any): void => {
  const encryptedData = cryptoJS.AES.encrypt(JSON.stringify(data), cryptoJSSecretKey).toString();
  localStorage.setItem(key, encryptedData);
}

export const getItemFromLocalStorage = (key: string): any => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    const bytes = cryptoJS.AES.decrypt(encryptedData, cryptoJSSecretKey);
    const decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
    return decryptedData;
  }
}

export const clearItemFromLocalStorage = (): void => {
  localStorage.clear();
}