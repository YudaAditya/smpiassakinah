'use strict'

class KontakController {
    index({
      request,
      response,
      view
    }) {

      return view.render('kontak', {
        title: 'SMP Islam As Sakinah'
      });
    }
}

module.exports = KontakController
