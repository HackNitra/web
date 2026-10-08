import type { ImageMetadata } from 'astro';

import aiAPracaNaDialku from '../assets/events/ai-a-praca-na-dialku.jpg';
import aiVMarketingu from '../assets/events/ai-v-marketingu.jpg';
import aiVZdravotnictve from '../assets/events/ai-v-zdravotnictve.jpg';
import odNapaduKPrototypu from '../assets/events/od-napadu-k-prototypu.jpg';
import odNapaduKPrototypuSala from '../assets/events/od-napadu-k-prototypu-sala.jpg';
import pivoAiPokec from '../assets/events/pivo-ai-pokec.jpg';
import programovanieSAi from '../assets/events/programovanie-s-ai.jpg';
import rychlokurzChatgpt from '../assets/events/rychlokurz-chatgpt.jpg';
import ukazSvojePrompty1 from '../assets/events/ukaz-svoje-prompty-1.jpg';
import ukazSvojePrompty2 from '../assets/events/ukaz-svoje-prompty-2.jpg';
import ukazSvojePrompty2Recnici from '../assets/events/ukaz-svoje-prompty-2-recnici.jpg';
import dominik from '../assets/team/dominik.jpg';
import filip from '../assets/team/filip.jpg';
import jakub from '../assets/team/jakub.jpg';
import jana from '../assets/team/jana.jpg';
import martin from '../assets/team/martin.jpg';
import matej from '../assets/team/matej.jpg';
import samo from '../assets/team/samo.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** CSS object-position, for photos whose subject is off-centre once cropped. */
  position?: string;
}

export interface Event {
  /** Year and month, YYYY-MM. Events are grouped by year in the order listed here. */
  date: string;
  title: string;
  note?: string;
  photo?: Photo;
}

/** The hero mosaic: the first photo is the tall one. */
export const heroPhotos: Photo[] = [
  { src: odNapaduKPrototypuSala, alt: 'Plná sála na podujatí Od nápadu k prototypu s AI' },
  { src: ukazSvojePrompty2Recnici, alt: 'Rečníci na podujatí Ukáž svoje prompty číslo 2' },
  { src: aiVZdravotnictve, alt: 'Panelová diskusia AI v zdravotníctve' },
];

export const stats = [
  { value: '9', label: 'eventov' },
  { value: '18', label: 'hostí' },
  { value: '430+', label: 'účastníkov' },
  { value: '550+', label: 'followerov' },
  { value: '4.8 / 5', label: 'feedback' },
];

export const team = [
  { name: 'Jakub', company: 'Apple', photo: jakub },
  { name: 'Jana', company: 'Slido (Cisco)', photo: jana },
  { name: 'Matej', company: 'Sentry', photo: matej },
  { name: 'Filip', company: 'Duvo', photo: filip },
  { name: 'Samo', company: 'Advertissimo', photo: samo },
  { name: 'Dominik', company: 'OA', photo: dominik },
  { name: 'Martin', company: 'Definic', photo: martin },
];

export const formats = [
  { title: 'Prednášky a diskusie', text: 'Meetupy s expertmi zo Slovenska a Čiech.' },
  { title: 'Ukáž svoje prompty', text: 'Komunitné meetupy s ľuďmi z Nitry a okolia.' },
  { title: 'Pivo AI Pokec', text: 'Neformálne stretnutia.' },
  { title: 'Tvor AI Ty', text: 'Build days.' },
];

export const events: Event[] = [
  {
    date: '2024-01',
    title: 'AI a práca na diaľku',
    photo: { src: aiAPracaNaDialku, alt: 'Prednáška AI a práca na diaľku pred plnou sálou' },
  },
  {
    date: '2024-06',
    title: 'AI v zdravotníctve',
    photo: { src: aiVZdravotnictve, alt: 'Panelová diskusia AI v zdravotníctve' },
  },
  {
    date: '2024-11',
    title: 'Rýchlokurz ChatGPT',
    photo: { src: rychlokurzChatgpt, alt: 'Rýchlokurz ChatGPT' },
  },
  {
    date: '2025-03',
    title: 'AI v marketingu',
    photo: { src: aiVMarketingu, alt: 'Rečníčka na podujatí AI v marketingu', position: '50% 30%' },
  },
  {
    date: '2025-10',
    title: 'Programovanie s AI (vibecoding)',
    photo: { src: programovanieSAi, alt: 'Rečník pri programovaní s AI', position: '50% 45%' },
  },
  {
    date: '2025-12',
    title: 'Ukáž svoje prompty #1',
    photo: { src: ukazSvojePrompty1, alt: 'Publikum na podujatí Ukáž svoje prompty' },
  },
  {
    date: '2026-04',
    title: 'Pivo AI Pokec',
    note: 'Neformálne stretnutie.',
    photo: { src: pivoAiPokec, alt: 'Spoločný stôl na stretnutí Pivo AI Pokec', position: '50% 55%' },
  },
  {
    date: '2026-04',
    title: 'Stretnutie nitrianskych kreatívcov x Kreatívne centrum Nitra',
  },
  {
    date: '2026-05',
    title: 'Od nápadu k prototypu s AI x Kreatívne centrum Nitra',
    photo: {
      src: odNapaduKPrototypu,
      alt: 'Adam Brocka na pódiu počas podujatia Od nápadu k prototypu s AI',
    },
  },
  {
    date: '2026-06',
    title: 'Ukáž svoje prompty #2',
    photo: { src: ukazSvojePrompty2, alt: 'Podujatie Ukáž svoje prompty číslo 2' },
  },
];

export const guests = [
  { name: 'Filip Stollár', role: 'Kontext, ex Deepnote, Y Combinator alumni' },
  { name: 'Daniel Kvak', role: 'Carebot founder' },
  { name: 'Dominik Juskanič', role: 'klinika Orbis' },
  { name: 'Samuel Hollý', role: 'klinika Orbis' },
  { name: 'Ján Dudek', role: 'White Plume Technologies, Oxford alumni' },
  { name: 'Laura Probstnerová', role: 'Deepnote' },
  { name: 'Martin Molnár', role: 'PlanCity.ai founder, ex Pelikan' },
  { name: 'Martin Duriš', role: 'Macaly co-founder' },
  { name: 'Adam Brocka', role: 'Design Thinking evangelist' },
  { name: 'Ondrej Proksa', role: 'Muziker CTO' },
];

export const contacts = [
  { name: 'Jakub Žitný', role: 'founder HackNitra, Apple', email: 'jakub.zitny@gmail.com' },
  {
    name: 'Jana Molčan Hriňová',
    role: 'co-founder HackNitra, Slido (Cisco)',
    email: 'hrinova.janka@gmail.com',
  },
];

/** Mail links open with the partnership subject already filled in. */
export const mailto = (email: string) =>
  `mailto:${email}?subject=${encodeURIComponent('Partnerstvo s HackNitra')}`;

/** Where the "Staň sa partnerom" buttons outside the header send mail. */
export const partnerMailto = mailto('jakub.zitny@gmail.com');

export const socials = [
  { icon: 'facebook', label: 'HackNitra na Facebooku', href: 'https://www.facebook.com/hacknitra' },
  { icon: 'instagram', label: 'HackNitra na Instagrame', href: 'https://www.instagram.com/hacknitra' },
  { icon: 'linkedin', label: 'HackNitra na LinkedIne', href: 'https://www.linkedin.com/company/hacknitra' },
] as const;
