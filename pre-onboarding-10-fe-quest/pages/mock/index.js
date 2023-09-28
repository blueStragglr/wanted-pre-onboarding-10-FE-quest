export default function MockPage() {
  const onClickFetch = () => {
    fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        tasks.forEach((task) => {
          const li = document.createElement("li");
          li.innerHTML = `${task.id} ${task.name}`;
          document.querySelector("ul").appendChild(li);
        });
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <>
      <button
        style={{
          width: "15rem",
          height: "3rem",
          backgroundColor: "#f0f0f0",
          border: "none",
          borderRadius: "5px",
          marginBottom: "1rem",
        }}
        onClick={onClickFetch}
      >
        Fetch Button
      </button>
      <div>
        <ul></ul>
      </div>
    </>
  );
}
