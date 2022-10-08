import axios from "axios";
import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
//value로 다 변수만들어서 바꾸고 유효성에 따라 집어넣기 가능하게

function SignupForm() {
  // const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");
  //const [name, setName] = useState("");
  const emailValue = "";
  const passwordValue = "";
  const confirmPasswordValue = "";
  const nameValue = "";

  const handleEmail = useCallback(async (e) => {
    if (emailValue.includes("@") && emailValue.includes(".")) {
      await axios
        .post("http://localhost:8080" + "/", { content: emailValue })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handlePassword = useCallback(async (e) => {
    const specialLetter = passwordValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if (passwordValue.length >= 8 && specialLetter >= 1) {
      await axios
        .post("http://localhost:8080" + "/", { password: passwordValue })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handleConfirm = useCallback(async (e) => {
    if (confirmPasswordValue === passwordValue) {
      await axios
        .post("http://localhost:8080" + "/", {
          confirmPassword: confirmPasswordValue,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handleName = useCallback(async (e) => {
    await axios
      .post("http://localhost:8080" + "/", { name: nameValue })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div class="sign">
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <form class="sign email">
        <div>이메일(아이디)</div>
        <input type="text" value={emailValue} onSubmit={handleEmail}></input>
        {!(emailValue.includes("@") && emailValue.includes(".")) && (
          <div> 이메일 형식이 올바르지 않습니다</div>
        )}
      </form>
      <form class="sign password">
        <div>비밀번호</div>
        <input
          value={passwordValue}
          onSubmit={handlePassword}
          placeholder="영문 숫자 특수문자 포함 8자 이상"
        ></input>
        {passwordValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi).length < 1 &&
          passwordValue.length < 8 && (
            <div>
              {" "}
              영문 숫자 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요
            </div>
          )}
      </form>
      <form class="sign confirm">
        <div>비밀번호 확인</div>
        <input value={confirmPasswordValue} onSubmit={handleConfirm}></input>
        {!(confirmPasswordValue === passwordValue) && (
          <div> 비밀번호가 일치하지 않습니다</div>
        )}
      </form>
      <form class="sign name">
        <div>닉네임</div>
        <input value={nameValue} onSubmit={handleName}></input>
      </form>
    </div>
  );
}

export default SignupForm;
