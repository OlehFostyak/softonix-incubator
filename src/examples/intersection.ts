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
}

export const intersectionService = new IntersectionService()
