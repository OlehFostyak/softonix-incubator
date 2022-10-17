class IntersectionService {
  detectElementByScroll () {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        console.log('At bottom!')
      } else {
        console.log('Not yet!')
      }
    })
  }

  detectElementByIntersection () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('At bottom!')
        } else {
          console.log('Not yet!')
        }
      })
    }, {})

    observer.observe(document.getElementById('bottom-item') as any)
  }
}

export const intersectionService = new IntersectionService()
