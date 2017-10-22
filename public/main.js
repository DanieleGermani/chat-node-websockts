const socket = io.connect('http://localhost:8080', {'forceNew': true});

socket.on('messages', (data)=> {
  console.log(data);
  render(data);
});

function render(data){
  let html = data.map((elem, index)=>{
    return (` <div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
                </div>`);
  }).join(' ');




document.getElementById('mensages').innerHTML = html;
}

function addMessage(event){
  let payload = {
    author: document.getElementById('username').value,
    text: document.getElementById('text').value
  } ;

  socket.emit('new-message',payload);
  return false;

}
