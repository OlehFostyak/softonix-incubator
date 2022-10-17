interface IMessageOptions {
  message: string
  duration: number
  customClass?: string
  center?: string
}

function showMessage () {
  console.log(message, options)
}

/* OUTPUT showMessage('some message', {
  duration: 5000
})

showMessage({
  message: 'some message',
  duration: 5000
}) */

export {
  showMessage
}
