/** Escapes user input so it can be dropped into a RegExp literal safely. */
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Wraps every occurrence of `query` inside `text` in a <mark>.
 *
 * The query comes straight from a search box, so it must be escaped — an
 * unescaped "(" used to throw and take the page down with it.
 */
const highlightText = (text, query) => {
  const term = (query || '').trim();
  if (!term || typeof text !== 'string') return text;

  const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
};

export default highlightText;
