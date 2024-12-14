import React from "react";

export function Experience() {
  const experienceData = [
    {
      title: "Company Name",
      job: "UI/UX Designer",
      jobspan: "2022-2023",
      responsibilities: [
        "Designed user interfaces for web and mobile applications",
        "Collaborated with developers and stakeholders",
        "Conducted user research and usability testing",
      ],
    },
    {
      title: "Company Name",
      job: "Software Engineer",
      jobspan: "2023-2024",
      responsibilities: [
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Participated in code reviews and provided constructive feedback",
        "Managed deployment and continuous integration/continuous deployment (CI/CD) processes",
        "Wrote automated tests to ensure high-quality code",
      ],
    },
  ];

  return (
    <section className="bg-base-200 text-base-content p-20 min-h-screen"  >
      <h1 className="text-5xl mb-4 bg-base-200 text-center font-extrabold">Experiences</h1>
      <div className="text-lg mb-6 bg-base-200 text-center">
        Here you will find the experiences I have had in my career path.
      </div>
      <div className="container mx-auto max-w-screen-md flex flex-col bg-base">
        {experienceData.map((experience, index) => (
          <React.Fragment key={index}>
            <div
              rel="noopener noreferrer"
              className="card lg:card-side bg-base-200 m-4  w-full transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <figure className="overflow-hidden w-full ">
                <div className="card-body">
                  <h2 className="card-title text-3xl text-center">{experience.title}</h2>
                  <h3 className="mb-2 text-lg font-bold">{experience.job}</h3>
                  <p className="mb-2 text-lg">{experience.jobspan}</p>
                  <h3 className="mb-2 text-lg font-bold">Responsibilities:</h3>
                  <ul className="list-disc ml-5 mb-2 text-lg">
                    {experience.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </figure>
            </div>
            {index < experienceData.length - 1 && <div className="divider">•</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
