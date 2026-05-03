export default function WaveDivider({ topColor = '#ffffff', bottomColor = '#F7FBFE', flip = false }) {
  const d = flip
    ? 'M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60Z'
    : 'M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z';
  return (
    <div className="wave" style={{ background: topColor }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d={d} fill={bottomColor} />
      </svg>
    </div>
  );
}
