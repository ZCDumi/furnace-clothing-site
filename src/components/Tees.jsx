import { TEE_GROUPS } from '../data/looks.js'

export default function Tees() {
  return (
    <section className="tees" id="tshirts">
      <h2>T-shirts</h2>
      <p className="section-intro">Embroidered tees and polos, worn by the people who chose them.</p>
      {TEE_GROUPS.map((g) => (
        <div className="tee-group" key={g.title}>
          <h3>{g.title}</h3>
          <ul className="masonry">
            {g.photos.map((p) => (
              <li key={p.image}>
                <img src={p.image} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
