/**
 * Created by Nikita on 3/10/17.
 */

'use strict';

export default {
    save(storageName, data){
       localStorage.setItem(storageName, JSON.stringify(data))
    },
    fetch(storageName){
        return localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : null
    }
}