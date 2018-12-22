export class Device {
    /*private type: number
    private manu: string

    constructor(
        type : number,
        manu : string
    ) {
        this.type = type
        this.manu = manu
    }*/

    constructor(
        private type: number = 100,
        private manu: string =  'IN'
    ) { }

    whatType() {
        return this.type
    }

    contactManu() {
        return this.manu
    }

    setType(type ?: number) {
        this.type = type
    }
}

let dv: Device = new Device()
dv.setType()