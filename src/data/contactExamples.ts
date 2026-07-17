export type ContactExample = {
  label: string;
  message: string;
};

export const contactTips = [
  'Location or site area',
  'What you need (stills, video, approximate length)',
  'Timing or go-live date',
  'Access notes or constraints, if you know them',
] as const;

export const contactExamples: ContactExample[] = [
  {
    label: 'Real estate or land',
    message:
      'Looking for aerial stills and a short walkthrough video for a 42,000 sq ft industrial warehouse in Grapevine. Listing goes live in mid-August; prefer a weekday morning shoot. Can share the address and access details after we connect.',
  },
  {
    label: 'Brand or events',
    message:
      'Need a short promo cut for an outdoor brand activation in Fort Worth next month. Roughly 60–90 seconds with a few establishing aerials and crowd energy. Event runs one evening; we can coordinate a brief scout window.',
  },
  {
    label: 'Construction progress',
    message:
      'Seeking monthly progress flights for a mid-rise job site in Plano through the next two quarters. Still sets and a short update clip each visit for owner reports. Gate access and safety briefing on site.',
  },
];
