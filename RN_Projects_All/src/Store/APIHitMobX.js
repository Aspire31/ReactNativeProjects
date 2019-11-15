import { observable, action } from 'mobx'
import { Observable } from 'rxjs'

class APIHitMobX {
@observable dataResponse = []
@observable moreDataResponse = []
@observable loader = true

@observable refresh = false

@observable checked = false
@observable checkSelected = []

// @Observable id = Math.random().toString()

@action remove(item){
    this.dataResponse.remove(item)
}  

}

export default new APIHitMobX();