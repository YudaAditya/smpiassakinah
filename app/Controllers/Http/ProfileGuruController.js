'use strict'

class ProfileGuruController {
    index({
      request,
      response,
      view
    }) {

      return view.render('profile-guru', {
        title: 'SMP Islam As Sakinah'
      });
    }
}

module.exports = ProfileGuruController
