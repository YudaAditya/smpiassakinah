'use strict'

class ProfileController {
    index({
      request,
      response,
      view
    }) {

      return view.render('profile-sekolah', {
        title: 'SMP Islam As Sakinah'
      });
    }
}

module.exports = ProfileController
