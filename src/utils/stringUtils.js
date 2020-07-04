// ===== 문자가 몇번 반복되는지 세기
export const repeatCount = (str, delimiter) => {
  return str.split(delimiter).length - 1;
};

// ===== 전화번호 하이픈(-)삽입
export const autoHypenPhone = (_str) => {
  let str = _str.replace(/[^0-9]/g, "");
  let tmp = "";

  if (str.length < 4) {
    return str;
  } else if (str.length < 7) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3);
    return tmp;
  } else if (str.length < 11) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 3);
    tmp += "-";
    tmp += str.substr(6);
    return tmp;
  } else {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 4);
    tmp += "-";
    tmp += str.substr(7);
    return tmp;
  }
};

/**
 * 문자를 클립보드에 복사한다.
 * @param {string} str 복사할 문자열
 */
export const copyClipboard = (str) => {
  const textarea = document.createElement("textarea"); // textarea엘리먼트 생성

  textarea.value = str; // 생성한 엘리먼트에 문자열 입력
  document.body.appendChild(textarea); // document 트리에 생성한 엘리먼트 추가
  textarea.select(); // textarea 선택
  textarea.setSelectionRange(0, 9999); // 문자열 선택
  document.execCommand("copy"); // 선택된 문자열 클립보드에 복사
  document.body.removeChild(textarea); // 생성한 엘리먼트 삭제
};
