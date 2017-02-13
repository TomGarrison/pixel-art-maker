document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName('body')[0]
    var bodyDivs = document.getElementsByTagName('div')[0]
    var div = document.createElement('div')
    div.className= "colorDiv"
    var container= document.getElementsByClassName('containerDiv')[0]
    var remove= document.getElementsByClassName('colorDiv')

    // CREATING THE CHART START
    var num = 2520;
    for (var i = 0; i < num; i++) {
        var div = document.createElement('div')
        var divColor= container.appendChild(div)
        div.className= "colorDiv"
    }
    // CREATING THE CHART END


    // SINGLE COLOR PICKER START
    var divCircle = document.createElement('div')
    divCircle.className = "circleDiv"
    document.body.appendChild(divCircle)
    var divCircle1 = document.createElement('div')
    divCircle1.className = "circleDiv1"
    document.body.appendChild(divCircle1)
    var divCircle2 = document.createElement('div')
    divCircle2.className = "circleDiv2"
    document.body.appendChild(divCircle2)
    var divCircle3 = document.createElement('div')
    divCircle3.className = "circleDiv3"
    document.body.appendChild(divCircle3)
    var divCircle4 = document.createElement('div')
    divCircle4.className = "circleDiv4"
    document.body.appendChild(divCircle4)
    var divCircle5 = document.createElement('div')
    divCircle5.className = "circleDiv5"
    document.body.appendChild(divCircle5)
    var divCircle6 = document.createElement('div')
    divCircle6.className = "circleDiv6"
    document.body.appendChild(divCircle6)
    var divCircle7 = document.createElement('div')
    divCircle7.className = "circleDiv7"
    document.body.appendChild(divCircle7)
    var divCircle8 = document.createElement('div')
    divCircle8.className = "circleDiv8"
    document.body.appendChild(divCircle8)
    var divCircle9 = document.createElement('div')
    divCircle9.className = "circleDiv9"
    document.body.appendChild(divCircle9)
    var divCircle10 = document.createElement('div')
    divCircle10.className = "circleDiv10"
    document.body.appendChild(divCircle10)
    divCircle10.innerText = "Single Square"
    // SINGLE COLOR PICKER END


    // MOUSEOVER COLOR PICKER START"
    var divCircle11 = document.createElement('div')
    divCircle11.className = "circleDiv11"
    document.body.appendChild(divCircle11)
    var divCircle12 = document.createElement('div')
    divCircle12.className = "circleDiv12"
    document.body.appendChild(divCircle12)
    var divCircle13 = document.createElement('div')
    divCircle13.className = "circleDiv13"
    document.body.appendChild(divCircle13)
    var divCircle14 = document.createElement('div')
    divCircle14.className = "circleDiv14"
    document.body.appendChild(divCircle14)
    var divCircle15 = document.createElement('div')
    divCircle15.className = "circleDiv15"
    document.body.appendChild(divCircle15)
    var divCircle16 = document.createElement('div')
    divCircle16.className = "circleDiv16"
    document.body.appendChild(divCircle16)
    var divCircle17 = document.createElement('div')
    divCircle17.className = "circleDiv17"
    document.body.appendChild(divCircle17)
    var divCircle18 = document.createElement('div')
    divCircle18.className = "circleDiv18"
    document.body.appendChild(divCircle18)
    var divCircle19 = document.createElement('div')
    divCircle19.className = "circleDiv19"
    document.body.appendChild(divCircle19)
    var divCircle20 = document.createElement('div')
    divCircle20.className = "circleDiv20"
    document.body.appendChild(divCircle20)
    var divCircle21 = document.createElement('div')
    divCircle21.className = "circleDiv21"
    document.body.appendChild(divCircle21)
    var divCircleMo = document.createElement('div')
    divCircleMo.className = "circleDivMo"
    document.body.appendChild(divCircleMo)
    divCircleMo.innerText = "Get Wild!"
    // MOUSE OVER COLOR PICKER END


    //SINGLE DRAWING START
    divCircle.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv')){
            event.target.style.backgroundColor = "rgb(187, 118, 249)"
          }
        })
    })
    divCircle1.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "#f976f3"
        })
    })
    divCircle2.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 118, 118)"
        })
    })
    divCircle3.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 209, 249)"
        })
    })
    divCircle4.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 241)"
        })
    })
    divCircle5.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 206)"
        })
    })
    divCircle6.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(187, 249, 118)"
        })
    })
    divCircle7.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(230, 249, 118)"
        })
    })
    divCircle8.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 216, 118)"
        })
    })
    divCircle9.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 130, 118)"
        })
    })
    // SINGLE PAINT END


    // GOWILD STRAT
    divCircle11.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor= "rgb(187, 118, 249)"
        })
    })

    divCircle12.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "#f976f3"
        })
    })
    divCircle13.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 118, 118)"
        })
    })
    divCircle14.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 209, 249)"
        })
    })
    divCircle15.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 241)"
        })
    })
    divCircle16.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 206)"
        })
    })
    divCircle17.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(187, 249, 118)"
        })
    })
    divCircle18.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(230, 249, 118)"
        })
    })
    divCircle19.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 216, 118)"
        })
    })
    divCircle20.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 130, 118)"
        })
    })
    // GOWILDEND

    // buttonrefresh start
    var button = document.getElementById('btn');
    button.addEventListener('click', function() {
      button.style.backgroundColor = "rgba(134, 216, 251, 0.37)"
        var remove= document.getElementsByClassName('colorDiv')
        for (var i = 0; i < remove.length; i++) {
          remove[i].style.backgroundColor= "rgba(255, 255, 255, 0)"

        }
        })

    // button refresh end
});
