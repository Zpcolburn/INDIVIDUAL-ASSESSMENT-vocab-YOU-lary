const renderToDOM = (divId, content) => {
  console.warn(divId, content);
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

export default renderToDOM;
