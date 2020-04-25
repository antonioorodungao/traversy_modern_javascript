const Page = function () {
  //   this.state = new Home();
  this.init = function () {
    this.change(new Home());
  };
  this.change = function (page) {
    this.state = page;
  };
};

const Home = function () {
  const display = document.querySelector("#display");
  display.innerHTML = `      <div class="display-4">Home</div>
    <lead
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis
      minima minus perferendis vitae assumenda enim libero deleniti
      consequatur quisquam?</lead
    > `;
};

const About = function () {
  const display = document.querySelector("#display");
  display.innerHTML = `      <div class="display-4">About</div>
      <lead
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis
        minima minus perferendis vitae assumenda enim libero deleniti
        consequatur quisquam?</lead
      > `;
};

const ContactUs = function () {
  const display = document.querySelector("#display");
  display.innerHTML = `      <div class="display-4">Contact Us</div>
      <lead
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis
        minima minus perferendis vitae assumenda enim libero deleniti
        consequatur quisquam?</lead
      > `;
};

const page = new Page();
page.init();
const about_state = document.querySelector("#about");
const contactus_state = document.querySelector("#contactus");
const home_state = document.querySelector("#home");

about_state.addEventListener("click", (e) => {
  page.change(new About());
});

contactus_state.addEventListener("click", (e) => {
  page.change(new ContactUs());
});

home_state.addEventListener("click", (e) => {
  page.change(new Home());
});
