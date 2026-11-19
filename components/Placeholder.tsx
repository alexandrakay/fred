export default function Placeholder({ label = '', dark = false, play = false, style }: { label?: string; dark?: boolean; play?: boolean; style?: React.CSSProperties }) {
  return <div className={'ph' + (dark ? ' dark' : '')} style={style}>{play ? <span className="play">▶</span> : label}</div>;
}
