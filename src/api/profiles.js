import axios from 'axios';
import qs from 'qs';

const PROFILENODESERV = 'http://localhost:8083';

export async function createStudent(studentObj) {
  const body = { studentObj };

  const options = {
    method: 'POST',
    url: PROFILENODESERV.concat('/students'),
    body,
  };

  axios(options)
    .then((resp) => {
      console.log(resp.response.data());
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function getStudent(studentEmail) {
  const options = {
    method: 'GET',
    url: PROFILENODESERV.concat('/students'),
    params: qs.stringify({
      id: studentEmail
    })
  };

  axios(options)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}
