// Renderizando el login

let userController = {
    loginUser: function (req, res) {
        res.render('login');
    }
}


// Parámetros compartidos

let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
let carritoController = {
    checkout: function (req, res) {
        res.render('checkout', { 'items': productos });
    }
}