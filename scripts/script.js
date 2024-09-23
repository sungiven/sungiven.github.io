const activeBtnClasses =
  "text-white-700 hover:text-white border border-white-600 bg-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-neutral-500 dark:bg-neutral-900 dark:focus:ring-neutral-600"

const inactiveBtnClasses =
  "text-neutral-900 border border-white hover:border-neutral-200 dark:border-neutral-900 dark:bg-neutral-800 dark:hover:border-neutral-700 bg-white focus:ring-4 focus:outline-none focus:ring-neutral-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-neutral-400 dark:focus:ring-neutral-600"

const loaderAnim = document.querySelector("#loader")
const emptyDiv = document.querySelector("#empty")

document.addEventListener("DOMContentLoaded", () => {
  loadGallery("adventures")
})

document.querySelector("#adventures-btn").addEventListener("click", () => {
  document.querySelector("#image-gallery").innerHTML = ""
  activateBtn("#adventures-btn")
  loadGallery("adventures")
})

document.querySelector("#notes-btn").addEventListener("click", () => {
  document.querySelector("#image-gallery").innerHTML = ""
  activateBtn("#notes-btn")
  loadGallery("notes")
})

document.querySelector("#articles-btn").addEventListener("click", () => {
  document.querySelector("#image-gallery").innerHTML = ""
  activateBtn("#articles-btn")
  loadGallery("articles")
})

function loadGallery(section) {
  fetch("./images.json")
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.querySelector("#image-gallery")
      const images = data[section].reverse()

      if (images.length === 0) {
        emptyDiv.classList.remove("hidden")
        return
      } else if (!emptyDiv.classList.contains("hidden")) {
        emptyDiv.classList.add("hidden")
      }

      images.forEach((src) => {
        const div = document.createElement("div")
        const img = document.createElement("img")

        div.addEventListener("click", () => {
          window.open(src, "_blank")
        })

        div.className = `flex items-center justify-center h-48 md:h-60 lg:h-72 overflow-hidden rounded-lg cursor-pointer saturate-0`

        img.src = src
        img.alt = ""
        img.className = "h-full w-full object-cover"

        div.appendChild(img)
        gallery.appendChild(div)
      })
    })
    .catch((error) => console.error("Error loading images:", error))

  loaderAnim.classList.add("hidden")
}

function activateBtn(btnId) {
  const allBtns = document.querySelectorAll("button")
  const activeBtn = document.querySelector(btnId)

  for (const btn of allBtns) {
    btn.className = inactiveBtnClasses
  }

  activeBtn.className = activeBtnClasses
}
