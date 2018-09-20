import _ from 'lodash'
import Print from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button')
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', '222'], ' ');
    element.onclick = Print.bind(null, 'hello webpack')

    return element;
  }
  
  document.body.appendChild(component());
