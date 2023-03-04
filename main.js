// buttonをクリックするとアラートを出す
const button = document.getElementById('send');
// button.addEventListener("click", function() {
//     alert("hello");
// })


// fileInput.addEventListener('change', (event) => {
button.addEventListener("click",function(){

    const formElements = document.forms.sendform;
    // alert(formElements);
    formElements.text.value = '';
    console.log('Text: ', formElements.text.value);
    alert("sus")


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
});


// function submitForm() {
//     var form = document.getElementById('myForm');
//     var firstName = form.elements['firstName'].value;
//     var lastName = form.elements['lastName'].value;
//     var email = form.elements['email'].value;
    
//     // 取得した値を使って何らかの処理を行う
//     console.log(firstName, lastName, email);
//   }

var form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // フォームが自動的に送信されるのを防止する
  
  var firstName = form.elements['firstName'].value;
  var lastName = form.elements['lastName'].value;
  var email = form.elements['email'].value;
  
  // 取得した値を使って何らかの処理を行う
  console.log(firstName, lastName, email);
});

