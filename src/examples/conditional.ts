interface IMessageOptions {
  message: string
  duration: number
  customClass?: string
  center?: string
}

function showMessage<T extends string | IMessageOptions> (
  message: T,
  ...options: (T extends string ? [Omit<IMessageOptions, 'message'>] : [])
) {
  console.log(message, options)
}
// showMessage('some message', {
//   duration: 5000
// })

// showMessage({
//   message: 'some message',
//   duration: 5000
// })

export {
  showMessage
}
