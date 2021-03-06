import { SET_MESSAGES } from './actionTypes';
import { SET_CURRENT_USER } from './actionTypes';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: { messagesList: messages },
});

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  payload: { currentUser },
});
