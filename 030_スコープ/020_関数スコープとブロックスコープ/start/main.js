//関数スコープ
function a() {
    let b = 1
    console.log(1)
}
a();


//ブロックスコープ
//ブロックスコープは必ずletかconstを定義する
//またスコープ外に実行をするとエラーが発生する

//ブロックスコープ内で関数スコープを使用する場合は、実行をスコープ内でも外でもどちらでもできる


{
    const b = function(){
        let c = 3 + 7
        console.log(c)
    }

    function d (){
        let e = 13 + 7
        console.log(e)
    }


    b();
}
d();
