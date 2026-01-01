const highlightText = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");

  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} style={{ background: "#f4d03f", color: "#000" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export default highlightText;