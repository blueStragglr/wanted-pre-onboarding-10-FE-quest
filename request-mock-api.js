(async function () {
  const res = await fetch(
    "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
    { method: "GET" }
  );
  const data = await res.json();

  const dummyItemArray = data.map((item) => {
    const $dummyItem = document.createElement("li");
    $dummyItem.id = item.id;
    $dummyItem.innerText = item.name;

    return $dummyItem;
  });

  const $dummyList = document.querySelector("#dummy-list");

  $dummyList.append(...dummyItemArray);
})();
