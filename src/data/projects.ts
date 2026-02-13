import type { Project } from '@/types';

/**
 * ============================================================
 * 📁 PORTFOLIO PROJECTS DATA
 * ============================================================
 * 
 * 여기서 작업(project)들의 정보를 수정할 수 있습니다.
 * 각 작업은 다음 구조를 가집니다:
 * 
 * {
 *   id: '고유한-아이디',           // 고유 식별자 (변경하지 마세요)
 *   title: '작업 제목',            // 프로젝트 제목
 *   category: '카테고리',          // 예: Brand Identity / Photography
 *   year: '2024',                  // 작업 연도
 *   description: '설명글',         // 프로젝트 설명
 *   media: [                       // 사진/영상 목록 (순서대로 표시됨)
 *     {
 *       id: '고유-id',
 *       type: 'image' | 'video',   // 'image' 또는 'video' 선택
 *       url: '이미지/영상 URL',    // 사진 URL 또는 영상 URL
 *       alt: '설명 텍스트'          // 접근성을 위한 대체 텍스트
 *     }
 *   ]
 * }
 * 
 * 💡 팁:
 * - 사진 URL: Unsplash, 직접 업로드한 이미지 URL 등 사용 가능
 * - 영상 URL: Mixkit, Pexels, 직접 업로드한 영상 URL 등 사용 가능
 * - media 배열의 순서대로 가로 스크롤에 표시됩니다
 * ============================================================
 */

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'IMOOGI',
    category: 'Head Video Director / VFX(3D)',
    year: '2024/01. - 2024/08.',
    description: 'Lets Fly — no matter what we are. Lets fly toward our dream. \n Fashion dance film with 3D VFX, and won CINEMATOGRAPHY Award in WOWFF2024',
    media: [
      {
        id: 'p1-1',
        type: 'image',
        url: '/public/images/p1/01_01.png',
        alt: 'Ethereal Bloom - Main'
      },
      {
        id: 'p1-2',
        type: 'video',
        url: '/videos/p1/imoogi 04.mp4',
        alt: 'Ethereal Bloom - Video'
      },
            {
        id: 'p1-5',
        type: 'image',
        url: '/public/images/p1/01_02.jpg',
        alt: 'Ethereal Bloom - Detail'
      },
      {
        id: 'p1-6',
        type: 'image',
        url: '/public/images/p1/01_03.jpg',
        alt: 'Ethereal Bloom - Detail 2'
      },
      {
        id: 'p1-3',
        type: 'video',
        url: '/videos/p1/imoogi 05.mp4',
        alt: 'Ethereal Bloom - Video'
      },
      {
        id: 'p1-4',
        type: 'video',
        url: '/videos/p1/imoogi 03.mp4',
        alt: 'Ethereal Bloom - Video'
      },
      {
        id: 'p1-7',
        type: 'video',
        url: '/public/videos/p1/imoogi 02.mp4',
        alt: 'Ethereal Bloom - Video'
      },
      {
        id: 'p1-8',
        type: 'video',
        url: '/public/videos/p1/imoogi 01.mp4',
        alt: 'Ethereal Bloom - Video'
      },
      {
        id: 'p1-9',
        type: 'video',
        url: '/public/videos/p1/imoogi 06.mp4',
        alt: 'Ethereal Bloom - Video'
      },
    ]
  },
  {
    id: 'project-2',
    title: 'SIERA 2025FW Limited',
    category: 'AI/3D, Video',
    year: '2025/08. - 2026/01.',
    description: 'Designed the key visual graphics and produced the promotional video for the first edition launch of SIERA.',
    media: [
      {
        id: 'p2-4',
        type: 'video',
        url: '/public/videos/p2/p2_01.mp4',
        alt: 'Urban Fragments - Video 2'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_01.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_02.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_03.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_04.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_05.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_06.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p2/p2_07.png',
        alt: 'Urban Fragments - Main'
      },
    ]
  },
    {
    id: 'project-3',
    title: 'WOWFF 2025',
    category: 'Head Creative Director / VFX(3D)',
    year: '2025/09. - 2025/12',
    description: 'Head of 3D Team in Film Festival \n Directing Promotion Reels Video in WOWFF 2025',
    media: [
      {
        id: 'p5-1',
        type: 'video',
        url: '/public/videos/p5/p5_01.mp4',
        alt: 'Digital Horizons - Video'
      },
      {
        id: 'p5-1',
        type: 'video',
        url: '/public/videos/p5/p5_02.mp4',
        alt: 'Digital Horizons - Video'
      },
      {
        id: 'p5-1',
        type: 'video',
        url: '/public/videos/p5/p5_03.mp4',
        alt: 'Digital Horizons - Video'
      },
      {
        id: 'p5-2',
        type: 'image',
        url: '/public/images/p5/p5_01.png',
        alt: 'Digital Horizons - Main'
      },
      {
        id: 'p5-2',
        type: 'image',
        url: '/public/images/p5/p5_02.png',
        alt: 'Digital Horizons - Main'
      }
    ]
  },
  {
    id: 'project-3',
    title: 'Chibimon',
    category: 'VFX(AI/3D)',
    year: '2025/09. - 2025/12.',
    description: 'VFX in Music Video Chibimon',
    media: [
      {
        id: 'p3-3',
        type: 'video',
        url: '/public/videos/p3/p3_01.mp4',
        alt: 'Chromatic Waves - Video'
      },
      {
        id: 'p3-3',
        type: 'video',
        url: '/public/videos/p3/p3_02.mp4',
        alt: 'Chromatic Waves - Video'
      },
      {
        id: 'p3-3',
        type: 'video',
        url: '/public/videos/p3/p3_03.mp4',
        alt: 'Chromatic Waves - Video'
      },
      {
        id: 'p3-3',
        type: 'video',
        url: '/public/videos/p3/p3_04.mp4',
        alt: 'Chromatic Waves - Video'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p3/p3_01.png',
        alt: 'Urban Fragments - Main'
      },
      {
        id: 'p2-2',
        type: 'image',
        url: '/public/images/p3/p3_02.png',
        alt: 'Urban Fragments - Main'
      },
    ]
  },
  {
    id: 'Giggle',
    title: 'Giggle',
    category: 'Photography / Editorial',
    year: '2025/03. - 2026/01.',
    description: 'Fashion editorial that express child-like freedom and innocence with custom garments.',
    media: [
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_01.png',
        alt: 'Silent Portraits - Main'
      },
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_02.png',
        alt: 'Silent Portraits - Main'
      },
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_03.png',
        alt: 'Silent Portraits - Main'
      },
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_04.png',
        alt: 'Silent Portraits - Main'
      },
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_05.png',
        alt: 'Silent Portraits - Main'
      },
      {
        id: 'p4-1',
        type: 'image',
        url: '/public/images/p4/p4_06.png',
        alt: 'Silent Portraits - Main'
      }
    ]
  },
  {
    id: 'project-6',
    title: 'MUTATION',
    category: '3D&AI based Graphic / Editorial / Interaction',
    year: '2024/09. - 2025/03.',
    description: 'HIU X KARTS Design Exhibition, Playtus',
    media: [
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_01.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_02.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_03.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_04.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_05.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_06.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_07.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_08.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_09.png',
        alt: 'Minimal Forms - Main'
      },
      {
        id: 'p6-1',
        type: 'image',
        url: '/public/images/p6/p6_10.png',
        alt: 'Minimal Forms - Main'
      }
    ]
  }
];
