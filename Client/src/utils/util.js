export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);

  return product;
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);

  if (scroll) window.scrollTo(0, 0);
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
export function deleteMessage(message, scroll = true) {
  const del = document.createElement("div");
  del.classList.add("del");
  del.innerHTML = `<p>${message}</p><span>X</span>`;

  del.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(del);

  if (scroll) window.scrollTo(0, 0);
  setTimeout(() => {
    del.style.display = "none";
  }, 3000);
}

export async function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export async function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// export function deleteMessage(message, scroll = true) {
//   const del = document.createElement("div");
//   del.classList.add("del");
//   del.innerHTML = `<p>${message}</p><span>X</span>`;

//   del.addEventListener("click", function (e) {
//     if (e.target.tagName == "SPAN") {
//       main.removeChild(this);
//     }
//   });
// }
