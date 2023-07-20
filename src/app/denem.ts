abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi");
    }
    abstract hesapla():void;

}

class TuketiciKredi extends KrediBase{
    constructor(){
        super()
    }
    override hesapla(): void {
        console.log("denem1")
    }
}

class MorgecKredi extends KrediBase{
    constructor(){
        super();
    }
    override hesapla(): void {
        console.log("denem2")
    }
}
//option-1
let tuketiciKredi = new TuketiciKredi;
let morgecKredi = new MorgecKredi;
//option-2
// let kredi: KrediBase;
// kredi = new TuketiciKredi();
// kredi = new MorgecKredi();
// kredi.hesapla
let a = new KrediBase;


