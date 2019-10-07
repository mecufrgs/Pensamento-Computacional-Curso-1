import AvaMECApiConsts from '../constants/avaMECApiConstants'
import LocalStorageUtils from './localStorageUtils'

class PaginationUtils {

    getPath(){
        let path = window.location.pathname
        //Get '/AVAMEC/...'  from the pathname
        path = path.substr(window.location.pathname.search(AvaMECApiConsts.MAIN_PATH) )

        //Get the avamec id, '/id/', located after '/AVAMEC/'
        const id_first_bar_location = path.search('/')
        path = path.substr(id_first_bar_location).substr(1)
        const id_last_bar_location = path.search('/')
        const avamec_id = path.substr(0,id_last_bar_location)

        return avamec_id + '/' 
               + AvaMECApiConsts.FIRST_PATH 
               + LocalStorageUtils.getOpenUnit()  
               + AvaMECApiConsts.SECOND_PATH 
               + LocalStorageUtils.getOpenPage() 
               + AvaMECApiConsts.FINISH_OF_PATH
    }

}

const paginationUtils = new PaginationUtils()

export default paginationUtils

