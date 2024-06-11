// const GetApiData =(url) =>{
//     let response = fetch(url)
//     .than((res) => res.json());
//     return response;
// }
// GetApiData('https://html.creativegigstf.com/homy/homy/index-5.html#').then((data) => {
//     console.log(data);
// })
// function GetApiData(){
//     fetch('http://localhost:3000/agents')
//     .than(response => response.json())
//     .than(agents =>{
//         const agentsDiv =document.getElementById("agents");
//         agents.forEach(element => {
//             const agentDiv=document.createElement ("div");
//             agentDiv.className = "agent";
//             agentDiv.innerHTML = `
//           <img src="assets/images/${agent.image}" alt="${agent.name}" width="100">
//           <h3>${agent.name}</h3>
//           <p>${agent.profession}</p>
//           <span class="${agent.status === 'online' ? 'status-online' : 'status-offline'}">${agent.status}</span>
//           <button onclick="deleteAgent(${agent.id})">Sil</button>
//         `;

//             agentsDiv.appendChild(agentDiv);
            
//         });
//     })
//     .catch (error => console.error("Error:",error));
// }

// function deleteAgent(id){
//     fetch(`http://localhost:3000/agents/${id}`,{
//         metod:'Delete'
//     })
//     .than (() =>location.reload())
//     .catch(error => console.error ("Error:", error))
// }
// GetApiData();

// const GetApiDataByid = async ( url,id) =>{
//     let response = await fetch('${urel}/${id}').then((res) => res.json ());
//     return response;

// }

// GetApiDataByid("https://html.creativegigstf.com/homy/homy/images/agent/img_03.jpg" , 4).then(
//     (data) =>{
//         console.log
//     }
// )

// document.getElementById('create-agent-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const agentData = {
//       name: formData.get('name'),
//       surname: formData.get('surname'),
//       profession: formData.get('profession'),
//       image: formData.get('image'),
//       status: formData.get('status')
//     };

//     fetch('http://localhost:3000/agents', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(agentData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       window.location.href = 'index.html';
//     })
//     .catch(error => console.error('Error:', error));
// //   });

// fetch ('https://html.creativegigstf.com/homy/homy/index-5.html#')
// .than (res => {
//     return res.json();
// })
// .than(data => {
//     data.forEach(user => {
//         const markuo =`<li>${user.name}<`
//     });
// })
function GetApiData() {
    fetch('http://localhost:3000/agents')
      .then(response => response.json())
      .then(agents => {
        const agentsDiv = document.getElementById('agents');
        agentsDiv.innerHTML = ''; 
        agents.forEach(agent => {
          const agentDiv = document.createElement('div');
          agentDiv.className = 'agent';
          agentDiv.innerHTML = `
            <img src="${agent.image}" alt="${agent.name}" width="100">
            <h3>${agent.name}</h3>
            <p>${agent.profession}</p>
            <span class="status ${agent.status === 'online' ? 'status-online' : 'status-offline'}"></span>
            <button onclick="deleteAgent(${agent.id})">Sil</button>
          `;
          agentsDiv.appendChild(agentDiv);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function deleteAgent(id) {
    fetch(`http://localhost:3000/agents/${id}`, {
      method: 'DELETE'
    })
    .then(() => GetApiData())
    .catch(error => console.error('Error:', error));
  }
  
  GetApiData();
  