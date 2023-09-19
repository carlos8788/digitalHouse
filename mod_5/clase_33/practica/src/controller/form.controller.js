const formController = {
    form: (req, res) => {
        console.log(req.body);
        res.render('formulario', {data: req.body, errors: undefined});
      },
    postForm: (req, res) => {
      return res.render('formulario');
    }
}


module.exports = formController;

module.exports = formController