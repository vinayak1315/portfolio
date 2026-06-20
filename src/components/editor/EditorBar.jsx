import { useEditor } from '../../context/EditorContext'

const btn = (bg, color = '#fff') => ({
  background: bg, color, border: 'none', borderRadius: '8px',
  padding: '8px 18px', fontSize: '13px', fontWeight: 700,
  cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
})

export function EditorBar() {
  const { publish, addSection } = useEditor()

  return (
    <div
      style={{
        position: 'fixed', top: 0, right: 0, left: 0, zIndex: 9999,
        background: '#003049', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px', fontFamily: 'Poppins, sans-serif',
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
      }}
    >
      <span style={{ fontSize: '13px', fontWeight: 500, opacity: 0.8 }}>
        Edit Mode — click any text to edit · drag to reorder · hover images to replace
      </span>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={addSection} style={btn('#334155')}>
          + Add Section
        </button>
        <a href="/" style={{ fontSize: '13px', color: '#95BBEA', textDecoration: 'none', fontWeight: 500 }}>
          View Published →
        </a>
        <button onClick={publish} style={btn('#95BBEA', '#003049')}>
          Publish
        </button>
      </div>
    </div>
  )
}
