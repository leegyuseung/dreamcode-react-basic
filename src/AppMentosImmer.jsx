import React from "react";
import { useImmer } from "use-immer";

export default function AppMentosImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶으신가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`이름을 입력하세요`);
    const title = prompt(`타이틀을 입력하세요`);
    updatePerson((person) =>
      person.mentors.push({
        name,
        title,
      })
    );
  };

  const handleDelete = () => {
    const name = prompt(`삭제할 이름을 입력하세요`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index < 0) return;
      person.mentors.splice(index, 1);
    });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "james",
  title: "개발자",
  mentors: [
    {
      name: "kdw",
      title: "프론트개발자",
    },
    { name: "dana", title: "백엔드개발자" },
  ],
};
