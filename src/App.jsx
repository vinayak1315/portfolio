import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { EditorProvider, useEditor } from './context/EditorContext'
import { INITIAL_SECTIONS } from './data/initialSections'
import { EditorBar } from './components/editor/EditorBar'
import { SortableBlock } from './components/editor/SortableBlock'
import { CaseStudyBlock } from './components/editor/CaseStudyBlock'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import './App.css'

// ─── Edit page ────────────────────────────────────────────────────────────────
function EditPage() {
  const { sections, updateSection, updateImage, duplicateSection, deleteSection, reorderSections } = useEditor()

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))

  function handleDragEnd({ active, over }) {
    if (over && active.id !== over.id) reorderSections(active.id, over.id)
  }

  return (
    <>
      <EditorBar />
      <div style={{ paddingTop: '52px' }}>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
            {sections.map((section, i) => (
              <SortableBlock
                key={section.id}
                id={section.id}
                isEditMode
                onDuplicate={duplicateSection}
                onDelete={deleteSection}
              >
                <CaseStudyBlock
                  section={section}
                  isEditMode
                  onUpdate={updateSection}
                  onImageChange={updateImage}
                  prevId={i > 0 ? sections[i - 1].id : null}
                  nextId={i < sections.length - 1 ? sections[i + 1].id : null}
                />
              </SortableBlock>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </>
  )
}

// ─── Published page ───────────────────────────────────────────────────────────
function PublishedPage() {
  let sections
  try {
    const raw = localStorage.getItem('published_sections')
    sections = raw ? JSON.parse(raw) : INITIAL_SECTIONS
  } catch {
    sections = INITIAL_SECTIONS
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      {sections.map((section, i) => (
        <CaseStudyBlock
          key={section.id}
          section={section}
          isEditMode={false}
          onUpdate={() => {}}
          onImageChange={() => {}}
          prevId={i > 0 ? sections[i - 1].id : null}
          nextId={i < sections.length - 1 ? sections[i + 1].id : null}
        />
      ))}
    </>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit" element={<EditorProvider><EditPage /></EditorProvider>} />
        <Route path="/" element={<PublishedPage />} />
      </Routes>
    </BrowserRouter>
  )
}
