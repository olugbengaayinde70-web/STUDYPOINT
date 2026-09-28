// import React from 'react'

// function Reaction() {
//   return (
//     <div>Reaction</div>
//   )
// }

// export default Reaction
// import { useState } from "react";

// // SAMPLE CONTENT: replace every name, score and quote below with real ones
// // (and get permission from students and parents before showing them).
// const students = [
//   { name: "Adaeze Okafor", exam: "JAMB", result: "372 / 400" },
//   { name: "Tunde Bakare", exam: "WAEC", result: "8 A1s" },
//   { name: "Chiamaka Eze", exam: "JAMB", result: "361 / 400" },
//   { name: "Zainab Lawal", exam: "SAT", result: "1480 / 1600" },
//   { name: "Ibrahim Musa", exam: "JUPEB", result: "Admitted to 200 level" },
//   { name: "Kelechi Nwosu", exam: "WAEC", result: "7 A1s" },
// ];

// const teachers = [
//   { id: "segun", name: "Mr. Segun Adeyemi", subject: "Mathematics", exams: "JAMB, WAEC", when: "Available now", live: true },
//   { id: "ngozi", name: "Mrs. Ngozi Umeh", subject: "English Language", exams: "JAMB, WAEC, SAT", when: "Available now", live: true },
//   { id: "fatima", name: "Dr. Fatima Bello", subject: "Physics", exams: "JUPEB, JAMB", when: "Next: 4:00 PM", live: false },
//   { id: "emeka", name: "Mr. Emeka Obi", subject: "Chemistry", exams: "WAEC, NECO", when: "Next: Tomorrow, 9:00 AM", live: false },
// ];

// const parents = [
//   {
//     quote: "My daughter stopped dreading maths. The short lessons fit around her school day, and her practice scores kept climbing.",
//     who: "Mrs. Folake A.",
//     role: "Parent of a JAMB candidate",
//   },
//   {
//     quote: "I could see exactly what he had covered and what was left. It took the guesswork out of exam season.",
//     who: "Mr. Chidi N.",
//     role: "Parent of a WAEC candidate",
//   },
//   {
//     quote: "The teachers actually reply. When she was stuck the night before a paper, someone helped her within minutes.",
//     who: "Mrs. Aisha M.",
//     role: "Parent of a JUPEB student",
//   },
// ];

// const tabs = ["All", "JAMB", "WAEC", "JUPEB", "SAT"];

// const fontCss = `
// @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
// .sp-display { font-family: 'Big Shoulders Display', Impact, sans-serif; }
// .sp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
// .sp-sans { font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif; }
// `;

// const initials = (name) =>
//   name
//     .replace(/^(Mr|Mrs|Dr)\.\s*/, "")
//     .split(" ")
//     .map((p) => p[0])
//     .slice(0, 2)
//     .join("");

// function Label({ n, children }) {
//   return (
//     <p className="sp-mono text-xs font-semibold tracking-[0.18em] text-[#FFB020] sm:text-sm">
//       {n} / {children}
//     </p>
//   );
// }

// export default function StudyPointCommunity() {
//   const [tab, setTab] = useState("All");
//   const shown = tab === "All" ? students : students.filter((s) => s.exam === tab);

//   return (
//     <section id="results" className="sp-sans bg-[#0F131A] text-[#F2F0EA]">
//       <style>{fontCss}</style>

//       <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
//         <h2 className="sp-display max-w-[16ch] text-6xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
//           Results you can see.
//         </h2>

//         {/* Top students */}
//         <div className="mt-20">
//           <Label n="01">TOP STUDENTS</Label>
//           <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by exam">
//             {tabs.map((t) => (
//               <button
//                 key={t}
//                 type="button"
//                 onClick={() => setTab(t)}
//                 aria-pressed={tab === t}
//                 className={`sp-mono rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB020] ${
//                   tab === t
//                     ? "border-[#FFB020] bg-[#FFB020] text-[#0F131A]"
//                     : "border-white/20 text-[#F2F0EA]/80 hover:border-white/50"
//                 }`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>

//           <ul className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#171D28]">
//             {shown.map((s, i) => (
//               <li key={s.name} className="flex items-center gap-4 border-b border-white/10 px-5 py-4 last:border-b-0">
//                 <span className="sp-mono w-7 text-sm font-semibold text-[#FFB020]">{String(i + 1).padStart(2, "0")}</span>
//                 <span
//                   className="sp-mono grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#FFB020]/15 text-sm font-semibold text-[#FFB020]"
//                   aria-hidden="true"
//                 >
//                   {initials(s.name)}
//                 </span>
//                 <span className="flex-1">
//                   <span className="block font-semibold">{s.name}</span>
//                   <span className="sp-mono block text-xs tracking-wider text-[#9AA3B2]">{s.exam}</span>
//                 </span>
//                 <span className="sp-mono text-right text-sm font-semibold sm:text-lg">{s.result}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Teachers */}
//         <div className="mt-24">
//           <Label n="02">TEACHERS AVAILABLE</Label>
//           <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {teachers.map((t) => (
//               <li key={t.id} className="flex flex-col rounded-2xl border border-white/10 bg-[#171D28] p-5">
//                 <span
//                   className="sp-mono grid h-12 w-12 place-items-center rounded-full bg-[#FFB020]/15 text-sm font-semibold text-[#FFB020]"
//                   aria-hidden="true"
//                 >
//                   {initials(t.name)}
//                 </span>
//                 <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
//                 <p className="text-[#F2F0EA]/85">{t.subject}</p>
//                 <p className="sp-mono mt-1 text-xs tracking-wider text-[#9AA3B2]">{t.exams}</p>
//                 <p className="sp-mono mt-5 flex items-center gap-2 text-xs font-semibold tracking-wider">
//                   <span className={`h-2.5 w-2.5 rounded-full ${t.live ? "bg-[#5EE6A8]" : "bg-[#FFB020]"}`} aria-hidden="true" />
//                   {t.when}
//                 </p>
//                 <a
//                   href={`#book-${t.id}`}
//                   className="mt-5 rounded-full border border-white/25 px-4 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-[#FFB020] hover:text-[#0F131A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB020]"
//                 >
//                   Book a session
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Parents */}
//         <div className="mt-24">
//           <Label n="03">WHAT PARENTS SAY</Label>
//           <ul className="mt-6 grid gap-4 md:grid-cols-3">
//             {parents.map((p) => (
//               <li key={p.who} className="flex flex-col rounded-2xl border border-white/10 bg-[#171D28] p-6">
//                 <span className="sp-display text-7xl leading-[0.6] text-[#FFB020]" aria-hidden="true">“</span>
//                 <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-[#F2F0EA]/90">{p.quote}</blockquote>
//                 <p className="mt-6 font-semibold">{p.who}</p>
//                 <p className="text-sm text-[#9AA3B2]">{p.role}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

// SAMPLE CONTENT: replace every name, score, photo and quote below with real ones
// (and get permission from students and parents before showing them).
// Student photos: portrait, about 800 x 1000px, saved in /public/images/students/.
const students = [
  { name: "Adaeze Okafor", exam: "JAMB", big: "372", small: "out of 400", photo: "/images/students/adaeze.jpg" },
  { name: "Tunde Bakare", exam: "WAEC", big: "8", small: "A1s", photo: "/images/students/tunde.jpg" },
  { name: "Chiamaka Eze", exam: "JAMB", big: "361", small: "out of 400", photo: "/images/students/chiamaka.jpg" },
  { name: "Zainab Lawal", exam: "SAT", big: "1480", small: "out of 1600", photo: "/images/students/zainab.jpg" },
  { name: "Ibrahim Musa", exam: "JUPEB", big: "200L", small: "direct entry", photo: "/images/students/ibrahim.jpg" },
];

const teachers = [
  { id: "segun", name: "Mr. Segun Adeyemi", subject: "Mathematics", exams: "JAMB, WAEC", when: "Available now", live: true },
  { id: "ngozi", name: "Mrs. Ngozi Umeh", subject: "English Language", exams: "JAMB, WAEC, SAT", when: "Available now", live: true },
  { id: "fatima", name: "Dr. Fatima Bello", subject: "Physics", exams: "JUPEB, JAMB", when: "Next: 4:00 PM", live: false },
  { id: "emeka", name: "Mr. Emeka Obi", subject: "Chemistry", exams: "WAEC, NECO", when: "Next: Tomorrow, 9:00 AM", live: false },
];

const parents = [
  {
    quote: "My daughter stopped dreading maths. The short lessons fit around her school day, and her practice scores kept climbing.",
    who: "Mrs. Folake A.",
    role: "Parent of a JAMB candidate",
  },
  {
    quote: "I could see exactly what he had covered and what was left. It took the guesswork out of exam season.",
    who: "Mr. Chidi N.",
    role: "Parent of a WAEC candidate",
  },
  {
    quote: "The teachers actually reply. When she was stuck the night before a paper, someone helped her within minutes.",
    who: "Mrs. Aisha M.",
    role: "Parent of a JUPEB student",
  },
];

const fontCss = `
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
.sp-display { font-family: 'Big Shoulders Display', Impact, sans-serif; }
.sp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
.sp-sans { font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif; }
`;

const initials = (name) =>
  name
    .replace(/^(Mr|Mrs|Dr)\.\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

function Label({ n, children }) {
  return (
    <p className="sp-mono text-xs font-semibold tracking-[0.18em] text-[#FFB020] sm:text-sm">
      {n} / {children}
    </p>
  );
}

// Shows the photo; falls back to big initials if the file is missing.
function Photo({ src, name, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`sp-display grid place-items-center bg-[#1F2736] text-8xl text-[#FFB020]/60 ${className}`} aria-hidden="true">
        {initials(name)}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function StudentCard({ s, featured, onPick }) {
  const body = (
    <>
      <Photo
        key={s.photo}
        src={s.photo}
        name={s.name}
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F131A] via-[#0F131A]/35 to-transparent" />
      {featured && (
        <span className="sp-mono absolute left-5 top-5 rounded-full bg-[#FFB020] px-3.5 py-1.5 text-xs font-semibold tracking-[0.15em] text-[#0F131A]">
          TOP STUDENT
        </span>
      )}
      <div className={`absolute inset-x-0 bottom-0 text-left ${featured ? "p-6 sm:p-8" : "p-4"}`}>
        <span className="sp-mono text-xs font-semibold tracking-[0.15em] text-[#F2F0EA]/80">{s.exam}</span>
        <div className="flex items-baseline gap-2.5">
          <span className={`sp-display leading-none text-[#FFB020] ${featured ? "text-8xl sm:text-9xl" : "text-5xl"}`}>
            {s.big}
          </span>
          <span className={`sp-mono text-[#F2F0EA]/80 ${featured ? "text-base" : "text-xs"}`}>{s.small}</span>
        </div>
        <span className={`mt-1 block font-semibold ${featured ? "text-2xl" : "text-base"}`}>{s.name}</span>
      </div>
    </>
  );

  const base = "group relative block overflow-hidden rounded-3xl bg-[#171D28]";

  if (featured) {
    return (
      <div className={`${base} col-span-2 aspect-[4/5] ring-2 ring-[#FFB020] lg:aspect-auto lg:row-span-2 lg:min-h-[560px]`}>
        {body}
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onPick}
      aria-label={`Feature ${s.name}, ${s.exam} ${s.big} ${s.small}`}
      className={`${base} aspect-[3/4] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB020]`}
    >
      {body}
    </button>
  );
}

export default function StudyPointCommunity() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const others = students.map((s, i) => ({ s, i })).filter(({ i }) => i !== featuredIdx);

  return (
    <section id="results" className="sp-sans bg-[#0F131A] text-[#F2F0EA]">
      <style>{fontCss}</style>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="sp-display max-w-[16ch] text-6xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
          Results you can see.
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[#9AA3B2]">
          Meet some of the students who put in the work. Tap a student to bring them to the front.
        </p>

        {/* Top students */}
        <div className="mt-16">
          <Label n="01">TOP STUDENTS</Label>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StudentCard s={students[featuredIdx]} featured />
            {others.map(({ s, i }) => (
              <StudentCard key={s.name} s={s} onPick={() => setFeaturedIdx(i)} />
            ))}
          </div>
        </div>

        {/* Teachers */}
        <div className="mt-24">
          <Label n="02">TEACHERS AVAILABLE</Label>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t) => (
              <li key={t.id} className="flex flex-col rounded-2xl border border-white/10 bg-[#171D28] p-5">
                <span
                  className="sp-mono grid h-12 w-12 place-items-center rounded-full bg-[#FFB020]/15 text-sm font-semibold text-[#FFB020]"
                  aria-hidden="true"
                >
                  {initials(t.name)}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
                <p className="text-[#F2F0EA]/85">{t.subject}</p>
                <p className="sp-mono mt-1 text-xs tracking-wider text-[#9AA3B2]">{t.exams}</p>
                <p className="sp-mono mt-5 flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className={`h-2.5 w-2.5 rounded-full ${t.live ? "bg-[#5EE6A8]" : "bg-[#FFB020]"}`} aria-hidden="true" />
                  {t.when}
                </p>
                <a
                  href={`#book-${t.id}`}
                  className="mt-5 rounded-full border border-white/25 px-4 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-[#FFB020] hover:text-[#0F131A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB020]"
                >
                  Book a session
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Parents */}
        <div className="mt-24">
          <Label n="03">WHAT PARENTS SAY</Label>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {parents.map((p) => (
              <li key={p.who} className="flex flex-col rounded-2xl border border-white/10 bg-[#171D28] p-6">
                <span className="sp-display text-7xl leading-[0.6] text-[#FFB020]" aria-hidden="true">“</span>
                <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-[#F2F0EA]/90">{p.quote}</blockquote>
                <p className="mt-6 font-semibold">{p.who}</p>
                <p className="text-sm text-[#9AA3B2]">{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}