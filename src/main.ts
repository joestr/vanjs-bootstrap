import van from "vanjs-core"

const {a, div, li, p, ul, h5, span} = van.tags
const counter = van.state(1)

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Hello = () => div(
  p("👋Hello"),
  ul(
    li("🗺️World"),
    li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
  ),
)

const SinglePageApplication = () => {

  return div({class: "card"},
    div({class: "card-body"},
      h5({class: "card-title"}, span("Card title"))
    )
  )
}

van.add(document.body, SinglePageApplication())
// Alternatively, you can write:
// document.body.appendChild(Hello())
