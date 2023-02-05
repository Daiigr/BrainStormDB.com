import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import React from 'react'

export default function Example() {
  return (
    <Latex displayMode={true}>
      {String.raw`\[ \lim_{x \to +\infty} \frac{3x^2 +7x^3}{x^2 +5x^4} = 3.\]`}
    </Latex>
  )
}
