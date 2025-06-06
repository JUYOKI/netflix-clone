const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const input = searchBox.querySelector('input');

searchBtn.addEventListener('click', () => {
  // 아이콘 숨기고 검색창 확장
  searchBtn.style.display = 'none';
  searchBox.classList.remove('instant-close'); // transition 활성화
  searchBox.classList.add('active');
  input.focus();
});

input.addEventListener('blur', () => {
  // transition 없이 즉시 닫기 위한 처리
  searchBox.classList.add('instant-change');
  searchBox.classList.remove('active');
  searchBtn.style.display = 'inline-block';
});

const profileBtn = document.querySelector('.profile-btn');
const arrow = profileBtn.querySelector('.arrow-icon');

// 마우스 올렸을 때 → 회전
profileBtn.addEventListener('mouseenter', () => {
  arrow.classList.add('rotated');
});

// 마우스 벗어났을 때 → 원래대로
profileBtn.addEventListener('mouseleave', () => {
  arrow.classList.remove('rotated');
});


const header = document.querySelector('.header')
window.addEventListener('scroll', function () {
  if (window.scrollY === 0){
    header.classList.remove('instant-change');
    header.style.background = "linear-gradient(0deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%)";
  } else {
    header.classList.add('instant-change');
    header.style.background = "#000000";
  }
});