export type ContactExample = {
  label: string;
  message: string;
};

export const contactTips = [
  'Location or site area (or goals, for a custom website)',
  'What you need (aerial or ground video, photography, approximate length, or a content site)',
  'Timing or go-live date',
  'Access notes or constraints, if you know them',
] as const;

export const contactExamples: ContactExample[] = [
  {
    label: 'Real estate or land',
    message:
      'Looking for aerial stills, ground photography, and a short walkthrough video for a 42,000 sq ft industrial warehouse in Grapevine. Listing goes live in mid-August; prefer a weekday morning shoot. Can share the address and access details after we connect.',
  },
  {
    label: 'Brand or events',
    message:
      'Need a short promo cut for an outdoor brand activation in Fort Worth next month. Roughly 60–90 seconds with establishing aerials, ground footage, and crowd energy. Event runs one evening; we can coordinate a brief scout window.',
  },
  {
    label: 'Construction progress',
    message:
      'Seeking monthly progress flights for a mid-rise job site in Plano through the next two quarters. Aerial and ground stills plus a short update clip each visit for owner reports. Gate access and safety briefing on site.',
  },
  {
    label: 'Custom website',
    message:
      'We have strong aerial and ground footage for a North Texas ranch venue and want a simple custom site to host the films, photo sets, and booking inquiry. Prefer something clean that we can update as events and seasons change.',
  },
];
