import React from 'react';

const Article = ({ article }) => {
  const { title, date, preview, minutesToRead } = article;

  // Function to calculate the emojis based on minutesToRead
  const getEmojis = (minutes) => {
    const emojis = minutes <= 30
      ? '☕️'.repeat(Math.ceil(minutes / 5))
      : '🍱'.repeat(Math.ceil(minutes / 10));
    return emojis + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <div>{getEmojis(minutesToRead)}</div>
    </article>
  );
};

export default Article;
