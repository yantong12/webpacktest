import _ from 'lodash'

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button')
  
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
//   }
  
//   document.body.appendChild(component());

if ('serviceWorker' in navigator) {
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('sw registered:', registration)
    }).catch(registrationError => {
      console.log('sw failed:', registrationError)
    })
  })
}
