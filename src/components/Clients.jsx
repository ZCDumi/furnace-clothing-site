import { CLIENTS } from '../data/clients.js'

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <h2>Happy clients</h2>
      <p>Real people in their Furnace and Cougar pieces.</p>
      <ul className="masonry">
        {CLIENTS.map((c) => (
          <li key={c.image}>
            <img src={c.image} alt={c.alt} width={c.w} height={c.h} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}
