import iziToast from 'izitoast';

export function toast(message: string, type = 'success') {
  iziToast[type]({
    message: message,
    position: 'bottomLeft',
    displayMode: 2,
    closeOnClick: true
  });
}
