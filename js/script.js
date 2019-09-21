var tempFahr = prompt('Current temperature in Fahrenheit?');
var eventType = prompt('What kind of event is it? formal, semi-formal or casual').toLocaleLowerCase();
var result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ';


if (eventType === 'formal') {
    result += 'a suit';
} else if (eventType === 'semi-formal') {
    result += 'a polo';
} else if (eventType === 'casual') {
    result += 'something comfy'
}
result += ' and ';

if (tempFahr < 54) {
    result += 'a coat';
} else if (tempFahr >= 54 && tempFahr <= 70) {
    result += 'a jacket';
} else if (tempFahr > 70) {
    result += 'no jacket';
}

result += '.';

console.log(result);

alert(result);

alert(result);