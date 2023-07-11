import axios from 'axios';

export default function getIssues(
  per: number,
  pagenum: number,
  setData: Function,
) {
  axios
    .get(`${process.env.REACT_APP_URL}&per_page=${per}&page=${pagenum}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then(res => {
      setData(res.data);
    });
}
