import van from "vanjs-core"

const {a, div, li, p, ul, h5, h6, span} = van.tags
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
  return Card("Card title", "Card subtitle", "Card text");
}

const Card = (title: string, subtitle: string, text: string) => {
  return div({class: "card"},
    div({class: "card-body"},
      h5({class: "card-title"}, span(title)),
      h6({class: "card-subtitle text-muted"}, span(subtitle)),
      p({class: "card-text"}, span(text))
    )
  )
}

van.add(document.body, SinglePageApplication())
// Alternatively, you can write:
// document.body.appendChild(Hello())
