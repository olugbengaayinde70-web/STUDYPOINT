// import React from 'react'

// function Body() {
//   return (
//     <div>Body</div>
//   )
// }

// export default Body
const exams = [
  {
    id: "jamb",
    name: "JAMB",
    full: "Joint Admissions and Matriculation Board (UTME)",
    text: "The entrance exam for Nigerian universities, polytechnics and colleges of education.",
    image: "https://cdn.vanguardngr.com/wp-content/uploads/2019/11/Official_JAMB_logo-e1648482117588.png",
    imageAlt: "JAMB logo",
  },
  {
    id: "waec",
    name: "WAEC",
    full: "West African Examinations Council (WASSCE)",
    text: "The senior secondary school certificate exam taken at the end of SS3.",
    image: "https://waecgh.org/wp-content/uploads/2024/04/WAEC-Logo2.png",
    imageAlt: "WAEC logo",
  },
  {
    id: "neco",
    name: "NECO",
    full: "National Examinations Council (SSCE)",
    text: "Another senior secondary certificate exam, also taken at the end of SS3.",
    image: "https://neco.gov.ng/assets/neco-logo.df6f9256.png",
    imageAlt: "NECO logo",
  },
  {
    id: "jupeb",
    name: "JUPEB",
    full: "Joint Universities Preliminary Examinations Board",
    text: "A one-year programme that can lead to direct entry into 200 level at partner universities.",
    image: "https://jupeb.edu.ng/images/logo/jupebLogoSmall1.png",
    imageAlt: "JUPEB logo",
  },
  {
    id: "sat",
    name: "SAT",
    full: "College Board",
    text: "The US college admissions test, for students applying to universities abroad.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SAT_logo_(2017).svg",
    imageAlt: "SAT logo",
  },
  {
    id: "ielts",
    name: "IELTS",
    full: "International English Language Testing System",
    text: "An English proficiency test often required for study and work abroad.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/IELTS_logo.svg",
    imageAlt: "IELTS logo",
  },
];

const fontCss = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
.sp-serif { font-family: 'DM Serif Display', Georgia, serif; }
.sp-sans { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; }
`;

export default function StudyPointExams() {
  return (
    <section id="exams" className="study-exams sp-sans">
      <style>{fontCss}</style>

      <div className="study-exams__inner">
        <div className="study-exams__intro">
          <span className="eyebrow eyebrow-soft">Study smarter</span>
          <h2 className="sp-serif">Study for the exam that's next.</h2>
          <p>
            Every lesson is tied to the exams students actually sit, so you spend your time on what will be tested.
          </p>
        </div>

        <ul className="exam-grid">
          {exams.map((exam) => (
            <li key={exam.id} className="exam-card">
              <div className="exam-card__logo">
                <img src={exam.image} alt={exam.imageAlt} loading="lazy" />
              </div>
              <div className="exam-card__content">
                <span className="exam-name sp-serif">{exam.name}</span>
                <span className="exam-full">{exam.full}</span>
                <span className="exam-text">{exam.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}