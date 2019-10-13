function fetchFriends() {
  const url = 'http://localhost:3001/friends';
  return fetch(url, { mode: 'cors' }).then(res => res.json());
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
  fetchFriends().then(({ data }) => renderFriends(data));
}

document
  .querySelector('.friends__find')
  .addEventListener('click', onFindFriendsClick);
