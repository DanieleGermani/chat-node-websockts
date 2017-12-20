/*const socket = io.connect(process.env.PORT || 'http://localhost:8080', { 'forceNew': true });*/
const socket = io.connect();

socket.on('messages', (data)=> {
  console.log(data);
  render(data);
});

function render(data){
  let html = data.map((elem, index)=>{
    return (` <div class="panel-body chat-box-main">
                <div class="chat-box-left">
                <strong>${elem.author}</strong>
                </div>
                <div class="chat-box-name-left">
                <em>${elem.text}</em>
                </div>
                  <hr class="hr-clas" />
                </div>`);
  }).join(' ');




document.getElementById('mensages').innerHTML = html;
document.getElementById("text").value = "";
}

function addMessage(event){
  let payload = {
    author: document.getElementById('username').value,
    text: document.getElementById('text').value
  } ;

  socket.emit('new-message',payload);
  return false;

}
