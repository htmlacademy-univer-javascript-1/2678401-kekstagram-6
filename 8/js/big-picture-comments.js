const renderComment = function (commentBlock, commentTemplate, comment) {
  const commentElement = commentTemplate.cloneNode(true);

  const commentImg = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name || 'Аватар комментатора';
  commentText.textContent = comment.message;

  commentBlock.appendChild(commentElement);
};

export const renderComments = function (bigPicture, comments) {
  const commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = comments.length;

  const commentBlock = bigPicture.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');
  commentBlock.innerHTML = '';

  for (let i = 0; i < comments.length; i++) {
    renderComment(commentBlock, commentTemplate, comments[i]);
  }

  // todo в след домашнем задании поправим
  const commentCount = bigPicture.querySelector('.social__comment-count');
  commentCount.classList.add('hidden');

  // todo в след домашнем задании поправим
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');
};
