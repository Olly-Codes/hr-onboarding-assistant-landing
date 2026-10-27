import './style.css'

document.querySelectorAll('[data-open-chat]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (typeof window.liveChat === 'function') {
      window.liveChat('show')
    }
  })
})