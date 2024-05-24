

const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  
  // lets find the middle of each section
  // (section, index) => {}
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    
    // how far away ist he section from the visible area of the page
    const distanceToSection = midViewport - midSection
    
    // pick the tags to parallax
    const image = section.querySelector("img")
    const contentTag = section.querySelector("div")
    
    //  weight down this distance
    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2
    
    // for every even sections, rotate the other way
    // is the index visible by to
    // is the indexs remainder zero?
    // the modulor operator 5 % 2 = 1, 4 % 2 = 1
    if (index % 2 == 1) {
      rotation = rotation * -1 
    }
    
    // apply some parallax
    image.style.transform = `rotate(${rotation}deg)`
    
    contentTag.style.top = `${contentDist}px` 
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`
    
    // check the background
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = dataBackground
    }
  })
}

addMovement()

// run addMovement on Scroll
document.addEventListener("scroll", function () {
  addMovement()
})

// run addMovement on Browser Resize
window.addEventListener("resize", function () {
  addMovement()
})