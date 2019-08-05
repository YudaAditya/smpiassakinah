'use strict'

class UserController {
    
    /**
     * Display a listing of the resource.
     */
    index({request, response, view}) {
       return view.render('admin.layout.main-admin');
    }
    
}

module.exports = UserController
