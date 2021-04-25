const socket = io("http://localhost:3000/")

$("#chat").submit(event => {
  event.preventDefault();
  
  const author = $("input[name=username]").val()
  const message = $("input[name=message]").val()

  

  if (author.length && message.length) {
    const messageObject = {
      author: author,
      message: message
    }

    console.log(messageObject)

    socket.emit('sendMessage', messageObject)
  }

})
