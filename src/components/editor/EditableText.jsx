export function EditableText({ value, onChange, className, style, tag: Tag = 'span', isEditMode, multiline = false }) {
  if (!isEditMode) {
    return <Tag className={className} style={style}>{value}</Tag>
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      className={className}
      style={{
        ...style,
        outline: '2px dashed rgba(0,48,73,0.35)',
        borderRadius: '4px',
        cursor: 'text',
        minWidth: '20px',
        display: 'inline-block',
        whiteSpace: multiline ? 'pre-wrap' : undefined,
      }}
      onBlur={e => onChange(multiline ? e.currentTarget.innerText : e.currentTarget.textContent)}
    >
      {value}
    </Tag>
  )
}
