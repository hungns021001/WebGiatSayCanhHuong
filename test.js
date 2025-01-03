document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById("feedbackForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("http://your-backend-server/api/send-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert("Thank you for your feedback!");
            document.getElementById("feedbackForm").reset();
        } else {
            alert("Failed to send feedback. Please try again later.");
        }
    } catch (error) {
        alert("Error occurred while sending feedback.");
        console.error(error);
    }
});
let currentIndex = 0; // Biến để theo dõi slide hiện tại

// Hàm để thay đổi slide
function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Xóa class active khỏi tất cả các slide và dot
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Thêm class active cho slide và dot tương ứng
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Di chuyển slider đến vị trí phù hợp
    const slider = document.querySelector('.slider-images');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Hàm tự động chuyển slide sau mỗi vài giây
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3; // Chuyển đến slide tiếp theo (3 là số lượng slide)
    currentSlide(currentIndex);
}, 3000); // Chuyển slide mỗi 3 giây