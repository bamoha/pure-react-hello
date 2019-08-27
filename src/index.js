import React from 'react';
import ReactDom from 'react-dom';

// Lesson 1

// function HelloWorld(){
//     return (
//         <div> Hello Bash </div>
//     )
// }

// Lesson 2

// function HelloWorld2(){
//     return React.createElement(
//         'div',
//         {},
//         'Hello,',
//         'world'
//     )
// }


// Lesson 3 

function Hello() {
    return (
        <span>Hello</span>
    )
}

function World() {
    return (
        <span>World</span>
    )
}

function HelloWorld() {
    return (
        <div>
            <Hello /> <World />

        </div>
    )
}

ReactDom.render(<HelloWorld />, document.querySelector('#root'))