const button = document.querySelector(".btn");
const container = document.getElementById("container");
console.log(container);

button.addEventListener("click", async () => {
  try {
    // Make a GET request to the API
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // Do something with the data returned from the API
    console.log(data);
    container.innerHTML = `
    <p id="advice" class="text-secondaryColor text-center my-4 text-[14px]">ADVICE #${data.slip.id}</p>
    <p class="text-primaryColor text-center desktop:text-primarySize mobile:text-[20px]" id="quote">"${data.slip.advice}"</p>
  `;
  } catch (error) {
    console.error(error);
  }
});
