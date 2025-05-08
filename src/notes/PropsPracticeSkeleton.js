import React, { useState } from "react";
import styles from "./css/PropsPractice.module.css";

// UserCard 컴포넌트를 완성하세요
function UserCard(/* EDIT HERE */) {
  return (
    /*************** EDIT START ***************/
    <div className={styles.userCard}>
      <h2>...</h2> {/* name */}
      <p>...</p> {/* age */}
      <p>...</p> {/* likes */}
      {/* button */}
    </div>
  );
  /*************** EDIT END ***************/
}

function PropsPractice(props) {
  /*************** EDIT START ***************/
  // Alice와 Bob의 likes를 위한 state를 선언하세요

  // Alice의 좋아요를 2씩 증가시키는 함수

  // Bob의 좋아요를 1씩 증가시키는 함수

  // useEffect를 사용하여  Bob과 Alice의 좋아요 수가 10이 넘고 동시에 같다면 alert을 띄우세요

  /*************** EDIT END ***************/
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/*************** EDIT START ***************/}
      {/* 각각 UserCard에 맞는 props를 전달하세요 */}
      {/*************** EDIT END ***************/}
    </div>
  );
}

export default PropsPractice;
