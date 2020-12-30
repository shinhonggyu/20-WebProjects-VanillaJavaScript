const tabs = document.querySelectorAll('.tab-btn');
let boolean = true;

function handleClick() {
  const span = this.querySelector('span');
  const img = this.querySelector('img');
  const p = this.querySelector('p');

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
