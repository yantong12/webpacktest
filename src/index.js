import { cube } from './math'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('pre')
  
    element .innerHTML = [
      'Hello webpack |',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return element;
  }
  
  document.body.appendChild(component());
