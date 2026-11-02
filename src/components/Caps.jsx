import { CAPS } from '../data/looks.js'

export default function Caps() {
  const [lead, ...rest] = CAPS
  return (
    <section className="caps" id="caps">
      <div className="caps-top">
        <img className="caps-lead" src={lead.image} alt={lead.alt} width={lead.w} height={lead.h} loading="lazy" />
        <div className="caps-copy">
          <h2>Caps</h2>
          <p>
            The Furnace cap comes in teal, with the flame and the Furnace name stitched
            in silver thread and light stripes along the brim.
          </p>
        </div>
      </div>
      <ul className="caps-row">
        {rest.map((c) => (
          <li key={c.image}>
            <img src={c.image} alt={c.alt} width={c.w} height={c.h} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}
