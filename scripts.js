const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in-view"));
}

const supportForm = document.querySelector("#support-form");
const waitlistForm = document.querySelector("#waitlist-form");

if (supportForm) {
  supportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = supportForm.querySelector("#name").value.trim();
    const email = supportForm.querySelector("#email").value.trim();
    const message = supportForm.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please complete all fields before sending your message.");
      return;
    }

    const subject = encodeURIComponent("Tomocalendar support request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:origincosupport@gmail.com?subject=${subject}&body=${body}`;
  });
}

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = waitlistForm.querySelector("#waitlist-email").value.trim();

    if (!email) {
      alert("Please enter your email to join the waitlist.");
      return;
    }

    const subject = encodeURIComponent("Tomo Calendar waitlist");
    const body = encodeURIComponent(`Email: ${email}`);

    window.location.href = `mailto:origincosupport@gmail.com?subject=${subject}&body=${body}`;
  });
}
