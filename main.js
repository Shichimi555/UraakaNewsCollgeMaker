var form = document.getElementById('fileform');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // フォームが自動的に送信されるのを防止する

  var fileInput = form.elements['fileInput'];
  var file = fileInput.files[0]; // 選択されたファイルを取得する

  try{
    var reader = new FileReader();
    reader.readAsDataURL(file); // ファイルを読み込む
      
  }catch(error){
    if (error instanceof TypeError){
      alert('画像を選択してください');
      const inputfile = document.getElementById('InputFile');
      inputfile.value = '';
    }else{
      console.log(error);
      alert('エラーが発生しました。もう一度お試しください。')
      const inputfile = document.getElementById('InputFile');
      inputfile.value = '';
    }
    return;
  }

  reader.onload = function() {
    var fileContent = reader.result;
    var imgData = fileContent;

    try{
      var canvas = document.getElementById('created');
      canvas.remove();
    }catch(e){
      // console.log('新規作成')
      ;
    }

    var backgroundImage = new Image();
    backgroundImage.src = "background1.png";


    var image = new Image();
    image.src = fileContent;

    backgroundImage.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      canvas.id = 'created';
      canvas.style.width = 'auto';
      canvas.style.height = '60%';
      var ctx = canvas.getContext("2d");
      const contentWidth = document.documentElement.clientWidth;
      ctx.drawImage(backgroundImage, 0, 0);

      var x = 10;
      var y = 10;

      try{
      ctx.drawImage(image, x, y);
      
      }catch(error){
        if (error instanceof DOMException){
        console.log(error);
        alert('pngファイルかjpgファイルを選択してください');
        const inputfile = document.getElementById('InputFile');
        inputfile.value = '';
        }else{
          console.log(error);
          alert('エラーが発生しました。もう一度お試しください。');
          const inputfile = document.getElementById('InputFile');
          inputfile.value = '';
        }
      // ここで処理終了
        return;
      }

      document.body.appendChild(canvas);
      
      try{
        var alreadyButton = document.getElementById('download');
        alreadyButton.parentNode.removeChild(alreadyButton);
      }catch(e){
        ; // 無視

      }

      var againstForm = document.querySelector('.buttonform')
      var download = document.createElement("button");
      download.type = 'submit';
      download.classList.add('input');
      download.id = 'download';
      download.textContent = 'Download';
      againstForm.appendChild(download);

    };
  }
});


var buttons = document.getElementById("buttonform");

buttons.addEventListener('submit', function(event){
  event.preventDefault();
  const buttonId = event.submitter.id; // クリックされたbuttonのidを取得
  if (buttonId=='delete'){
    try{
      canvas = document.getElementById('created');
      canvas.remove();
    }catch(e){
      alert('画像がありません');
    }
    try{
      var alreadyButton = document.getElementById('download');
      alreadyButton.parentNode.removeChild(alreadyButton);
    }catch(e){
      ; // 無視
    }
  }else{
    alert('調整中です。画像を右クリックか長押しして画像を保存してください。');
    
    
  }
  return;
  
});

