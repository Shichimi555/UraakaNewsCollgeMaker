// buttonをクリックするとアラートを出す
// const button = document.getElementById('send');
// button.addEventListener("click", function() {
//     alert("hello");
// })


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


// function submitForm() {
//     var form = document.getElementById('myForm');
//     var firstName = form.elements['firstName'].value;
//     var lastName = form.elements['lastName'].value;
//     var email = form.elements['email'].value;
    
//     // 取得した値を使って何らかの処理を行う
//     console.log(firstName, lastName, email);
//   }

// var form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // フォームが自動的に送信されるのを防止する
  
//   var firstName = form.elements['firstName'].value;
//   var lastName = form.elements['lastName'].value;
//   var email = form.elements['email'].value;
//   // var InputFile = form.files[1];
//   let files = form.files;

//   for(let i = 0 ; i < files.length ; i++){
//       console.log(files[i].name);
//   }
  
//   // 取得した値を使って何らかの処理を行う
//   console.log(form.elements.value);
//   console.log(firstName, lastName, email);
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
    // ファイルの内容を使って何らかの処理を行う
    console.log(firstName, lastName, email, fileContent);

    for(let i = 0 ; i < filer.length ; i++){
      console.log((i + 1) + '番目のファイル');
      console.log('name: ' + filer[i].name);
      console.log('size: ' + filer[i].size);
      console.log('type: ' + filer[i].type);
    }
    console.log(filer[0].name);
    // console.log(filer);

    var type = filer[0].type;

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

    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      document.body.appendChild(canvas); // 画像を表示する
    };

    img.src = imgData;

  };
});


// //サンプルコード2
// var num = 3;//判定に使う数字
// var special = true; //スペシャルゲストかどうかを判断するフラグ
// if (num == 6 ||special == true){
//     console.log("おめでとうございます。あたりです。");
//         //numが6の時またはspecialがtrueの時「あたり」を表示する。
// }else{
//     console.log("はずれです。");
//         //ifの条件に当てはまらない時に「はずれ」を表示する。
// }

