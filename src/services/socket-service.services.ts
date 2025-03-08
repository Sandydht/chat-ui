import io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { SOCKET } from '../constants/socket.constants';

const socketURL = 'http://localhost:3000';
let socket = Socket;

export const connectSocket = () => {
  socket = io(socketURL);
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

export const listenForMessages = (callback: (message: string) => void) => {
  if (socket) {
    socket.on(SOCKET.MESSAGE, callback);
  }
};
