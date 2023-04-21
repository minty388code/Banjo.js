/*
BANJO JS FRAMEWORK
VERSION 1.0
*/

const select = (input) => {
  return document.querySelectorAll(input)
}

const selectAll = (input) => {
  return document.querySelectorAll(input)
}

const app = {
  root: select('[data-b-app]'),
  dirs: [
    {
      name: 'b-data',
      root: selectAll('[data-b-data]')
    },
    {
      name: 'b-model',
      root: selectAll('[data-b-model]')
    },
    {
      name: 'b-bind',
      root: selectAll('[data-b-bind]')
    },
    {
      name: 'b-show',
      root: selectAll('[data-b-show]')
    }
  ]
}

for (let i = 0; i < app.dirs[1].root.length; i++) {
  for (let j = 0; j < app.dirs[2].root.length; j++) {
    if (app.dirs[2].root[j].dataset.bBind == app.dirs[1].root[i].dataset.bModel) {
      // need to add input bindind
      app.dirs[2].root[j].innerText = app.dirs[1].root[i].innerText
    }
  }
}

for (let i = 0; i < app.dirs[3].root.length; i++) {
  if (app.dirs[3].root[i].dataset.bShow == "show") {
    app.dirs[3].root[i].style.visibility = 'visible';
  } else if (app.dirs[3].root[i].dataset.bShow == "hide") {
    app.dirs[3].root[i].style.visibility = 'hidden';
  } else {
    app.dirs[3].root[i].style.visibility = 'visible';
  }
}
