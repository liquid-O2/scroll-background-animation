import React, { useEffect } from "react"

export default function ScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".marker")
    elements.forEach(element => {
      element.addEventListener("sal:in", ({ detail }) => {
        const background = detail.target.getAttribute("data-background")
        document.body.classList.add(background)
      })
      element.addEventListener("sal:out", ({ detail }) => {
        const background = detail.target.getAttribute("data-background")
        document.body.classList.remove(background)
      })
    })
  }, [])
  return null
}
