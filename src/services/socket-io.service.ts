import io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { SOCKET } from '../constants/socket-io.constant';
import { getItemFromLocalStorage } from './local-storage.service';
import { LOCAL_STORAGE_SERVICE } from '../constants/local-storage-service.constant';

const socketURL = import.meta.env.VITE_BASE_URL;
let socket = Socket;

export const connectSocket = () => {
  const accessToken = getItemFromLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN);

  socket = io(socketURL, {
    query: {
      token: accessToken
    }
  });

  socket.on(SOCKET.CONNECT, () => {
    console.log('Connected to socket server');
  });
}

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log('Disconnected from socket server');
  }
};

export const sendMessage = (message: string) => {
  if (socket) {
    socket.emit(SOCKET.MESSAGE, message);
  }
};

export const listenForMessages = (callback: (message: any) => void) => {
  if (socket) {
    socket.on(SOCKET.MESSAGE, callback);
  }
};
