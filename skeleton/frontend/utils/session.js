// 01_session_api_util --- All of the method needed to make a request to our backend to sign up and user, login a user, and log a user out


export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const postSession = user => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user },
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);