import scene1 from '../assets/Maybelline_1.png'
import scene2 from '../assets/Maybelline_2.png'
import scene3 from '../assets/Maybelline_3.png'
import scene4 from '../assets/Maybelline_4.png'
import scene5 from '../assets/Maybelline_5.png'
import scene6 from '../assets/Maybelline_6.png'
import lorealImg from '../assets/loreal.png'
import nScene1 from '../assets/nothing_scene_1.png'
import nScene2 from '../assets/nothing_scene_2.png'
import nScene3 from '../assets/nothing_scene_3.png'
import nScene4 from '../assets/nothing_scene_4.png'
import nScene5 from '../assets/nothing_scene_5.png'
import nScene6 from '../assets/nothing_scene_6.png'
import nScene7 from '../assets/nothing_scene_7.png'
import nScene8 from '../assets/nothing_scene_8.png'
import nothingHappens from '../assets/nothing_happens.png'

// text field helper — every editable text is stored as an object
export function t(value, fontSize = '16px', fontWeight = '400', fontStyle = 'normal') {
  return { value, fontSize, fontWeight, fontStyle }
}

export const INITIAL_SECTIONS = [
  {
    id: 'maybelline',
    tagline: t("Maybe She's Born With It.", '24px', '500'),
    description: t(
      "A speculative ad capturing one of life's most unforgettable moments. The creative thought was to frame raw, unscripted emotion through the lens of the Maybelline brand — beauty that shines through even the most tearful, joyful moments of life.",
      '18px', '500'
    ),
    meta: [
      { label: t('Client', '20px', '500'), value: t('Maybelline', '20px', '700') },
      { label: t('Duration', '20px', '500'), value: t('35-45secs', '20px', '700') },
      { label: t('Category', '20px', '500'), value: t('Spec Ads', '20px', '700') },
    ],
    boxTitle: t('Script', '36px', '500'),
    layout: 'grid',
    images: [scene1, scene2, scene3, scene4, scene5, scene6],
    scriptLines: [
      t('Close-up of the couple holding hands across a table, hinting at a romantic date.', '16px', '500'),
      t('The man gets down on one knee and proposes. The woman freezes in disbelief as people around them watch.', '16px', '500'),
      t('Overwhelmed with joy, she starts crying happy tears while saying, "Yes!"', '16px', '500'),
      t('The couple hug tightly as the emotional moment sinks in.', '16px', '500'),
      t("A nearby photographer secretly captures the candid moment while they're embracing.", '16px', '500'),
      t('Later, the woman excitedly checks the pictures on the camera screen.', '16px', '500'),
    ],
  },
  {
    id: 'nothing',
    tagline: t('Nothing Happend Act Cool.', '24px', '500'),
    description: t(
      'A speculative ad built around a phrase people use every day. The creative thought was to reinterpret that phrase through the lens of the Nothing brand, creating a message that feels both familiar and surprising. Taking embarrassment to a whole new level.',
      '18px', '500'
    ),
    meta: [
      { label: t('Client', '20px', '500'), value: t('Nothing', '20px', '700') },
      { label: t('Duration', '20px', '500'), value: t('8-10secs', '20px', '700') },
      { label: t('Category', '20px', '500'), value: t('Spec Ads', '20px', '700') },
    ],
    boxTitle: t('Script', '36px', '500'),
    layout: 'grid-3col',
    images: [nScene1, nScene2, nScene3, nScene4, nScene5, nScene6, nScene7, nScene8, nothingHappens],
    scriptLines: [
      t("Scene opens with a woman wearing Nothing Headphones. While she is walking down the street., she notices someone in the distance enthusiastically waving in her direction. She pauses, slightly confused. After a brief hesitation, she awkwardly raises her hand and waves back with a polite smile.", '16px', '500'),
      t("The stranger keeps waving. Her smile fades into uncertainty as she realizes something isn't adding up.", '16px', '500'),
      t("She turns around and discovers the stranger was actually greeting someone standing behind her. Her eyes widen in embarrassment.", '16px', '500'),
      t("Without reacting, she casually puts on her Nothing Headphones, pretending nothing happened.", '16px', '500'),
      t('She walks off with complete confidence, acting as if the awkward moment never occurred. Final Black Frame. SUPER: "Nothing happend¹ act cool."', '16px', '500'),
    ],
  },
  {
    id: 'loreal',
    tagline: t('Beats of Worth', '24px', '500'),
    description: t(
      "For 50 years, \"I'm Worth It\" moved millions — until repetition turned it into noise. This campaign asked what happens when the most powerful words in advertising stop being heard, and found an answer that let women feel their worth again.",
      '18px', '500'
    ),
    meta: [
      { label: t('Client', '20px', '500'), value: t("L'Oreal Paris", '20px', '700') },
      { label: t('Awards', '20px', '500'), value: t('D&AD New Blood', '20px', '700') },
      { label: t('Category', '20px', '500'), value: t('Campaign', '20px', '700') },
    ],
    boxTitle: t('Campaign', '36px', '500'),
    layout: 'single',
    images: [lorealImg],
    scriptLines: [],
  },
]
