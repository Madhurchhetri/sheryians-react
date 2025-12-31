// let h1 = React.createElement('h1',null,'hello i am madhur');
// // console.log(h1);
// let h2 = React.createElement('h2',null,'hello im madhur from h2');

// // let container = document.querySelector('#root');
// // let root = ReactDOM.createRoot(container)
// // root.render(h1);

// let div = React.createElement('div',{id:'parent', class:'elem'},[h1,h2]);

// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);

import box from './app.js'
import circle from './test.js'

function h1(){
 return React.createElement('h1',null,'hello i am madhur')
}

let root = ReactDOM.createRoot(document.querySelector('#root'))

let parent = ()=> React.createElement('div',null,[box(),circle()])

// root.render(h1())

// root.render(box())
// root.render(circle())
root.render(parent())