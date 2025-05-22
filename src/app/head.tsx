import React from 'react';

export default function Head() {
  const setInitialTheme = `(function() {
    try {
      var mode = localStorage.getItem('theme');
      if (mode !== 'light' && mode !== 'dark') {
        mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', mode);
    } catch (e) {
      console.error('Error setting initial theme', e);
    }
  })();`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
    </>
  );
}
