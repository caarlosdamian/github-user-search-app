import axios from "axios";

export const getData = async (user) => {
  const response = await axios.get(
    `https://api.github.com/users/${user}`
  );
  const { data } = await response;
  console.log(data);
  return data;
};
