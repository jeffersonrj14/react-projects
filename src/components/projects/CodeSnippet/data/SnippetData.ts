const loader = [
  {
    animationClass: 'loader',
    animationCSS: `
    /*credits https://css-loaders.com/spinner */
        .loader {
            width: 50px;
            aspect-ratio: 1;
            display: grid;
            border: 4px solid #0000;
            border-radius: 50%;
            border-color: #ccc #0000;
            animation: round 1s infinite linear;
        }
        .loader::before,
        .loader::after {
            content: '';
            grid-area: 1/1;
            margin: 2px;
            border: inherit;
            border-radius: 50%;
        }
        .loader::before {
            border-color: #13c4a5 #0000;
            animation: inherit;
            animation-duration: 0.5s;
            animation-direction: reverse;
        }
        .loader::after {
            margin: 8px;
        }
        @keyframes round {
            100% {
                transform: rotate(1turn);
            }
        }
      `
  },
  {
    animationClass: 'loader2',
    animationCSS: `
    /*credits https://cssloaders.github.io */
        .loader {
            transform: rotateZ(45deg);
            perspective: 1000px;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            color: #fff;
        }
            .loader:before,
            .loader:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: inherit;
            height: inherit;
            border-radius: 50%;
            transform: rotateX(70deg);
            animation: 1s spin linear infinite;
            }
            .loader:after {
            color: #13c4a5;
            transform: rotateY(70deg);
            animation-delay: .4s;
            }
  
        @keyframes rotate {
            0% {
            transform: translate(-50%, -50%) rotateZ(0deg);
            }
            100% {
            transform: translate(-50%, -50%) rotateZ(360deg);
            }
        }
  
        @keyframes rotateccw {
            0% {
            transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
            transform: translate(-50%, -50%) rotate(-360deg);
            }
        }
  
        @keyframes spin {
            0%,
            100% {
            box-shadow: .2em 0px 0 0px currentcolor;
            }
            12% {
            box-shadow: .2em .2em 0 0 currentcolor;
            }
            25% {
            box-shadow: 0 .2em 0 0px currentcolor;
            }
            37% {
            box-shadow: -.2em .2em 0 0 currentcolor;
            }
            50% {
            box-shadow: -.2em 0 0 0 currentcolor;
            }
            62% {
            box-shadow: -.2em -.2em 0 0 currentcolor;
            }
            75% {
            box-shadow: 0px -.2em 0 0 currentcolor;
            }
            87% {
            box-shadow: .2em -.2em 0 0 currentcolor;
            }
        }
      `
  },
  {
    animationClass: 'loader3',
    animationCSS: `
    .loader {
        animation: rotate 1s infinite;
        height: 50px;
        width: 50px;
        border-radius: 50%; /* Makes the shape circular */
    }
    
    .loader:before,
    .loader:after {
        content: "";
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%; /* Makes the pseudo-elements circular */
    }
    
    .loader:before {
        animation: box1 1s infinite;
        background-color: #fff;
        box-shadow: 30px 0 0 #13c4a5;
        margin-bottom: 10px;
    }
    
    .loader:after {
        animation: box2 1s infinite;
        background-color: #13c4a5;
        box-shadow: 30px 0 0 #fff;
    }
    
    @keyframes rotate {
        0% {
        transform: rotate(0deg) scale(0.8);
        }
        50% {
        transform: rotate(360deg) scale(1.2);
        }
        100% {
        transform: rotate(720deg) scale(0.8);
        }
    }
    
    @keyframes box1 {
        0% {
        box-shadow: 30px 0 0 #13c4a5;
        }
        50% {
        box-shadow: 0 0 0 #13c4a5;
        margin-bottom: 0;
        transform: translate(15px, 15px);
        }
        100% {
        box-shadow: 30px 0 0 #13c4a5;
        margin-bottom: 10px;
        }
    }
    
    @keyframes box2 {
        0% {
        box-shadow: 30px 0 0 #fff;
        }
        50% {
        box-shadow: 0 0 0 #fff;
        margin-top: -20px;
        transform: translate(15px, 15px);
        }
        100% {
        box-shadow: 30px 0 0 #fff;
        margin-top: 0;
        }
    }
`
  },
  {
    animationClass: 'loader4',
    animationCSS: `
/*credits https://cssloaders.github.io */
  .loader {
    width: 48px;
    height: 24px;
    display: inline-block;
    position: relative;
    border: 1px solid #FFF;
  }
  .loader::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #FFF;
    width: 5px;
    height: 12px;
  }
  .loader::before {
    content: '';  
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 6px;
    box-sizing: border-box;
    animation: barloader  2s linear infinite;
  }
  
  @keyframes barloader {
    0% {
      box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 11px 0 #d21a1a, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 11px 0 #d21a1a, 22px 0 #df612a, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    75% {
      box-shadow: 11px 0 #d21a1a, 22px 0 #df612a, 33px 0 #c98f1f, 44px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 11px 0 #d21a1a, 22px 0 #df612a, 33px 0 #c98f1f, 44px 0 #13c4a5;
    }
  }
    `
  }
]

export default loader
