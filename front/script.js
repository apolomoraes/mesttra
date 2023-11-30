const api = fetch('http://localhost:3000/tarefas');

api.then((response) => {
  console.log(response);
  return response.json();
}).then((datas) => {
  console.log(datas);
  datas.map((data) => {

    tasks.insertAdjacentHTML('beforeend', `<li>
    <p>Tarefa: ${data.text}</p>
    <p>Prazo: ${data.prazo}</p>
    </li>`)

    // const li = document.createElement('li');
    // li.innerText = data.text;
    // tasks.appendChild(li);
  })
})

const tasks = document.querySelector('#tasks');
