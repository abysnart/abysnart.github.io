const _templates = {
  homepage() {
    return `
      <h1 class="text-center f08">Luyện tập tính toán tư duy</h1>
      <main>
        <section class="dflex mt20">
          <div class="score-holder f2">
            <i class="sc sc-star sc-still scale08"></i>
            <span class="score-number"></span>
          </div>
          <select id="pick-level" class="f05">
            <option value="all">Các mức độ</option>
            <option value="basic">Cơ bản</option>
            <option value="advance">Nâng cao</option>
            <option value="logic" disabled>Tư duy</option>
            <option value="english-basic" disabled>Tiếng Anh - Cơ bản</option>
            <option value="english-advance" disabled>Tiếng Anh - Nâng cao</option>
          </select>
        </section>

        <section>
          <article class="card-big bg-yellow">
            <span class="title f2">Đếm và nhận biết</span>
            <span class="text f05">Học đếm và nhận biết hình ảnh</span>
            <button data-grade="a" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
          <article class="card-big bg-green">
            <span class="title f2">Lớp 1</span>
            <span class="text f05">Làm quen với các phép tính đơn giản</span>
            <button data-grade="1" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
          <article class="card-big bg-red">
            <span class="title f2">Lớp 2</span>
            <span class="text f05">Bắt đầu khó hơn chút</span>
            <button data-grade="2" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
          <article class="card-big bg-blue">
            <span class="title f2">Lớp 3</span>
            <span class="text f05">Thêm các phép tính mới</span>
            <button data-grade="3" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
          <article class="card-big bg-purple">
            <span class="title f2">Lớp 4</span>
            <span class="text f05">Nhiều kiến thức hơn nữa rồi</span>
            <button data-grade="4" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
          <article class="card-big bg-pink">
            <span class="title f2">Lớp 5</span>
            <span class="text f05">Đã tính toán thành thạo</span>
            <button data-grade="5" class="examine button green">
              <i class="icon-play"></i>
              <span class="ml25">Bắt đầu</span>
            </button>
          </article>
        </section>
      </main>
    `;
  },
  input_box(item) {
    if(item.type === 'frac') {
      return `
        <span id="frac_input" class="frac">
          <span><input type="number" id="answer1" class="input-box f08" placeholder="Tử số"></span>
          <span class="sep"></span>
          <span><input type="number" id="answer2" class="input-box f08" placeholder="Mẫu số"></span>
        </span>
      `
    }
    if(item.type === 'choose_one') {
      return `<ul id="choose_input" class="choose">${item.refer.map(i => `<li><span class="input-box" data-value="${i}">${i}</span></li>`).join('')}</ul>`;
    }
    return `<input type="number" id="answer" class="input-box f08" placeholder="Nhập đáp án.." />`
  },
  questions(item) {
    let frac, refer;
    if(frac = item.question.match(/([0-9]*)\/\/([0-9]*)/g)) {
      let str = item.question;
      frac.map(item => {
        let x = item.split('//');
        let form = `<span class="frac"><span>${x[0]}</span><span class="sep"></span><span>${x[1]}</span></span>`;
        str = str.replace(item, form);
      })
      item.question = str;
    }
    if(item.type.includes('in_list') && item.refer) {
      refer = `<ul class="refer">${item.refer.map(i => `<li><img src="${i}" /></li>`).join('')}</ul>`;
    }

    if(item.type === 'choose_one') {
      refer = `<img style="width: 30%" src="${item.photo}" />`;
    }
    
    let html = `
      <div class="question-page">
        <section class="score-holder">
          <i id="my-star" class="sc sc-star sc-still"></i>
          <span id="my-score" class="score-number f15">${localStorage.getItem('primary_math_app_my_score') || 0}</span>
          <span class="score-number score-number-change f1">00</span>
        </section>
        <div class="question-page-content text-center">
          <p class="text-444 f08 p0x5">${item.question}</p>
          ${refer ? refer : ''}
          ${this.input_box(item)}
        </div>
        <ul class="question-page-control f08">
          <li><button id="guide-question" class="button" data-kq="${item.answer}" data-use="1">Đáp án <span class="ml10">- 3</span><i class="sc sc-star sc-still"></i></button></li>
          <li><button id="reload-question" class="button">Bỏ qua <span class="ml10">- 1</span><i class="sc sc-star sc-still"></i></button></li>
        </ul>
      </div>
    `;
    return html;
  },
  smiley(pass) {
    let emotion = pass ? 'happy' : 'sad', html = '';
    if(pass) html += `
      <div class="firework">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    `;
    html += `
      <div class="smiley smiley--${emotion}">
        <div class="smiley-face smiley-face--${emotion}">
          <div class="smiley-eyes smiley-eyes--${emotion}">
            <div class="smiley-eye"></div>
            <div class="smiley-eye"></div>
          </div>
          <div class="smiley-mouth smiley-mouth--${emotion}">
            <div class="smiley-tongue"></div>
          </div>
        </div>
      </div>
    `;
    return html
  },
  popup(message, btn1, btn2, cb1, cb2) {
    let div = document.createElement('div'),
      buttons = '<a href="#0" class="popup-close img-replace"></a>';
    div.className = 'popup is-visible';
    if(btn1) {
      buttons = `
        <ul class="popup-buttons">
          <li id="btn1"><a href="#0">${btn1}</a></li>
          <li id="btn2"><a href="#0">${btn2}</a></li>
        </ul>
      `
    }
    div.innerHTML = `
      <div class="popup-container">
        <p>${message}</p>
        ${buttons}
      </div>
    `;
    document.body.appendChild(div);
    let $close = div.querySelector('.popup-close');
    if($close) $close.addEventListener('click', e => document.body.removeChild(div));
    let $btn1 = div.querySelector('#btn1');
    if($btn1 && cb1) $btn1.addEventListener('click', cb1);
    let $btn2 = div.querySelector('#btn2');
    if($btn2 && cb2) $btn2.addEventListener('click', cb2);
    
    return div;
  }
};

const change_score = ($viewport, method, number) => {
  let $score = $viewport.querySelector('#my-score');
  let $score_change = $viewport.querySelector('.score-number-change');
  let score = localStorage.getItem('primary_math_app_my_score');
  if(method === '-' && score < number) {
    _templates.popup('Không đủ sao <i class="sc sc-star sc-still"></i>');
    return false;
  }
  let new_score = score;
  if(method === '-') new_score = parseInt(score) - parseInt(number);
  if(method === '+') new_score = parseInt(score) + parseInt(number);
  localStorage.setItem('primary_math_app_my_score', new_score);
  $score_change.textContent = `${method}${number}`;
  $score.classList.add('shake');
  $score_change.classList.remove('active');
  void $score_change.offsetWidth;
  $score_change.classList.add('active');
  setTimeout(() => $score.classList.remove('shake'),800);
  $score.textContent = new_score;
  return true;
}

const _check_answer = ($viewport, grade, pass, use_hint) => {
  let div = document.createElement('div');
  div.innerHTML = _templates.smiley(pass);
  div.className = 'smiley-holder';
  $viewport.appendChild(div);
  setTimeout(() => {
    $viewport.removeChild(div);
    if(pass) _start($viewport, grade, use_hint);
  }, 3000);
};

const _generate_question = (grade, level) => new Promise(function(resolve, reject) {
  let question;
  let http = new XMLHttpRequest();
  http.open("POST", window.location.origin+'/question-builder');
  http.onerror = () => reject(false);
  http.send(JSON.stringify({grade: grade, level:level}));
  http.onreadystatechange = e => {
    if(http.readyState == 4 && http.status == 200) {
      question = JSON.parse(http.responseText);
      if(question.error) return resolve(question.error)
      return resolve(_templates.questions(question.result));
    }
  }
})

const _start = async ($viewport, grade, use_hint=false) => {
  $viewport = document.getElementById('user-viewport');
  $viewport.style.minHeight = (window.innerHeight)+'px';
  let $question = false;
  let level = localStorage.getItem('primary_math_app_my_level');
  while($question == false) {
    $question = await _generate_question(grade, level);
  }
  if(typeof $question == 'string') {
    _templates.popup($question);
    return false;
  }
  let i = parseInt((Math.random() * 3) +1);
  $viewport.style.display = 'flex';
  $viewport.className ='background bg'+i;
  $viewport.innerHTML = $question;
  let $star = $viewport.querySelector('#my-star');
  let score_each_grade = parseInt(grade) || 1;
  if(use_hint) {
    $star.className = $star.className.replace('sc-still','');
    change_score($viewport, '+', 1*score_each_grade);
  }
  let $input = $viewport.querySelector('#answer');
  let $frac_input = $viewport.querySelector('#frac_input');
  let $choose_input = $viewport.querySelector('#choose_input');
  let $show_result = $viewport.querySelector('#guide-question');
  $show_result.firstElementChild.textContent = `- ${3*score_each_grade}`;
  if($input) {
    let input_function = (e) => {
      e.preventDefault();
      let answer = $input.value.trim();
      if(!answer) return _templates.popup('Cần điền đáp án');
      let pass = answer == $show_result.getAttribute('data-kq');
      _check_answer($viewport, grade, pass, parseInt($show_result.getAttribute('data-use')), level);
    }
    $input.addEventListener('change', input_function);
    $input.addEventListener('keypress', e => {
      if(e.keyCode === 13) input_function(e);
    });
  }

  if($frac_input) {
    let frac_input_function = (e, frac_input) => {
      e.preventDefault();
      let x = frac_input.querySelector('#answer1').value.trim();
      let y = frac_input.querySelector('#answer2').value.trim();
      if(x && y) {
        let answer = parseInt(x) / parseInt(y);
        let pass = answer == parseFloat($show_result.getAttribute('data-kq'));
        _check_answer($viewport, grade, pass, parseInt($show_result.getAttribute('data-use')), level);
      }
    }
    let $frac_input_box = $frac_input.querySelectorAll('input');
    $frac_input_box.forEach(item => {
      item.addEventListener('change', e => frac_input_function(e, frac_input));
      item.addEventListener('keypress', e => {
        if(e.keyCode === 13) frac_input_function(e, frac_input);
      });
    })
  }

  if($choose_input) {
    let choose_input_function = (value) => {
      if(!value) return false;
      let pass = value == $show_result.getAttribute('data-kq');
      _check_answer($viewport, grade, pass, parseInt($show_result.getAttribute('data-use')), level);
    }
    let $choose_input_box = $choose_input.querySelectorAll('span');
    $choose_input_box.forEach(item => {
      item.addEventListener('click', e => choose_input_function(e.currentTarget.getAttribute('data-value')));
    })
  }

  $viewport.querySelector('#reload-question').addEventListener('click', e => {
    e.preventDefault();
    let is_change = change_score($viewport, '-', 1);
    if(is_change) setTimeout(() => _start($viewport, grade), 800);
  });
  $show_result.addEventListener('click', e => {
    e.preventDefault();
    let guide = $show_result.getAttribute('data-kq');
    if(parseInt($show_result.getAttribute('data-use')) == 0)
      return _templates.popup('Đáp án: '+guide);
    let is_change = change_score($viewport, '-', 3*score_each_grade);
    if(is_change) {
      $show_result.setAttribute('data-use', 0);
      $show_result.firstElementChild.textContent = '';
      _templates.popup('Đáp án: '+guide);
    }
  });
  
};

var app = {
  initialize: function(is_back) {
    let $viewport = document.getElementById('user-viewport'), $popup;
    $viewport.innerHTML = _templates.homepage();
    $viewport.style.display = 'block';
    $viewport.className = '';
    is_back = false;
    let $examine = Array.from($viewport.querySelectorAll('.examine'));
    let score = localStorage.getItem('primary_math_app_my_score');
    if(!score || score === 'undefined') localStorage.setItem('primary_math_app_my_score', 100);
    $viewport.querySelector('.score-number').textContent = localStorage.getItem('primary_math_app_my_score') || 0;

    let level = localStorage.getItem('primary_math_app_my_level');
    let $pick_level = $viewport.querySelector('#pick-level');
    if(!level || level === 'undefined') localStorage.setItem('primary_math_app_my_level', 'all');
    $pick_level.value = level || 'all';
    $pick_level.addEventListener('change', e => {
      localStorage.setItem('primary_math_app_my_level', $pick_level.value);
    })

    $examine.map(node => node.addEventListener('click', e => {
      e.preventDefault();
      let grade = e.currentTarget.getAttribute('data-grade');
      is_back = true;
      _start($viewport, grade)
    }));
  }
};