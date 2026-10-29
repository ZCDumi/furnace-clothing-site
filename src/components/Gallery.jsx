import { PRODUCTS } from '../data/products.js'

export default function Gallery() {
  return (
    <section className="gallery" id="collection">
      <h2>The collection</h2>
      <ul className="grid">
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <figure>
              <div className="tile-img">
                <img
                  src={p.image}
                  alt={`${p.name} in ${p.colour.toLowerCase()}`}
                  loading="lazy"
                  style={p.position ? { objectPosition: p.position } : undefined}
                />
              </div>
              <figcaption>
                <span className="tile-name">{p.name}</span>
                <span className="tile-meta">{p.colour}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
