function errorInput(){

    console.log(document.getElementById("month").value)

    console.log(document.getElementById("day").value)


    const month = document.getElementById("month").value;

    const day =document.getElementById("day").value


    console.log("month:",month,"day:",day)

}

//document.getElementById("month")はタグを確認するだけ

//valueはそのタグの値を示す

/*

javascriptのプログラムとHTMLファイルは、どこで対応しているか
タグについているIDで紐づく。
タグの中にあっる付加情報のことを属性という。
console.log()はC言語でいうところのprintf();です。

*/


