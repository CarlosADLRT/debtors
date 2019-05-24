// @flow
import iziToast from 'izitoast';

export function toast(message, type = 'success') {
  iziToast[type]({
    message: message,
    position: 'bottomLeft',
    displayMode: 2,
    closeOnClick: true
  });
}
