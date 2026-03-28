function scrollToBooking() {
    document.getElementById("booking").scrollIntoView
    ({behavior: "smooth" });
}
function bookNow(e) {
    e.preventDefault();
    alert("Booking submitted successfully!");
}
function contactForm(e) {
    e.preventDefault();
    alert("Message sent successfully!");
}
function toggleMenu(){
    // document.querySelector(".nav-wrap-mobile").style.display = "flex";
    document.querySelector(".nav-wrap-mobile").classList.toggle("d-none");
}
//show pop up after 3 seconds
setTimeout(() => {
    document.getElementById("promo-popup").style.display ="flex";
}, 3000);

//close pop up
function closePopup() {
    document.getElementById("promo-popup").style.display = "none";
}
function rate(value) {
    const stars = 
    document.querySelectorAll("#star-container span");
    const text = 
    document.getElementById("rating-text");

    stars.forEach((star, index) => {
        if(index < value) {

            star.classList.add("active");
        }else{
            star.classList.remove("active");
        }
    });
    text.innerHTML = "You rated "  + value + "star(s) &#9733; ";
}

const faqItems = 
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
});
});
