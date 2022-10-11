import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  let social = 0;
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture') && social == 0) {     
          div.className = 'cards-card-image';
          social = 1;   
     }
     else if (div.children.length > 2 && div.querySelector('picture') && social == 1) div.className = 'cards-card-social';

     else div.className = 'cards-card-body';
      
    });
    social = 0;
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
