import { useRef } from 'react'
import { StyledEditableText } from './StyledEditableText'
import { t } from '../../data/initialSections'
import pin_left from '../../assets/pin_left.svg'
import pin_right from '../../assets/pin_right.svg'
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'

// ─── Utilities ────────────────────────────────────────────────────────────────

function getYouTubeId(url = '') {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([^&?/\s]+)/)
  return m?.[1] || ''
}

function ensureImages(images = [], count) {
  const arr = [...images]
  const fallback = arr[0] || ''
  while (arr.length < count) arr.push(fallback)
  return arr.slice(0, count)
}

export function getLayoutDefaults(newLayout, section) {
  switch (newLayout) {
    case 'video':
      return {
        youtubeUrl: section.youtubeUrl || '',
        watchText: section.watchText || t('Watch the Film', '20px', '600'),
      }
    case 'brief-image':
      return {
        boxDescription: section.boxDescription || t('Add your written brief here...', '16px', '400'),
        images: ensureImages(section.images, 1),
      }
    case 'stacked':
      return {
        image1Height: section.image1Height || 340,
        image2Height: section.image2Height || 280,
        images: ensureImages(section.images, 2),
      }
    case 'stacked-brief':
      return {
        image1Height: section.image1Height || 340,
        image2Height: section.image2Height || 280,
        boxDescription: section.boxDescription || t('Written brief here...', '16px', '400'),
        images: ensureImages(section.images, 2),
      }
    case 'two-col-brief':
      return {
        image2MarginTop: section.image2MarginTop ?? 40,
        boxDescription: section.boxDescription || t('Text below brief title...', '16px', '400'),
        images: ensureImages(section.images, 2),
      }
    case 'two-col':
      return {
        image2MarginTop: section.image2MarginTop ?? 40,
        images: ensureImages(section.images, 2),
      }
    case 'single':
      return { images: ensureImages(section.images, 1) }
    case 'grid-3col':
      return { images: ensureImages(section.images, 9) }
    default:
      return {}
  }
}

const LAYOUT_OPTIONS = [
  { value: 'grid',         label: '① Grid — scenes + script' },
  { value: 'single',       label: '② Single Image' },
  { value: 'video',        label: '③ Video + Watch the Film' },
  { value: 'brief-image',  label: '④ Written Brief + Image' },
  { value: 'stacked',      label: '⑤ Stacked Images (adjustable height)' },
  { value: 'stacked-brief',label: '⑥ Brief + Stacked Images' },
  { value: 'two-col-brief',label: '⑦ Brief Title + Two Column Images' },
  { value: 'two-col',      label: '⑧ Two Column Images' },
  { value: 'grid-3col',   label: '⑨ Grid 3-col — scenes + script' },
]

// ─── Shared sub-components ────────────────────────────────────────────────────

function ImageSlot({ src, index, sectionId, isEditMode, onImageChange, height, onHeightChange, width = '100%', align = 'left', aspectRatio }) {
  const inputRef = useRef(null)

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = evt => onImageChange(sectionId, index, evt.target.result)
    reader.readAsDataURL(file)
  }

  const imgStyle = {
    width,
    height: height ? `${height}px` : 'auto',
    aspectRatio: aspectRatio || undefined,
    objectFit: (height || aspectRatio) ? 'cover' : undefined,
    borderRadius: '8px',
    border: '2px solid rgba(0,48,73,0.2)',
    display: 'block',
    marginLeft: align === 'right' ? 'auto' : undefined,
  }

  return (
    <div style={{ width }}>
      <div style={{ position: 'relative' }}>
        {src ? (
          <img src={src} alt={`Image ${index + 1}`} style={imgStyle} />
        ) : (
          <div style={{ ...imgStyle, background: '#ccdce8', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003049', fontSize: '13px', fontFamily: 'Poppins', fontWeight: 500 }}>
            No image
          </div>
        )}
        {isEditMode && (
          <button
            onClick={() => inputRef.current?.click()}
            style={{
              position: 'absolute', inset: 0, background: 'rgba(0,48,73,0.55)', color: '#fff',
              border: 'none', cursor: 'pointer', borderRadius: '8px', fontSize: '12px',
              fontFamily: 'Poppins', fontWeight: 600, opacity: 0, transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
          >
            Replace image
          </button>
        )}
        <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      </div>
      {isEditMode && onHeightChange && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', padding: '4px 8px', background: 'rgba(0,48,73,0.1)', borderRadius: '6px' }}>
          <span style={{ fontSize: '11px', fontFamily: 'Poppins', fontWeight: 600, color: '#003049' }}>Height:</span>
          <input
            type="number"
            value={height || ''}
            onChange={e => onHeightChange(parseInt(e.target.value) || 200)}
            min={80} max={900}
            style={{ width: '64px', padding: '2px 4px', fontSize: '12px', borderRadius: '4px', border: '1px solid #003049', fontFamily: 'Poppins' }}
          />
          <span style={{ fontSize: '11px', color: '#003049' }}>px</span>
        </div>
      )}
    </div>
  )
}

function MarginControl({ value, onChange, label = 'Margin top' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 8px', background: 'rgba(0,48,73,0.1)', borderRadius: '6px', marginBottom: '8px' }}>
      <span style={{ fontSize: '11px', fontFamily: 'Poppins', fontWeight: 600, color: '#003049' }}>{label}:</span>
      <input
        type="number"
        value={value ?? 40}
        onChange={e => onChange(parseInt(e.target.value) || 0)}
        min={0} max={400}
        style={{ width: '64px', padding: '2px 4px', fontSize: '12px', borderRadius: '4px', border: '1px solid #003049', fontFamily: 'Poppins' }}
      />
      <span style={{ fontSize: '11px', color: '#003049' }}>px</span>
    </div>
  )
}

// ─── Layout renderers ─────────────────────────────────────────────────────────

function GridLayout({ s, isEditMode, upd, img }) {
  return (
    <>
      <BoxTitle s={s} isEditMode={isEditMode} upd={upd} />
      <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
        <div style={{ width: '50%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {s.images.map((src, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, color: '#003049' }}>Scene {i + 1}</span>
              <ImageSlot src={src} index={i} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} />
            </div>
          ))}
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {s.scriptLines.map((line, i) => (
            <StyledEditableText
              key={i}
              value={line.value}
              textStyle={line}
              onChange={v => upd(s.id, { scriptLines: s.scriptLines.map((l, j) => j === i ? { ...l, value: v } : l) })}
              onStyleChange={st => upd(s.id, { scriptLines: s.scriptLines.map((l, j) => j === i ? { ...l, ...st } : l) })}
              isEditMode={isEditMode}
              tag="p"
              multiline
              baseStyle={{ fontFamily: 'Poppins', color: '#003049', lineHeight: '1.6', margin: 0 }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function SingleLayout({ s, isEditMode, upd, img }) {
  return (
    <>
      <BoxTitle s={s} isEditMode={isEditMode} upd={upd} />
      <ImageSlot src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img}
        width="100%"
      />
    </>
  )
}

function VideoLayout({ s, isEditMode, upd }) {
  const videoId = getYouTubeId(s.youtubeUrl)
  return (
    <div style={{ textAlign: 'center', paddingTop: '70px' }}>
      <StyledEditableText
        value={s.boxTitle.value}
        textStyle={s.boxTitle}
        onChange={v => upd(s.id, { boxTitle: { ...s.boxTitle, value: v } })}
        onStyleChange={st => upd(s.id, { boxTitle: { ...s.boxTitle, ...st } })}
        isEditMode={isEditMode}
        tag="div"
        baseStyle={{ fontFamily: "'Bestie Seventy', cursive", marginBottom: '32px', display: 'block' }}
      />
      {isEditMode && (
        <input
          type="text"
          value={s.youtubeUrl || ''}
          onChange={e => upd(s.id, { youtubeUrl: e.target.value })}
          placeholder="Paste YouTube URL here…"
          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '2px solid #003049', fontFamily: 'Poppins', fontSize: '14px', boxSizing: 'border-box', marginBottom: '16px' }}
        />
      )}
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          style={{ width: '100%', height: '440px', borderRadius: '12px', border: 'none', display: 'block' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div style={{ width: '100%', height: '320px', background: '#003049', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#95BBEA', fontFamily: 'Poppins', fontSize: '15px', fontWeight: 500 }}>
          {isEditMode ? '⬆ Paste a YouTube URL above to preview' : 'Video not configured'}
        </div>
      )}
      <div style={{ marginTop: '24px' }}>
        <StyledEditableText
          value={(s.watchText || t('Watch the Film', '20px', '600')).value}
          textStyle={s.watchText || t('Watch the Film', '20px', '600')}
          onChange={v => upd(s.id, { watchText: { ...(s.watchText || t('Watch the Film', '20px', '600')), value: v } })}
          onStyleChange={st => upd(s.id, { watchText: { ...(s.watchText || t('Watch the Film', '20px', '600')), ...st } })}
          isEditMode={isEditMode}
          baseStyle={{ fontFamily: 'Poppins', display: 'inline-block' }}
        />
      </div>
    </div>
  )
}

function BriefImageLayout({ s, isEditMode, upd, img }) {
  const desc = s.boxDescription || t('Add your written brief here...', '16px', '400')
  return (
    <>
      <BoxTitle s={s} isEditMode={isEditMode} upd={upd} />
      <div style={{ marginBottom: '24px' }}>
        <StyledEditableText
          value={desc.value}
          textStyle={desc}
          onChange={v => upd(s.id, { boxDescription: { ...desc, value: v } })}
          onStyleChange={st => upd(s.id, { boxDescription: { ...desc, ...st } })}
          isEditMode={isEditMode}
          tag="p"
          multiline
          baseStyle={{ fontFamily: 'Poppins', color: '#003049', lineHeight: '1.7', margin: 0 }}
        />
      </div>
      <ImageSlot src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} width="100%" />
    </>
  )
}

function StackedLayout({ s, isEditMode, upd, img }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '80px' }}>
        <ImageSlot
          src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img}
          width="70%" height={s.image1Height}
          onHeightChange={v => upd(s.id, { image1Height: v })}
        />
        <ImageSlot
          src={s.images[1]} index={1} sectionId={s.id} isEditMode={isEditMode} onImageChange={img}
          width="70%" align="right" height={s.image2Height}
          onHeightChange={v => upd(s.id, { image2Height: v })}
        />
      </div>
    </>
  )
}

function StackedBriefLayout({ s, isEditMode, upd, img }) {
  const desc = s.boxDescription || t('Written brief here...', '16px', '400')
  return (
    <>
      <div style={{ paddingTop: '80px', marginBottom: '24px' }}>
        <StyledEditableText
          value={desc.value}
          textStyle={desc}
          onChange={v => upd(s.id, { boxDescription: { ...desc, value: v } })}
          onStyleChange={st => upd(s.id, { boxDescription: { ...desc, ...st } })}
          isEditMode={isEditMode}
          tag="p"
          multiline
          baseStyle={{ fontFamily: 'Poppins', color: '#003049', lineHeight: '1.7', margin: 0 }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ImageSlot
          src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img}
          width="70%" height={s.image1Height}
          onHeightChange={v => upd(s.id, { image1Height: v })}
        />
        <ImageSlot
          src={s.images[1]} index={1} sectionId={s.id} isEditMode={isEditMode} onImageChange={img}
          width="70%" align="right" height={s.image2Height}
          onHeightChange={v => upd(s.id, { image2Height: v })}
        />
      </div>
    </>
  )
}

function TwoColBriefLayout({ s, isEditMode, upd, img }) {
  const desc = s.boxDescription || t('Text below brief title...', '16px', '400')
  return (
    <>
      <BoxTitle s={s} isEditMode={isEditMode} upd={upd} />
      <div style={{ marginBottom: '24px' }}>
        <StyledEditableText
          value={desc.value}
          textStyle={desc}
          onChange={v => upd(s.id, { boxDescription: { ...desc, value: v } })}
          onStyleChange={st => upd(s.id, { boxDescription: { ...desc, ...st } })}
          isEditMode={isEditMode}
          tag="p"
          multiline
          baseStyle={{ fontFamily: 'Poppins', color: '#003049', lineHeight: '1.7', margin: 0 }}
        />
      </div>
      {isEditMode && (
        <MarginControl
          value={s.image2MarginTop}
          onChange={v => upd(s.id, { image2MarginTop: v })}
          label="Image 2 — margin top"
        />
      )}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <ImageSlot src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} width="50%" />
        <div style={{ width: '50%', marginTop: `${s.image2MarginTop ?? 40}px` }}>
          <ImageSlot src={s.images[1]} index={1} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} width="100%" />
        </div>
      </div>
    </>
  )
}

function TwoColLayout({ s, isEditMode, upd, img }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      {isEditMode && (
        <MarginControl
          value={s.image2MarginTop}
          onChange={v => upd(s.id, { image2MarginTop: v })}
          label="Image 2 — margin top"
        />
      )}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <ImageSlot src={s.images[0]} index={0} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} width="50%" />
        <div style={{ width: '50%', marginTop: `${s.image2MarginTop ?? 40}px` }}>
          <ImageSlot src={s.images[1]} index={1} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} width="100%" />
        </div>
      </div>
    </div>
  )
}

function Grid3ColLayout({ s, isEditMode, upd, img }) {
  const sceneImages = s.images.slice(0, 8)
  const spanImage = s.images[8]
  return (
    <>
      <BoxTitle s={s} isEditMode={isEditMode} upd={upd} />
      <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {sceneImages.map((src, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, color: '#003049' }}>Scene {i + 1}</span>
                <ImageSlot src={src} index={i} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} aspectRatio="1" />
              </div>
            ))}
            <div style={{ gridColumn: 'span 2' }}>
              <ImageSlot src={spanImage} index={8} sectionId={s.id} isEditMode={isEditMode} onImageChange={img} aspectRatio="2/1" />
            </div>
          </div>
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {s.scriptLines.map((line, i) => (
            <StyledEditableText
              key={i}
              value={line.value}
              textStyle={line}
              onChange={v => upd(s.id, { scriptLines: s.scriptLines.map((l, j) => j === i ? { ...l, value: v } : l) })}
              onStyleChange={st => upd(s.id, { scriptLines: s.scriptLines.map((l, j) => j === i ? { ...l, ...st } : l) })}
              isEditMode={isEditMode}
              tag="p"
              multiline
              baseStyle={{ fontFamily: 'Poppins', color: '#003049', lineHeight: '1.6', margin: 0 }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// Shared box title (cursive, used by most templates)
function BoxTitle({ s, isEditMode, upd }) {
  return (
    <div style={{ marginBottom: '24px', paddingTop: '80px' }}>
      <StyledEditableText
        value={s.boxTitle.value}
        textStyle={s.boxTitle}
        onChange={v => upd(s.id, { boxTitle: { ...s.boxTitle, value: v } })}
        onStyleChange={st => upd(s.id, { boxTitle: { ...s.boxTitle, ...st } })}
        isEditMode={isEditMode}
        baseStyle={{ fontFamily: "'Bestie Seventy', cursive", display: 'inline-block' }}
      />
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

function scrollToSection(id) {
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export function CaseStudyBlock({ section: s, isEditMode, onUpdate, onImageChange, prevId, nextId }) {
  function upd(id, changes) { onUpdate(id, changes) }
  function img(id, idx, url) { onImageChange(id, idx, url) }

  function handleLayoutChange(newLayout) {
    upd(s.id, { layout: newLayout, ...getLayoutDefaults(newLayout, s) })
  }

  function renderInnerContent() {
    const props = { s, isEditMode, upd, img }
    switch (s.layout) {
      case 'grid':          return <GridLayout {...props} />
      case 'single':        return <SingleLayout {...props} />
      case 'video':         return <VideoLayout {...props} />
      case 'brief-image':   return <BriefImageLayout {...props} />
      case 'stacked':       return <StackedLayout {...props} />
      case 'stacked-brief': return <StackedBriefLayout {...props} />
      case 'two-col-brief': return <TwoColBriefLayout {...props} />
      case 'two-col':       return <TwoColLayout {...props} />
      case 'grid-3col':     return <Grid3ColLayout {...props} />
      default:              return null
    }
  }

  return (
    <div id={s.id} className="flex flex-col items-center m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>

      {/* Tagline */}
      <div style={{ fontFamily: "'Bestie Seventy', cursive" }}>
        <StyledEditableText
          value={s.tagline.value}
          textStyle={s.tagline}
          onChange={v => upd(s.id, { tagline: { ...s.tagline, value: v } })}
          onStyleChange={st => upd(s.id, { tagline: { ...s.tagline, ...st } })}
          isEditMode={isEditMode}
          baseStyle={{ fontFamily: "'Bestie Seventy', cursive" }}
        />
      </div>

      {/* Description */}
      <div style={{ marginTop: '72px', width: '100%' }}>
        <StyledEditableText
          value={s.description.value}
          textStyle={s.description}
          onChange={v => upd(s.id, { description: { ...s.description, value: v } })}
          onStyleChange={st => upd(s.id, { description: { ...s.description, ...st } })}
          isEditMode={isEditMode}
          tag="p"
          multiline
          baseStyle={{ fontFamily: 'Poppins, sans-serif', margin: 0 }}
        />
      </div>

      {/* Meta row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '48px', width: '100%' }}>
        {s.meta.map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <StyledEditableText
              value={m.label.value}
              textStyle={m.label}
              onChange={v => {
                const meta = s.meta.map((x, j) => j === i ? { ...x, label: { ...x.label, value: v } } : x)
                upd(s.id, { meta })
              }}
              onStyleChange={st => {
                const meta = s.meta.map((x, j) => j === i ? { ...x, label: { ...x.label, ...st } } : x)
                upd(s.id, { meta })
              }}
              isEditMode={isEditMode}
              baseStyle={{ fontFamily: 'Poppins, sans-serif' }}
            />
            <span style={{ fontSize: m.label.fontSize || '20px' }}>: </span>
            <StyledEditableText
              value={m.value.value}
              textStyle={m.value}
              onChange={v => {
                const meta = s.meta.map((x, j) => j === i ? { ...x, value: { ...x.value, value: v } } : x)
                upd(s.id, { meta })
              }}
              onStyleChange={st => {
                const meta = s.meta.map((x, j) => j === i ? { ...x, value: { ...x.value, ...st } } : x)
                upd(s.id, { meta })
              }}
              isEditMode={isEditMode}
              baseStyle={{ fontFamily: 'Poppins, sans-serif', marginLeft: '8px' }}
            />
          </div>
        ))}
      </div>

      {/* Blue card */}
      <div
        style={{
          background: '#95BBEA',
          position: 'relative',
          border: '5px solid #003049',
          marginTop: '22px',
          width: '100%',
          padding: '32px 40px',
          boxShadow: '5px 7px 7.2px 0 rgba(0,0,0,0.79)',
          borderRadius: '20px',
          boxSizing: 'border-box',
        }}
      >
        <img src={pin_right} alt="" style={{ position: 'absolute', top: '-25px', right: '-30px' }} />
        <img src={pin_left} alt="" style={{ position: 'absolute', top: '-25px', left: '-30px' }} />

        {/* Layout selector — edit mode only */}
        {isEditMode && (
          <select
            value={s.layout}
            onChange={e => handleLayoutChange(e.target.value)}
            style={{
              position: 'absolute', top: '14px', right: '14px',
              background: '#003049', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '6px 12px', fontSize: '12px',
              fontFamily: 'Poppins', fontWeight: 600, cursor: 'pointer', zIndex: 10,
            }}
          >
            {LAYOUT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        )}

        {/* Template content */}
        {renderInnerContent()}

        {/* Arrow navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '64px' }}>
          <img
            src={arrow_left}
            alt="Previous"
            onClick={() => scrollToSection(prevId)}
            style={{ cursor: prevId ? 'pointer' : 'default', opacity: prevId ? 1 : 0.25 }}
          />
          <img
            src={arrow_right}
            alt="Next"
            onClick={() => scrollToSection(nextId)}
            style={{ cursor: nextId ? 'pointer' : 'default', opacity: nextId ? 1 : 0.25 }}
          />
        </div>
      </div>
    </div>
  )
}
