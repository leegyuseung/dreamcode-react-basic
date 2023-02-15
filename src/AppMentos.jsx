import React, { useState } from "react";

export default function AppMento() {
  const [person, setPerson] = useState({
    name: "james",
    title: "개발자",
    mentors: [
      {
        name: "kdw",
        title: "프론트개발자",
      },
      { name: "dana", title: "백엔드개발자" },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title}){" "}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶으신가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          setPerson((data) => ({
            ...data,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              } else {
                return mentor;
              }
            }),
          }));
        }}
      >
        멘토 이름을 바꾸기
      </button>
    </div>
  );
}
