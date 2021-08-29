import "./style.scss";
import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log("Follow God")