const shareLink = document.querySelector('#share-link')
const link = {
  title: "WebDevJev linktree",
  text: "Thank you for sharing my links!",
  url: 'https://jevonthompsonx.github.io/LinkTree-Clone/',
};

shareLink.addEventListener('click', (e)=> {
    e.preventDefault();
    try {
    navigator.share(link)
    } catch {
      navigator.clipboard.writeText(link.url)
    }
} )

