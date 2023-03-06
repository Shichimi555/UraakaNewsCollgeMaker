// // fileInput.addEventListener('change', (event) => {
// button.addEventListener("click",function(){

//     const formElements = document.forms.sendform;
//     // alert(formElements);
//     formElements.text.value = '';
//     console.log('Text: ', formElements.text.value);
//     alert("sus")


//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (event) => {
//         const image = new Image();
//         image.src = event.target.result;

//         alert("hello")
//         // 画像を合成する処理を実行する
//         const background = document.getElementById('background');
//         const overlay = document.createElement('img');
//         overlay.src = event.target.result;
//         overlay.addEventListener('load', () => {
//             const canvas = document.createElement('canvas');
//             canvas.width = background.width;
//             canvas.height = background.height;
//             const context = canvas.getContext('2d');
//             context.drawImage(background, 0, 0);
//             context.drawImage(overlay, 0, 0);
//             const result = canvas.toDataURL('image/jpeg');
//             // 合成した画像を表示するなどの処理を実行する

//             const resultImage = document.createElement('img');
//             resultImage.src = result;
//             document.body.appendChild(resultImage);

//         });

//   };
// });


var form = document.getElementById('fileform');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // フォームが自動的に送信されるのを防止する
  
  var firstName = form.elements['firstName'].value;
  var lastName = form.elements['lastName'].value;
  var email = form.elements['email'].value;
  
  var fileInput = form.elements['fileInput'];
  var file = fileInput.files[0]; // 選択されたファイルを取得する
  var filer = fileInput.files;

  var reader = new FileReader();
  reader.readAsDataURL(file); // ファイルを読み込む
  
  reader.onload = function() {
    var fileContent = reader.result;
    var type = filer[0].type;

    // ファイルの内容を使って何らかの処理を行う
    console.log(firstName, lastName, email, fileContent);

    var name = filer[0].name;
    var size = filer[0].size;
    var type = filer[0].type;

    var items = [name,size,type];


    if (type=="image/png"){
      console.log("png");
    }else if (type=="image/jpeg"){
      console.log("jpeg")
    }else{
      console.log("error");
      alert("pngかjpgファイルを指定してください")
    }

    var imgData = fileContent;
    var img = new Image();
    // var text = type; // 表示したい文字列


    img.onload = function() {
      try{
        var result_type = document.getElementById('details');
        result_type.remove();
        var canvas = document.getElementById('preview'); //もともとの画像を削除
        canvas.remove();
      }catch(Exception){
        console.log(e)
        console.log("エラーが発生しました。もう一度お試しください。");
      }finally{
        var div = document.createElement("div"); // div要素を作成

        
        for(let i = 0 ; i < items.length ; i++){
          var p = document.createElement("p");
          console.log(items[i]);
          p.textContent = items[i]; // div要素にテキストを挿入
          p.id = 'pre';
          div.appendChild(p);
        }

        div.id = 'details'
        document.body.appendChild(div); // body要素の子要素としてdiv要素を追加

        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.id = "preview";

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        document.body.appendChild(canvas); // 画像を表示する
      }

      
    };

    img.src = imgData;

    

  };
});



form.addEventListener('submit', function(event) {
  event.preventDefault(); // フォームが自動的に送信されるのを防止する
  
  try{
    var canvas = document.getElementById('created')
    canvas.remove()
  }catch(e){
    console.log('新規作成')
  }

  var backgroundImage = new Image();
  backgroundImage.src = "background1.png";

  var image = new Image();
  image.src = "background2.png";

  backgroundImage.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = backgroundImage.width;
    canvas.height = backgroundImage.height;
    canvas.id = 'created'
    var ctx = canvas.getContext("2d");
    ctx.drawImage(backgroundImage, 0, 0);
    var x = 10;
    var y = 10;
    ctx.drawImage(image, x, y);
    document.body.appendChild(canvas);
  };
});
