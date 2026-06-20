import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { INITIAL_SECTIONS, t } from '../data/initialSections'

const EditorContext = createContext(null)

function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const data = JSON.parse(raw)
    // Detect old format (tagline was a plain string) and discard it
    if (Array.isArray(data) && data[0] && typeof data[0].tagline === 'string') {
      localStorage.removeItem(key)
      return null
    }
    return data
  } catch {
    return null
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch {
    // Quota exceeded — silently skip (base64 images can be large)
  }
}

export function EditorProvider({ children }) {
  const [sections, setSections] = useState(
    () => loadFromStorage('editor_sections') ?? INITIAL_SECTIONS
  )

  useEffect(() => {
    saveToStorage('editor_sections', sections)
  }, [sections])

  const updateSection = useCallback((id, changes) => {
    setSections(prev => prev.map(s => (s.id === id ? { ...s, ...changes } : s)))
  }, [])

  const updateImage = useCallback((id, index, dataUrl) => {
    setSections(prev =>
      prev.map(s => {
        if (s.id !== id) return s
        const images = s.images.map((img, i) => (i === index ? dataUrl : img))
        return { ...s, images }
      })
    )
  }, [])

  const duplicateSection = useCallback((id) => {
    setSections(prev => {
      const idx = prev.findIndex(s => s.id === id)
      if (idx === -1) return prev
      const copy = { ...prev[idx], id: `${id}_copy_${Date.now()}` }
      const next = [...prev]
      next.splice(idx + 1, 0, copy)
      return next
    })
  }, [])

  const deleteSection = useCallback((id) => {
    setSections(prev => prev.filter(s => s.id !== id))
  }, [])

  const reorderSections = useCallback((activeId, overId) => {
    setSections(prev => {
      const oldIdx = prev.findIndex(s => s.id === activeId)
      const newIdx = prev.findIndex(s => s.id === overId)
      return arrayMove(prev, oldIdx, newIdx)
    })
  }, [])

  const addSection = useCallback(() => {
    const blank = {
      id: `section_${Date.now()}`,
      tagline: t('New Section Title', '24px', '500'),
      description: t('Add your description here…', '18px', '400'),
      meta: [
        { label: t('Client', '20px', '500'), value: t('Client Name', '20px', '700') },
        { label: t('Year', '20px', '500'), value: t('2024', '20px', '700') },
        { label: t('Category', '20px', '500'), value: t('Campaign', '20px', '700') },
      ],
      boxTitle: t('Title', '36px', '500'),
      layout: 'single',
      images: [],
      scriptLines: [],
    }
    setSections(prev => [...prev, blank])
  }, [])

  const publish = useCallback(() => {
    saveToStorage('published_sections', sections)
    alert('Published! View your portfolio at localhost:5173/')
  }, [sections])

  return (
    <EditorContext.Provider value={{ sections, updateSection, updateImage, duplicateSection, deleteSection, reorderSections, addSection, publish }}>
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error('useEditor must be used inside EditorProvider')
  return ctx
}
