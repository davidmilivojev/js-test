// // function Car(model, name, year) {
// //     this.model = model;
// //     this.name = name;
// //     this.year = year;
// // }

// // let car1 = new Car('bmw', 'x3', 2017);
// // let car2 = new Car('fiat', 'punt', 2015);
// // let car3 = new Car();

// // console.log(car1);

// // console.log(car2);

// // console.log(car3)


// var text = document.querySelector('h1');
// function textColor(color, fontsize) {
//     text.style.color = color;
//     text.style.fontSize = fontsize;
// }

// textColor('orange', '36px');

// let btn = document.querySelector('button');
// let input = document.querySelector('input');
// let text = document.querySelector('ol');

// btn.addEventListener('click', function(){
//     let arr = [];
//     if(input.value == "") {
//         alert('input is empty!');
//     } else {
//         let localValue = input.value;
//         let storedValue = localStorage.getItem('username');
//         arr.push(input.value);
//         input.value = "";
//         for(var i=0; arr != null &&  i < arr.length ; i++){
            
//             var item = document.createElement('li');
//             item.innerHTML = arr[i];
//             text.appendChild(item);
//             if(localValue !== storedValue) {
//                 localStorage.setItem('username', JSON.stringify(arr));
//             } else {
//                 alert('same username');
//             }
//         }
//     }
// });


// let vozovi = ['voz1', 'voz2', 'voz3', 'voz4'];
// let objekat = {
//     brojVozova: vozovi.length,
//     godina: 1993,
//     vozovi: vozovi
// }

// function funkcija(vozovi = []) {
//     console.log(`ukupan broj necega ${vozovi.length}`);
//     for(let index = 0; index < vozovi.length; index++) {
//         if(index === vozovi.length - 1) {
//             console.log(`last ${vozovi[index]}`);
//         } else {
//             console.log(`next ${vozovi[index]}`);
//         }
//     }
// }


// funkcija(vozovi)


function scrollIndicator() {
    $(window).scroll(function() {
        let winTop = $(window).scrollTop();
        let winHeight = $(window).height();   
        let docHeight = $(document).height();

        let scrolled = (winTop / (docHeight - winHeight)) * 100;
        
        $('.scroll-indicator').css('width', scrolled + '%');
    });
}

scrollIndicator();



function insertItems() {
    let $btn = $('.btn-insert');
    let $input = $('input');
    let $user = $('.user');
    let $list = $('ol');
    let arr = [];
    let retrivedData = localStorage.getItem('item');
    let converted =  JSON.parse(retrivedData);
    
    $btn.on('click', function() {
        let obj = [];

        $input.each(function() {
            let $value = $(this).val();
            obj.push($value);
        });
        
        if($user.val() !== '') {
            arr.push(obj);
            localStorage.setItem('item', JSON.stringify(arr));
            $input.val('');
        } else {
            alert('empty field user!');
        }
    });
    
    for(let i = 0; i < converted.length; i++) {
        let html = '<li>' + converted[i] + '</li>';
        $list.append(html);
    }  
}

insertItems();


function registrationAndLogin() {
    let $regUser = $('.username');
    let $regPass = $('.password');
    let $regBtn = $('.btn-reg');
    let $logBtn = $('.btn-log');
    let $login = $('.login');
    let $out = $('.out');
    let $loginUser = $('.login-user');
    let $loginPass = $('.login-pass');
    let $checkbox = $('.check');
    let status = true;
    
    
    $regBtn.on('click', function() {
        let $userval = $regUser.val();
        let $passval = $regPass.val();
        let regArr = {'name': $userval, 'pass': $passval};

        if($userval !== '' || $passval !== '') {
            localStorage.setItem('user', JSON.stringify(regArr));
        } else {
            alert('empty field!');
        }

        $regUser.val('');
        $regPass.val('');

        if($checkbox.is(':checked')) {
            window.open('login.html');
        }
    });

    $logBtn.on('click', function() {
        window.open('login.html');
    });

    $login.on('click', function() {
        let $loginuserval = $loginUser.val();
        let $loginpassval = $loginPass.val();
        let localValue = localStorage.getItem('user');
        var retrieveObject = JSON.parse(localValue);

        
        if($loginuserval === retrieveObject.name && $loginpassval === retrieveObject.pass) {
            localStorage.setItem('logged', JSON.stringify(status));
            let localValueStatus = localStorage.getItem('logged');
            var retrieveStatus = JSON.parse(localValueStatus);
            $loginUser.val('');
            $loginPass.val('');
            if(retrieveStatus === true) {
                window.open('page.html');
            }
        } else {
            alert('wrong credentials');
        }
    });

    $out.on('click', function() {
        status = false;
        localStorage.setItem('logged', JSON.stringify(status));
        window.open('login.html');
    });

    // if(localStorage.getItem('logged') !== 'true'){
    //     window.open('login.html');
    //     alert('you are not logged');
    // }
};

registrationAndLogin();