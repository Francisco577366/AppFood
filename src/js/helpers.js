import { async } from 'regenerator-runtime';
<<<<<<< HEAD
import { TIMEOUT_SEC } from './config.js';
=======
import { TIMEOUT_SEC } from './views/config';
import { getJSON, sendJSON } from './helpers.js';
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

<<<<<<< HEAD
/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

=======
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
<<<<<<< HEAD

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
=======
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    //1) Cargando los datos
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
<<<<<<< HEAD
*/
=======
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
