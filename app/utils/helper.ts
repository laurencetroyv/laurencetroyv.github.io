export function openResume() {
  window.open("/resume.pdf", "_blank")
}

export function downloadResume() {
  window.open("/resume.pdf", "_blank")
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
