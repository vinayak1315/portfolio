import { useState, useRef } from 'react'

const FONT_SIZES = ['10px','12px','14px','16px','18px','20px','24px','28px','32px','36px','42px','48px','56px','64px']
const FONT_WEIGHTS = [
  { value: '300', label: 'Light' },
  { value: '400', label: 'Normal' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'SemiBold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'ExtraBold' },
]
const FONT_FAMILIES = [
  { value: 'Poppins, sans-serif',          label: 'Poppins' },
  { value: "'Bestie Seventy', cursive",    label: 'Bestie Seventy' },
  { value: 'Georgia, serif',               label: 'Georgia' },
  { value: 'Arial, sans-serif',            label: 'Arial' },
  { value: "'Courier New', monospace",     label: 'Courier New' },
]

const tbSelect = {
  background: '#334155',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '2px 6px',
  fontSize: '11px',
  cursor: 'pointer',
  height: '24px',
  fontFamily: 'Poppins, sans-serif',
}

// Floating toolbar that appears above editable text — font size, weight, italic toggle
export function StyledEditableText({
  value,
  textStyle = {},
  onChange,
  onStyleChange,
  isEditMode,
  tag: Tag = 'span',
  multiline = false,
  baseStyle = {},
  className,
}) {
  const [active, setActive] = useState(false)
  const containerRef = useRef(null)
  const editRef = useRef(null)

  const computed = {
    fontSize: textStyle.fontSize,
    fontWeight: textStyle.fontWeight,
    fontStyle: textStyle.fontStyle,
    ...(textStyle.fontFamily ? { fontFamily: textStyle.fontFamily } : {}),
  }

  const merged = { ...baseStyle, ...computed }

  if (!isEditMode) {
    return <Tag className={className} style={merged}>{value}</Tag>
  }

  function handleBlur(e) {
    const text = multiline ? e.currentTarget.innerText : e.currentTarget.textContent
    if (text !== value) onChange(text)
    // Keep toolbar open if focus moved to a toolbar control inside the container
    requestAnimationFrame(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setActive(false)
      }
    })
  }

  function applyStyle(changes) {
    onStyleChange({ ...textStyle, ...changes })
    // Return focus to contentEditable after interacting with toolbar
    setTimeout(() => editRef.current?.focus(), 0)
  }

  const Wrapper = multiline ? 'div' : 'span'

  return (
    <Wrapper
      ref={containerRef}
      style={{ position: 'relative', display: multiline ? 'block' : 'inline-block' }}
    >
      {/* Floating toolbar */}
      {active && (
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: 0,
            marginBottom: '4px',
            zIndex: 500,
            background: '#1e293b',
            borderRadius: '8px',
            padding: '5px 8px',
            display: 'inline-flex',
            gap: '4px',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
          }}
        >
          <span style={{ color: '#94a3b8', fontSize: '10px', fontFamily: 'Poppins', marginRight: '2px' }}>Size</span>
          <select
            value={textStyle.fontSize || '16px'}
            onChange={e => applyStyle({ fontSize: e.target.value })}
            style={tbSelect}
          >
            {FONT_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <span style={{ color: '#94a3b8', fontSize: '10px', fontFamily: 'Poppins', marginLeft: '4px' }}>Weight</span>
          <select
            value={String(textStyle.fontWeight || '400')}
            onChange={e => applyStyle({ fontWeight: e.target.value })}
            style={tbSelect}
          >
            {FONT_WEIGHTS.map(w => <option key={w.value} value={w.value}>{w.label}</option>)}
          </select>

          <span style={{ color: '#94a3b8', fontSize: '10px', fontFamily: 'Poppins', marginLeft: '4px' }}>Font</span>
          <select
            value={textStyle.fontFamily || ''}
            onChange={e => applyStyle({ fontFamily: e.target.value })}
            style={{ ...tbSelect, minWidth: '110px' }}
          >
            <option value="">— inherit —</option>
            {FONT_FAMILIES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
          </select>

          {/* Italic toggle — onMouseDown preventDefault keeps contentEditable focused */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={() => applyStyle({ fontStyle: textStyle.fontStyle === 'italic' ? 'normal' : 'italic' })}
            style={{
              background: textStyle.fontStyle === 'italic' ? '#95BBEA' : '#475569',
              color: textStyle.fontStyle === 'italic' ? '#003049' : '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '0 9px',
              height: '24px',
              fontSize: '13px',
              fontStyle: 'italic',
              cursor: 'pointer',
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              marginLeft: '4px',
            }}
          >
            I
          </button>
        </span>
      )}

      {/* Editable content */}
      <Tag
        ref={editRef}
        contentEditable
        suppressContentEditableWarning
        className={className}
        style={{
          ...merged,
          outline: '2px dashed rgba(0,48,73,0.35)',
          borderRadius: '4px',
          cursor: 'text',
          display: multiline ? 'block' : 'inline-block',
          width: multiline ? '100%' : undefined,
          minWidth: '20px',
          whiteSpace: multiline ? 'pre-wrap' : undefined,
          boxSizing: multiline ? 'border-box' : undefined,
        }}
        onFocus={() => setActive(true)}
        onBlur={handleBlur}
      >
        {value}
      </Tag>
    </Wrapper>
  )
}
