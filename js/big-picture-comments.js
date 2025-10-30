const COMMENTS_PER_PAGE = 5;

let commentsShown = 0;
let actualComments = [];

const renderComment = function (commentBlock, commentTemplate, comment) {
  const commentElement = commentTemplate.cloneNode(true);

  const commentImg = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name || 'Аватар комментатора';
  commentText.textContent = comment.message;

  commentBlock.appendChild(commentElement);
};

const loadMoreComments = function (bigPicture) {
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const commentBlock = bigPicture.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');

  const previousCommentsShown = commentsShown;
  commentsShown = Math.min(commentsShown + COMMENTS_PER_PAGE, actualComments.length);

  for (let i = previousCommentsShown; i < commentsShown; i++) {
    renderComment(commentBlock, commentTemplate, actualComments[i]);
  }

  const commentsCount = bigPicture.querySelector('.social__comment-count');
  commentsCount.textContent = `${commentsShown} из ${actualComments.length}`;

  if (commentsShown >= actualComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

export const renderComments = function (bigPicture, comments) {

  actualComments = comments;
  commentsShown = Math.min(COMMENTS_PER_PAGE, actualComments.length);

  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const commentBlock = bigPicture.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');

  commentBlock.innerHTML = '';

  for (let i = 0; i < commentsShown; i++) {
    renderComment(commentBlock, commentTemplate, actualComments[i]);
  }

  const commentsCount = bigPicture.querySelector('.social__comment-count');
  commentsCount.textContent = `${commentsShown} из ${actualComments.length}`;

  if (commentsShown >= actualComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.onclick = () => {
      loadMoreComments(bigPicture);
    };
  }
};
