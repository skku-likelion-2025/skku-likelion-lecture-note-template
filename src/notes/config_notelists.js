import ApiPractice from "./list/ApiPractice";
import PropsPractice from "./list/PropsPractice";
import Note1 from "./list/Note1";
import Note2 from "./list/Note2";

export const notelists = {
  1: {
    title: "Lecture Note 1",
    description: "리액트의 useState 훅을 사용한 카운터 예제입니다.",
    page: <Note1 />,
    date: "2024-08-31",
  },
  2: {
    title: "Lecture Note 2",
    description: "fetch을 알아보고 해봅시다.",
    page: <ApiPractice />,
    date: "2025-04-10",
  },
  3: {
    title: "Lecture Note 3",
    description: "Props Practice",
    page: <PropsPractice />,
    date: "2025-05-01",
  },
  2: {
    title: "Lecture Note 2",
    description: "API와 useState를 사용한 예제",
    page: <Note2 />,
    date: "2025-04-10",
  },
};
