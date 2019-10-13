function fetchFriends() {
  const iframe = document.createElement('iframe');
  const origin = 'http://localhost:3001';
  iframe.src = `${origin}/friends`;
  iframe.style.display = 'none';
  iframe.onload = () => {
    iframe.contentWindow.postMessage({}, origin);
  };
  window.addEventListener('message', event => {
    if (event.origin === origin) {
      renderFriends(event.data.data);
    }
  });
  document.body.appendChild(iframe);
}

function renderFriends(friends) {
  const friendsList = document.querySelector('.friends__list');
  const friendsItemTemplate = document.querySelector('template.friends__item');

  friends.forEach(({ name, age }) => {
    const friendsItem = friendsItemTemplate.content.cloneNode(true);
    friendsItem.querySelector('.friends__item__name').innerText = name;
    friendsItem.querySelector('.friends__item__age').innerText = age;
    friendsList.appendChild(friendsItem);
  });
}

function onFindFriendsClick() {
  fetchFriends();
}

document
  .querySelector('.friends__find')
  .addEventListener('click', onFindFriendsClick);
