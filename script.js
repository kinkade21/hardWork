let string = "dsadadsaddsadsadasdadasdadasdsadafqwafqwfwfwegrgwwgegwgwegwgwegwegweggssdsdggsgsgdsdggsddgsdgfsed" ;

function checkType (str) {
  if (typeof(str) !== 'string') {
    console.log('Передана не строка');
  } else
    str = str.trim();
    console.log(str.length > 30 ? str.slice(0, 30) + '...' : str); 
}

checkType(string);


