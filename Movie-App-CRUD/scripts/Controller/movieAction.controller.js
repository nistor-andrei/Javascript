const yes = document.querySelector(".true");
const params = new URLSearchParams(location.search);
const id = params.get("id");

class MovieAction {
  openModal() {
    const modal = document.querySelector(".modal");
    const section = document.querySelector(".modal-section");
    const no = document.querySelector(".false");

    modal.classList.remove("hidden");

    if (!modal.classList.contains("hidden")) {
      section.style.display = "block";
    }
    no.addEventListener("click", () => {
      modal.classList.add("hidden");
      section.style.display = "none";
    });
  }

  async delete(movieId) {
    let accessToken = localStorage.getItem("accessToken");
    const data = await fetch(`https://movies-app-siit.herokuapp.com/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-Auth-Token": accessToken,
      },
    });
  }
}

const action = new MovieAction();

const deleteButton = document.querySelector("[data-delete-movie]");

deleteButton.addEventListener("click", action.openModal);
yes.addEventListener("click", async function () {
  await action.delete(id);
  location.assign("movies.html?page=11");
});
