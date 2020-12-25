export function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  const element = document.getElementById(id)
  if (element != null) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
