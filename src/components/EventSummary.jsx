import React from 'react';

const stats = [
  { label: 'Total participants', value: '420+' },
  { label: 'Universities represented', value: '32' },
  { label: 'Prize pool distributed', value: '₹2,50,000' },
  { label: 'Date & venue', value: 'Jan 18–19, 2025 · NMIT, Bengaluru' },
];

const winners = [
  {
    place: '1st',
    team: 'RootRangers',
    logo:
      'https://images.unsplash.com/photo-1630640044774-9021ce9512cc?q=80&w=400&auto=format&fit=crop',
    summary: 'Perfect web + pwn streak; solved the final crypto in last hour.',
  },
  {
    place: '2nd',
    team: '0xNMIT',
    logo:
      'https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=400&auto=format&fit=crop',
    summary: 'Incredible OSINT speed and solid reversing writeups.',
  },
  {
    place: '3rd',
    team: 'CipherCats',
    logo:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format&fit=crop',
    summary: 'Consistent across categories; clutch solve in forensics.',
  },
];

const EventSummary = () => {
  return (
    <section className="relative w-full bg-white py-16 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Event Recap
          </h2>
          <p className="mt-2 text-gray-600">
            A quick snapshot of the scale, diversity, and standout moments from TRIADA CTF ’25.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
            >
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Winners summary */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold">Winners summary</h3>
          <p className="mt-2 max-w-3xl text-gray-600">
            Congratulations to the top teams who dominated the scoreboard. Here are the top 3 — we’ll publish full standings and writeups soon.
          </p>

          {/* Leaderboard top 3 */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {winners.map((w, idx) => (
              <div
                key={w.team}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={w.logo}
                    alt={`${w.team} logo`}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-sm text-indigo-600">{w.place} place</div>
                    <div className="text-lg font-semibold">{w.team}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{w.summary}</p>
                <div className="mt-4 text-xs text-gray-500">
                  Dynamic scoreboard integration coming soon.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSummary;
