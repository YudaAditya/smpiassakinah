'use strict'

class ArtikelController {
    index({
      request,
      response,
      view
    }) {

      return view.render('artikel', {
        title: 'SMP Islam As Sakinah'
      });
    }
}

module.exports = ArtikelController
