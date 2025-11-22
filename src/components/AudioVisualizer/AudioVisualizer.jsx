const AudioVisualizer = ({ isPlaying }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      {[
        { x: 3, height: 6, delay: 0.1 }, // Левая короткая
        { x: 6.5, height: 10, delay: 0.2 }, // Центральная левая (высокая)
        { x: 10, height: 16, delay: 0.3 }, // Центральная правая (высокая)
        { x: 13.5, height: 10, delay: 0.4 }, // Правая короткая
        { x: 17, height: 6, delay: 0.5 }, // Правая короткая
      ].map(({ x, height, delay }, i) => (
        <rect
          key={i}
          x={x}
          y={12 - height / 2} // Центрируем полоски по вертикали
          width="1.7"
          height={height}
          fill="#1E2EB8"
          rx="" // Округленные углы
        >
          {isPlaying && (
            <>
              <animate
                attributeName="y"
                values={`${12 - height / 2}; ${4}; ${12 - height / 2}`}
                dur={`${0.6 + delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values={`${height}; ${18}; ${height}`}
                dur={`${0.6 + delay}s`}
                repeatCount="indefinite"
              />
            </>
          )}
        </rect>
      ))}
    </svg>
  );
};

export default AudioVisualizer;
