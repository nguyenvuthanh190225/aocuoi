// chat
function toggleChatBox(button) {
    var chatBox = document.getElementById("chatBox");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }

    button.classList.toggle("clicked");
}
// chat



// cart
let cart = [];

    function addToCart(buttonElement) {
        const productContainer = buttonElement.closest('.content-gril__colum4');
        const image = productContainer.querySelector('.content-gril__colum-img img').src;
        const productCode = productContainer.querySelector('.masanpham').textContent;
        const priceText = productContainer.querySelector('.gia').textContent;
        const numericPrice = parseFloat(priceText.replace(/[^0-9]/g, ''));

        cart.push({ image, productCode, price: numericPrice });
        renderCart();
    }

    function renderCart() {
        const cartItems = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="Product Image" style="width: 65px;">
                    <p>${item.productCode}</p>
                    <p>${item.price.toLocaleString()} Đ</p>
                    <button onclick="removeFromCart(${index})">Xóa</button>
                </div>
            `;
        });

        totalElement.innerText = `${total.toLocaleString()} Đ`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }

    function clearCart() {
        cart = [];
        renderCart();
    }

    function openCart() {
        document.getElementById('cartModal').style.display = 'flex';
    }

    function closeCart() {
        document.getElementById('cartModal').style.display = 'none';
    }

    window.onclick = function(event) {
        const cartModal = document.getElementById('cartModal');
        if (event.target === cartModal) {
            closeCart();
        }
    }
// cart




// titkec
const items = document.querySelectorAll('.titkec p');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        items.forEach(el => {
            if (el !== item) el.classList.add('hidden');
        });
    });

    item.addEventListener('mouseout', () => {
        items.forEach(el => el.classList.remove('hidden'));
    });
});
/* titkec */



function showContent(category, element) {
    const contentArea = document.getElementById('content-area');
    const productImage = document.getElementById('product-image');
    const buttons = document.querySelectorAll('.tatcasanpham');
    buttons.forEach(button => button.classList.remove('active'));

    element.classList.add('active');
}

//Đăng nhập
document.addEventListener('DOMContentLoaded', function() {
var modal = document.getElementById('auth-modal');
var openLoginBtn = document.getElementById('open-login-btn');
var openRegisterFormBtn = document.getElementById('open-register-form');
var closeModalBtn = document.getElementById('modal__close');
var showRegisterLink = document.getElementById('show-register');
var showLoginLink = document.getElementById('show-login');

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function showLoginForm() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    }

    function showRegisterForm() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    }

    openLoginBtn.addEventListener('click', function() {
        showModal();
        showLoginForm();
    });

    openRegisterFormBtn.addEventListener('click', function() {
        showModal();
        showRegisterForm();
    });

    closeModalBtn.addEventListener('click', hideModal);

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        showRegisterForm();
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        showLoginForm();
    });
});
// đăng nhập

function changeColor(element) {
    // Xóa class 'active' khỏi tất cả các liên kết
    var links = document.querySelectorAll('.modal-size a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Thêm class 'active' vào phần tử được nhấp
    element.classList.add('active');
}


function changeMainImage(element) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = element.src; // Thay đổi hình ảnh chính thành hình ảnh của ảnh nhỏ được nhấp vào
  }

  function toggleImages() {
    var anhphu = document.querySelector('.anhphu');
    var button = document.querySelector('.toggle-button');
    
    // Toggle class 'show-all' for the .anhphu element
    anhphu.classList.toggle('show-all');
    
    // Update button text based on current state
    if (anhphu.classList.contains('show-all')) {
      button.textContent = 'Show Less Images';
    } else {
      button.textContent = 'Show All Images';
    }
  }






//   function openModalthongtinsp() {
//     document.getElementById('productModalsp').style.display = 'block';
//   }

//   function closeModal() {
//     document.getElementById('productModalsp').style.display = 'none';
//   }

//   function changeMainImage(image) {
//     var mainImage = document.getElementById('mainImage');
//     mainImage.src = image.src;
//   }

//   function changeColor(element) {
//     var links = document.querySelectorAll('.sp-modal-size a');
//     links.forEach(link => link.classList.remove('active'));
//     element.classList.add('active');
//   }

function openModalthongtinsp(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function changeMainImage(image) {
    var mainImage = image.closest('.sp-modal-content__img').querySelector('#mainImage');
    mainImage.src = image.src;
}

function changeColor(element) {
    var links = element.closest('.sp-modal-size').querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}





