if (!localStorage.getItem('token')) {
  window.location.href = '/users/login';
}

(async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('/users/profile', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
    });

    const result = await response.json();

    console.log(result);

    if (!response.ok) {
      alert('Invalid token!');
      window.location.href = '/users/login';
    }
  } catch (error) {
    alert('Invalid token!');
    window.location.href = '/users/login';
  }
})();
