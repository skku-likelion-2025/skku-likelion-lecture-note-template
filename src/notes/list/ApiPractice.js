import React, { useState } from "react";
import styles from "../css/ApiPractice.module.css"; // CSS 모듈 불러오기

function ApiPractice() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postResponse, setPostResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchUser = () => {
    const id = Number(userId);
    if (!id || id < 1 || id > 10) {
      setError("유저 ID는 1부터 10 사이 숫자여야 해요.");
      return;
    }

    setError(null);
    setUser(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("해당 유저를 찾을 수 없습니다.");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  };

  const handleCreatePost = () => {
    if (!postTitle || !postBody) {
      setError("제목과 내용을 모두 입력해주세요.");
      return;
    }

    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostResponse(data);
        setPostTitle("");
        setPostBody("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📡 API 연습: GET + POST</h1>

      <div className={styles.section}>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="유저 ID (1 ~ 10)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleFetchUser} className={styles.button}>
          유저 조회 (GET)
        </button>

        {user && (
          <div className={styles.card}>
            <p>
              <strong>이름:</strong> {user.name}
            </p>
            <p>
              <strong>이메일:</strong> {user.email}
            </p>
            <p>
              <strong>회사:</strong> {user.company.name}
            </p>
          </div>
        )}
      </div>

      <hr />

      <div className={styles.section}>
        <input
          type="text"
          placeholder="게시글 제목"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="게시글 내용"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className={styles.textarea}
          rows="4"
        />
        <button onClick={handleCreatePost} className={styles.button}>
          게시글 작성하기 (POST)
        </button>
      </div>

      {postResponse && (
        <div className={`${styles.response} ${styles.success}`}>
          게시글이 생성되었습니다! ID: {postResponse.id}
        </div>
      )}

      {error && (
        <div className={`${styles.response} ${styles.error}`}>
          오류: {error}
        </div>
      )}
    </div>
  );
}

export default ApiPractice;
