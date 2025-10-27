import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');

  const fetchCode = async () => {
    try {
      const res = await fetch(`/api/fetch?url=${encodeURIComponent(url)}`);
      const text = await res.text();
      setCode(text);
    } catch (err) {
      setCode('Error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Web Source Viewer</h1>
      <input 
        type="text" 
        placeholder="Masukkan URL" 
        value={url} 
        onChange={e => setUrl(e.target.value)} 
        style={{ width: '300px' }}
      />
      <button onClick={fetchCode}>Lihat Kodingan</button>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#eee', padding: 10 }}>{code}</pre>
    </div>
  );
  }
