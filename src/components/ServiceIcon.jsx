const icons = {
  bike: (
    <>
      {/* Wheels */}
      <circle cx="22" cy="62" r="10" />
      <circle cx="66" cy="62" r="10" />
      <path d="M22 62l18-28" />
      <path d="M40 34l26 28" />
      <path d="M40 34l10 28" />
      <path d="M40 34l-8 0" />
      <path d="M32 34l-10 28" />
      <path d="M32 34l4-8" />
      <path d="M34 26l8 0" />
      <path d="M44 34l10-4" />
      <path d="M34 46h16v10H34z" />
    </>
  ),
  car: (
    <>
      <path d="M14 53h60v13H14z" />
      <path d="M24 53l10-17h22l12 17" />
      <path d="M34 36h20" />
      <path d="M43 36v17" />
      <circle cx="28" cy="66" r="7" />
      <circle cx="61" cy="66" r="7" />
      <path d="M18 53l4-8" />
      <path d="M70 53l-4-8" />
    </>
  ),
  food: (
    <>
      <path d="M20 43h48" />
      <path d="M24 43c2-15 12-25 25-25s23 10 25 25" />
      <path d="M17 53h54" />
      <path d="M26 53l6 18h24l6-18" />
      <path d="M36 28c0-5 4-9 9-9" />
      <path d="M48 18c6 1 10 5 12 11" />
    </>
  ),
  parcel: (
    <>
      <path d="M22 30l22-12 22 12-22 12z" />
      <path d="M22 30v28l22 12 22-12V30" />
      <path d="M44 42v28" />
      <path d="M34 24l22 12" />
      <path d="M12 45h18" />
      <path d="M16 56h15" />
    </>
  ),
  travel: (
    <>
      <circle cx="44" cy="44" r="29" />
      <path d="M15 44h58" />
      <path d="M44 15c-8 8-13 17-13 29s5 21 13 29" />
      <path d="M44 15c8 8 13 17 13 29s-5 21-13 29" />
      <path d="M22 29c12 5 32 5 44 0" />
      <path d="M22 59c12-5 32-5 44 0" />
      <path d="M22 74l14-15" />
    </>
  ),
  hotel: (
    <>
      <path d="M17 74V23h30v51" />
      <path d="M47 41h24v33" />
      <path d="M24 33h7" />
      <path d="M37 33h4" />
      <path d="M24 46h7" />
      <path d="M37 46h4" />
      <path d="M24 59h7" />
      <path d="M57 52h7" />
      <path d="M57 64h7" />
      <path d="M35 74V61h11v13" />
      <path d="M13 74h62" />
    </>
  ),
  route: (
    <>
      <path d="M18 68h11c13 0 20-7 20-19v-9c0-12 7-19 20-19h2" />
      <path d="M62 13l10 8-10 8" />
      <circle cx="18" cy="68" r="6" />
      <path d="M30 58l8-8" />
      <path d="M42 38l8-8" />
      <path d="M59 55h13" />
      <path d="M66 48v14" />
    </>
  ),
  money: (
    <>
      <rect x="14" y="26" width="60" height="38" rx="7" />
      <circle cx="44" cy="45" r="10" />
      <path d="M24 36h7" />
      <path d="M57 54h7" />
    </>
  ),
  shield: (
    <>
      <path d="M44 12l28 11v20c0 18-12 29-28 36-16-7-28-18-28-36V23z" />
      <path d="M31 45l9 9 18-21" />
    </>
  ),
  seat: (
    <>
      <path d="M30 15h20c8 0 14 6 14 14v21" />
      <path d="M30 15v35" />
      <path d="M24 48h39c9 0 15 6 15 15v7H20v-9c0-7 5-13 12-13" />
      <path d="M33 70v8" />
      <path d="M66 70v8" />
      <path d="M37 27h14" />
      <path d="M36 38h18" />
    </>
  ),
  gem: (
    <>
      <path d="M19 32l13-15h24l13 15-25 41z" />
      <path d="M19 32h50" />
      <path d="M32 17l12 15 12-15" />
      <path d="M32 32l12 41 12-41" />
      <path d="M44 32v41" />
    </>
  ),
  snowflake: (
    <>
      <circle cx="44" cy="44" r="11" />
      <path d="M44 16v56" />
      <path d="M20 30l48 28" />
      <path d="M68 30L20 58" />
      <path d="M36 23l8 7 8-7" />
      <path d="M36 65l8-7 8 7" />
      <path d="M25 41l11-3 3-11" />
      <path d="M63 47l-11 3-3 11" />
      <path d="M63 41l-11-3-3-11" />
      <path d="M25 47l11 3 3 11" />
    </>
  ),
  timer: (
    <>
      <circle cx="44" cy="48" r="26" />
      <path d="M35 13h18" />
      <path d="M44 22v-9" />
      <path d="M44 48l13-10" />
    </>
  ),
  flame: (
    <>
      <path d="M47 76c14-5 22-16 20-30-2-11-9-19-21-31 1 12-5 18-12 25-8 8-12 16-9 26 2 9 10 14 22 10z" />
      <path d="M43 73c-7-5-8-12-3-20 4-5 8-8 9-15 9 10 13 27-6 35z" />
      <path d="M25 22h13" />
      <path d="M19 33h11" />
    </>
  ),
  gps: (
    <>
      <path d="M44 78s24-24 24-43a24 24 0 0 0-48 0c0 19 24 43 24 43z" />
      <circle cx="44" cy="35" r="8" />
    </>
  ),
  calendar: (
    <>
      <rect x="17" y="20" width="54" height="52" rx="7" />
      <path d="M17 35h54" />
      <path d="M30 13v14" />
      <path d="M58 13v14" />
      <path d="M31 50h8" />
      <path d="M49 50h8" />
    </>
  ),
  lock: (
    <>
      <rect x="20" y="39" width="48" height="35" rx="7" />
      <path d="M31 39V28a13 13 0 0 1 26 0v11" />
      <path d="M44 53v9" />
    </>
  ),
  door: (
    <>
      <path d="M24 77V17h33l9 8v52" />
      <path d="M34 77V28h32" />
      <circle cx="56" cy="53" r="2" />
    </>
  ),
  bolt: (
    <path d="M49 10L22 49h19l-5 29 30-43H46z" />
  ),
  star: (
    <path d="M44 12l9 20 22 2-17 15 5 22-19-12-19 12 5-22-17-15 22-2z" />
  ),
  check: (
    <>
      <circle cx="44" cy="44" r="30" />
      <path d="M29 45l10 10 21-24" />
    </>
  ),
  fare: (
    <>
      <path d="M24 18h40v52H24z" />
      <path d="M32 30h24" />
      <path d="M32 43h24" />
      <path d="M32 56h14" />
    </>
  ),
}

function ServiceIcon({ name }) {
  return (
    <svg className="service-icon-svg" viewBox="0 0 88 88" aria-hidden="true">
      {icons[name] || icons.check}
    </svg>
  )
}

export default ServiceIcon
