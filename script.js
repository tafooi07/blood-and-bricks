/*
Blood & Bricks — Drip Animation Script
Author: Khozaev Abdul
*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const dripCount = 3;
  
  for (let i = 1; i <= dripCount; i++) {
    const drip = document.createElement('div');
    drip.classList.add('drip');
    if (window.innerWidth < 600) {
      const positions = ['left: 8%', 'right: 10%', 'left: 20%'];
      drip.style.cssText = positions[i-1] + '; animation-delay: ' + (i * 2) + 's;';
    }
    body.appendChild(drip);
  }
});