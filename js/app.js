    // VARIABLES //

    let drink1 = new Drink(1, "huevito", "Lourdes", 600, ["mate", "huevito", "yerba", "arte", "emprendimiento"]);
    let drink2 = new Drink(2, "Hexagonal", "Lourdes", 650, ["mate", "hexagonal", "yerba", "arte", "emprendimiento", "novedad"]);
    let drink3 = new Drink(3, "bocon", "Lourdes", 650, ["mate", "bocon", "yerba", "arte", "emprendimiento"]);
    let drink4 = new Drink(4, "tabla", "Lourdes", 500, ["emprendimiento", "tabla", "sushi", "japon", "china"]);
    let drink5 = new Drink(5, "palitos", "Lourdes", 450, ["emprendimiento", "palitos", "sushi", "japon", "china"]);



    // Aun no se, si hare una barra de busqueda, y si usare una api de mercado libre
    //const apiKey;
    //let search;
    //
    let shopingCart = new ShoppingCart();
    let totalPrice = 0;

    //FUNCION DE PRODUCTO //

    function Drink(id, type, artist, price, tags) {
        this.id = id;
        this.type = type;
        this.artist = artist;
        this.price = price;
        this.tags = tags;
    }

    //CARRITO DE COMPRAS //

    function ShoppingCart() {
        let cart = [];

        this.add = function(product) {
            cart.push(product);
        }

        this.remove = function(id) {
            cart.splice(id, 1);
        }

        this.get = function() {
            return cart;
        }

        this.getById = function(id) {
            let product = [];
            cart.forEach(function(currentProduct) {
                if (currentProduct.id === id) {
                    product.push(currentProduct);
                }
            });
            return product;
        }
    }

    shopingCart.add(drink1);
    shopingCart.add(drink2);
    shopingCart.add(drink3);
    shopingCart.add(drink3);
    shopingCart.add(drink4);
    shopingCart.add(drink5);


    shopingCart.remove(3);

    let contentShoppingCart = shopingCart.get();
    contentShoppingCart.forEach(function(item, i) {
        console.log(`${item.type} ${item.price}`);
    });

    let cartPrices = shopingCart.get();
    cartPrices.forEach(function(item, i) {
        return totalPrice = totalPrice + item.price;
    });

    /*Boton ir Arriba */

    $('.up-web').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.up-web').slideDown(300);
        } else {
            $('.up-web').slideUp(300);
        }
    });

    /* Variables de eventos */

    const icono = document.querySelector('#i-secure'),
        iconoDos = document.querySelector('#i-price'),
        iconoTres = document.querySelector('#i-time'),
        contacto = document.getElementById('btn-open-form');

    icono.addEventListener('click', () => {
        icono.classList.toggle('active');
    })

    iconoDos.addEventListener('click', () => {
        iconoDos.classList.toggle('active');
    })

    iconoTres.addEventListener('click', () => {
        iconoTres.classList.toggle('active');
    })

    contacto.addEventListener('click', () => {
        contacto.classList.toggle('active');
    })

    function openForm() {
        const openForm = document.getElementById('contact-form');
        openForm.style.display = 'block';
        return true;
    }

    function closeForm() {
        const closeForm = document.getElementById('contact-form');
        closeForm.style.display = 'none';
        return true;
    }