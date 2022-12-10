// 버튼 클릭
// function HelloWorldButton() {
//   const [isClick, setClickState] = React.useState("It's not clicked");
//   console.log(isClick);

//   return React.createElement("button", { onClick: () => setClickState("It's clicked") }, isClick);
// }

// 클릭이 되면 버튼의 문구가 변경되도록
function HelloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "It's clicked" : "It's not clicked";
  //   console.log(isClick);

  return React.createElement(
    "button",
    { onClick: () => setClickState(!isClick) },
    React.createElement("div", null, React.createElement("span", null, text))
  );
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));
