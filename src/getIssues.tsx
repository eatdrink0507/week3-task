import axios from 'axios';

export default function getIssues(
  pagenum: number,
  data: Array<any>,
  setData: Function,
  setLoading: Function,
) {
  const result = [...data];
  setLoading(true);
  axios
    .get(`${process.env.REACT_APP_URL}&per_page=10&page=${pagenum}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then(res => {
      result.push(...res.data);
      setData(result);
      setLoading(false);
    });
}
