import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableBlock({ id, isEditMode, onDuplicate, onDelete, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const wrapStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.45 : 1,
    position: 'relative',
  }

  return (
    <div ref={setNodeRef} style={wrapStyle}>
      {isEditMode && (
        <div
          style={{
            display: 'flex', gap: '8px', justifyContent: 'flex-end',
            maxWidth: '1100px', margin: '0 auto 8px',
          }}
        >
          <button
            {...attributes}
            {...listeners}
            style={btnStyle('#6b7280')}
            title="Drag to reorder"
          >
            ⠿ Drag
          </button>
          <button onClick={() => onDuplicate(id)} style={btnStyle('#2563eb')}>
            Duplicate
          </button>
          <button onClick={() => onDelete(id)} style={btnStyle('#dc2626')}>
            Delete
          </button>
        </div>
      )}
      {children}
    </div>
  )
}

function btnStyle(bg) {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '6px 14px',
    fontSize: '12px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    cursor: 'pointer',
  }
}
