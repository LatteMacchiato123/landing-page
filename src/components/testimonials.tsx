import React from "react";
import Image from "next/image";

interface Testimonial {
  text: string;
  work: string;
  name: string;
  job: string;
  avatar: string;
}

export function Testimonials() {
  const testimonialData: Testimonial[] = [
    {
      text: "Andhika is a highly skilled developer who consistently delivers top-notch work. As a Frontend Developer, he ensures that projects are not only functional but also aesthetically pleasing. His ability to troubleshoot and solve complex problems quickly and efficiently has been invaluable to our team. Moreover, his collaborative approach and positive attitude make him a pleasure to work with. I would highly recommend Andhika for any development project.",
      name: "John Doe",
      job: "CEO at Company Name",
      avatar: "/avatars/john_doe.png",
      work: "Frontend Developer",
    },
    {
      text: "Working with Andhika has been a pleasure. His attention to detail as a Software Engineer is exceptional, and he always goes above and beyond to ensure that the final product meets the highest standards. Andhika has a knack for understanding client requirements and translating them into effective solutions. He is also very responsive and communicates clearly throughout the project. I have been impressed with his work ethic and commitment to excellence.",
      name: "Jane Smith",
      job: "CTO at Company Name",
      avatar: "/avatars/jane_smith.png",
      work: "Software Engineer",
    },
    {
      text: "Andhika is a great team player and always willing to go the extra mile. As a Software Engineer, his technical expertise is complemented by his strong interpersonal skills, making him an asset to any team. He has a solid grasp of modern development practices and is always looking for ways to improve and innovate. Andhika's dedication to his craft is evident in the quality of his work, and he consistently delivers results that exceed expectations. I look forward to working with him on future projects.",
      name: "Samuel Green",
      job: "Software Engineer at Company Name",
      avatar: "/avatars/samuel_green.png",
      work: "Software Engineer",
    },
  ];

  return (
    <section className="bg-base-200 text-base-content p-72 min-h-screen">
      <h1 className="text-3xl mb-4 text-center font-extrabold">Testimonials</h1>
      <div className="container mx-auto flex flex-wrap justify-center">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="card bg-base-100 m-2 p-3 transition-transform transform hover:scale-105 hover:shadow-2xl"
            style={{ width: 'calc(33% - 1rem)' }}
          >
            <div className="flex flex-col space-y-1 p-3">
              <p className="text-sm font-bold">as {testimonial.work}</p>
              <p className="text-sm">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center space-x-2">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="rounded-full"
                  width={30}
                  height={30}
                />
                <div>
                  <h3 className="text-sm font-bold">{testimonial.name}</h3>
                  <p className="text-xs">{testimonial.job}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
