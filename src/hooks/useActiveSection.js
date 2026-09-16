import { useEffect, useState } from 'react';

/**
 * Reports which of the given section ids is currently in view, for the header
 * scroll-spy. Returns an empty string when none of them is (e.g. on the hero,
 * or on pages that do not have these sections at all).
 */
export function useActiveSection(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    // Track intersecting ids in a set so leaving one section does not clear a
    // still-visible neighbour.
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // Keep document order so overlapping sections resolve predictably.
        const first = ids.find((id) => visible.has(id));
        setActive(first || '');
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(','), rootMargin]);

  return active;
}

export default useActiveSection;
