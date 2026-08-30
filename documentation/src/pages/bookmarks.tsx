import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useBookmarks } from '../hooks/useBookmarks';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Layout title="Bookmarked Pages" description="Your saved Soroban Cookbook pages">
      <main className="container margin-vert--lg">
        <h1>Bookmarked Pages</h1>
        {bookmarks.length === 0 ? (
          <p>No saved bookmarks yet.</p>
        ) : (
          <ul>
            {bookmarks.map((path) => (
              <li key={path} style={{ margin: '0.5rem 0' }}>
                <Link to={path}>{path}</Link>
                <button
                  type="button"
                  style={{ marginLeft: '1rem' }}
                  onClick={() => removeBookmark(path)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  );
}