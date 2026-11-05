import { CAPS, MORE_CAPS } from '../data/looks.js'

export default function Caps() {
  const [lead, ...rest] = CAPS
  return (
    <section className="caps" id="caps">
      <div className="caps-top">
        <img className="caps-lead" src={lead.image} alt={lead.alt} width={lead.w} height={lead.h} loading="lazy" />
        <div className="caps-copy">
          <h2>Caps</h2>
          <p>
            Caps and bucket hats from Furnace and Cougar. The teal cap has the flame and
            the Furnace name in silver thread, with light stripes along the brim.
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
      <div className="caps-more">
        {MORE_CAPS.map((m) => (
          <figure key={m.image}>
            <img src={m.image} alt={m.alt} width={m.w} height={m.h} loading="lazy" />
            <figcaption>
              <strong>{m.title}</strong>
              <span>{m.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
