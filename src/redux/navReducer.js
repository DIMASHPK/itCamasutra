const initialState = [
  {
    src:
      "http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg",
    name: "Dasha"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJKZr5nc9-hK8l9aiayxzjQt8cqUmQxl6hvZ7POtKwaAY-Bd6&s",
    name: "Sasha"
  },
  {
    src:
      "https://img2.akspic.ru/fit/98580-karibskij_bassejn-more-otpusk-den-krasota-x750.jpg",
    name: "Stas"
  }
];

const navReducer = (state = initialState, action) => {
  return [...state];
};

export default navReducer;
