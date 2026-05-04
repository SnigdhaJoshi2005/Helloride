function StoreIcon({ type }) {
  if (type === 'apple') {
    return (
      <svg className="store-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.5 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-2-3.6-2-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8 2.3-1.2 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9-.1 0-3-1.1-3-4.1z"
        />
        <path
          fill="currentColor"
          d="M14 5.3c.7-.8 1.2-2 1-3.2-1 .1-2.1.7-2.8 1.5-.6.8-1.2 1.9-1 3 1 .1 2.1-.5 2.8-1.3z"
        />
      </svg>
    )
  }

  return (
    <svg className="store-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00a8ff" d="M3.1 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l9.3-9.6z" />
      <path fill="#00d26a" d="m14.8 9.5-11-6.4c-.2-.1-.5-.2-.7-.2l9.3 9.1z" />
      <path fill="#ffce00" d="m14.8 14.5-2.4-2.5-9.3 9.1c.2 0 .5-.1.7-.2z" />
      <path fill="#ff3d3d" d="m21 10.9-6.2-3.6-2.4 2.7 2.4 2.7 6.2-3.6c.7-.4.7-1.8 0-2.2z" />
    </svg>
  )
}

export default StoreIcon
