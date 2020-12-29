const tabs = document.querySelectorAll('.tab-btn');
let boolean = true;

function handleClick(event) {
  const span = event.currentTarget.querySelector('span');
  const img = event.currentTarget.querySelector('img');
  const p = event.currentTarget.querySelector('p');

  if (boolean) {
    span.style.color = '#4288ea';
    p.style.color = '#4288ea';
    img.src = `images/icon${img.id}_selected.png`;
  } else {
    span.style.color = 'rgb(80, 80, 80)';
    p.style.color = 'rgb(80, 80, 80)';
    img.src = `images/icon${img.id}.png`;
  }
  boolean = !boolean;
}

tabs.forEach((tab) => {
  tab.addEventListener('click', handleClick);
});

// if (
//   event.target.src ==
//   `http://127.0.0.1:5500/delete/images/icon${event.target.id}.png`
// ) {
//   event.target.src = `images/icon${event.target.id}_selected.png`;
// } else {
//   event.target.src = `images/icon${event.target.id}.png`;
// }
