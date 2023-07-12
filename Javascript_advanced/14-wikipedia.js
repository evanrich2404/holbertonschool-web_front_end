function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) callback(JSON.parse(xhr.responseText).query.pages['21721040'].extract);
      else callback('error');
    }
  };
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  xhr.send();
}

queryWikipedia(createElement);
