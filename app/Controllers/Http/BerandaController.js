'use strict'

class BerandaController {
    index({request, response, view}){
        
        return view.render('beranda',{
            title: 'SMP Islam As Sakinah'
        });
    }
}

module.exports = BerandaController
