import React from 'react';

export function highlightWords(text: string, startIndex: number, endIndex: number) {
  const words = text.split(' ');

  if (startIndex < 0 || endIndex >= words.length || startIndex > endIndex) {
    return <span>{text}</span>; // Rückgabe des gesamten Textes, wenn die Indizes ungültig sind
  }

  const beforeHighlight = words.slice(0, startIndex).join(' ');
  const highlightedWords = words.slice(startIndex, endIndex + 1).join(' ');
  const afterHighlight = words.slice(endIndex + 1).join(' ');

  return (
    <>
      {beforeHighlight && <span>{beforeHighlight} </span>}
      <span className="text-purple">{highlightedWords}</span>
      {afterHighlight && <span> {afterHighlight}</span>}
    </>
  );
}
