import React, { useEffect, useState } from "react";
import styles from "../css/PropsPractice.module.css";

// UserCard 컴포넌트를 완성하세요
function UserCard({ name, age, likes, onLike }) {
  /*************** EDIT START ***************/
  return (
    <div className={styles.userCard}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Likes: {likes}</p>
      <button className={styles.button} onClick={onLike}>
        좋아요 ❤️
      </button>
    </div>
  );
  /*************** EDIT END ***************/
}

function PropsPractice(props) {
  /*************** EDIT START ***************/
  // Alice와 Bob의 likes를 위한 state를 선언하세요
  const [aliceLikes, setAliceLikes] = useState(0);
  const [bobLikes, setBobLikes] = useState(0);

  // Alice의 좋아요를 2씩 증가시키는 함수
  const increaseAliceLikes = () => {
    setAliceLikes(aliceLikes + 2);
  };
  // Bob의 좋아요를 1씩 증가시키는 함수
  const increaseBobLikes = () => {
    setBobLikes(bobLikes + 1);
  };
  // useEffect를 사용하여  Bob과 Alice의 좋아요 수가 10이 넘고 동시에 같다면 alert을 띄우세요
  useEffect(() => {
    if (bobLikes > 10 && aliceLikes > 10 && bobLikes === aliceLikes) {
      alert("Bob과 Alice의 좋아요 수가 같아요!");
    }
  }, [bobLikes, aliceLikes]);
  /*************** EDIT END ***************/
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/*************** EDIT START ***************/}
      {/* 각각 UserCard에 맞는 props를 전달하세요 */}
      <UserCard
        name="Alice"
        age={30}
        likes={aliceLikes}
        onLike={increaseAliceLikes}
      />
      <UserCard
        name="Bob"
        age={22}
        likes={bobLikes}
        onLike={increaseBobLikes}
      />
      {/*************** EDIT END ***************/}
    </div>
  );
}

export default PropsPractice;
