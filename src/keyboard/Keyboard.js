import React, { useRef } from 'react'
import './keyboard.css';
import { useLongPress } from "use-long-press";

export const Keyboard = () => {

    /**
     * 
     * key initialisation
     * 
     */


    var k1 = [',', '.', '!', "1"];
    var k2 = ["a", "b", "c", "2"];
    var k3 = ["d", "e", "f", "3"];
    var k4 = ["g", "h", "i", "4"];
    var k5 = ["j", "k", "l", "5"];
    var k6 = ["m", "n", "o", "6"];
    var k7 = ["p", "q", "r", "s", "7"];
    var k8 = ["t", "u", "v", "8"];
    var k9 = ["w", "x", "y", "z", "9"];


   
    var activeKey = [];
    var lastKey = null;
    var text = [];
    var timer;
    var difTolerance = 700;
    var startTime;
    var endTime;
    var c = 0;


   const l1=useRef();
   const l2=useRef();
   const l3=useRef();
   const l4=useRef();
   const l5=useRef();
   const l6=useRef();
   const l7=useRef();
   const l8=useRef();
   const l9=useRef();



    /**
     * 
     * once time i.e. 700ms over set word
     * 
     */
    const setWord = () => {
        lastKey = null;
        c = 0;

    }

    /***
     * pausing for 700ms if other clicks done
     */


    const checkPause = () => {
        endTime = new Date().getTime();
        if (endTime - startTime >= difTolerance) {
            clearInterval(timer);
            setWord();
        }
    }
    const handleClick = (e) => {

        if (e !== lastKey) {
            c = 0;
        }
        if (e === "1") {
            activeKey = k1;
        }
        else if (e === "2") {
            activeKey = k2;
        }
        else if (e === "3") {
            activeKey = k3;
        }
        else if (e === "4") {
            activeKey = k4;
        }
        else if (e === "5") {
            activeKey = k5;
        }
        else if (e === "6") {
            activeKey = k6;
        }
        else if (e === "7") {
            activeKey = k7;
        }
        else if (e === "8") {
            activeKey = k8;
        }
        else if (e === "9") {
            activeKey = k9;
        }


        /**
         * 
         * for toggling on other button values
         * 
         */
        if (c < activeKey.length - 1) {
            c++;
        }
        else {
            c = 1;
        }


        clearInterval(timer);
        startTime = new Date().getTime();
        timer = setInterval(checkPause, 5);

        /**
         * 
         * for backspace functionality
         * 
         */


        if (e === '#') {
            text.pop();
        }
        else if (e !== lastKey) {
            text.push(activeKey[c - 1]);

        } else {
            text.pop();
            text.push(activeKey[c - 1]);

        }


        document.getElementById('result').textContent = text.join("")

        /**
         * 
         * to check for previous input if clicked other button the have to reset counter
         */
        lastKey = e;
    }

   

    /***
     * 
     * 
     * binded all keys individually via longpress hook for listening to long press event
     * and useRef to access their value
     * 
     */
    
        const bind1 = useLongPress(() => {
          
           if(l1.current)
           {
           const val=l1.current.value;
           text.push(val);
           document.getElementById('result').textContent = text.join("")
           }
        });

        const bind2 = useLongPress(() => { 
            if(l2.current)
            {
            const val=l2.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind3 = useLongPress(() => { 
            if(l3.current)
            {
            const val=l3.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind4 = useLongPress(() => { 
            if(l4.current)
            {
            const val=l4.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind5 = useLongPress(() => { 
            if(l5.current)
            {
            const val=l5.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind6 = useLongPress(() => { 
            if(l6.current)
            {
            const val=l6.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind7 = useLongPress(() => { 
            if(l7.current)
            {
            const val=l7.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind8 = useLongPress(() => { 
            if(l8.current)
            {
            const val=l8.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });

         const bind9 = useLongPress(() => { 
            if(l9.current)
            {
            const val=l9.current.value;
            text.push(val);
            document.getElementById('result').textContent = text.join("")
            }
         });
        

    return (
        <div className="wrapper">
            <table id="phone">
                <tr>
                    <td colspan="3">

                        <textarea type="text" id="result" />
                    </td>
                </tr>
                <tr class="key_container">
                    <td>
                        <button value="1" {...bind1} id="key" ref={l1} class="key" onClick={() => handleClick("1")}>1
                         <span class="txt">. , !</span>
                        </button>
                    </td>
                    <td>
                        <button value="2" {...bind2} id="key" ref={l2} class="key" onClick={() => handleClick("2")}>2
                        <span class="txt">a b c</span>
                        </button>
                    </td>
                    <td>
                        <button value="3" {...bind3} id="key" ref={l3} class="key" onClick={() => handleClick("3")}>3
                         <span class="txt">d e f</span>
                        </button>
                    </td>
                </tr>
                <tr class="key_container">
                    <td>
                        <button value="4" {...bind4} id="key" ref={l4} class="key" onClick={() => handleClick("4")}>4
                        <span class="txt">g h i</span>
                        </button>
                    </td>
                    <td>
                        <button value="5" {...bind5} id="key" ref={l5} class="key" onClick={() => handleClick("5")}>5
                        <span class="txt">j k l</span>
                        </button>
                    </td>
                    <td>
                        <button value="6" {...bind6} id="key" ref={l6} class="key" onClick={() => handleClick("6")}>6
                        <span class="txt">m n o</span>
                        </button>
                    </td>
                </tr>
                <tr class="key_container">
                    <td>
                        <button value="7" {...bind7} class="key" ref={l7} onClick={() => handleClick("7")}>7
                        <span class="txt">p q r s</span>
                        </button>
                    </td>
                    <td>
                        <button value="8" {...bind8} class="key" ref={l8} onClick={() => handleClick("8")}>8
                         <span class="txt">t u v</span>
                        </button>
                    </td>
                    <td>
                        <button value="9" {...bind9} class="key" ref={l9} onClick={() => handleClick("9")}>9
                         <span class="txt">w x y z</span>
                        </button>
                    </td>
                </tr>
                <tr class="key_container">
                    <td>
                        <button data-value="*"  class="key"  onClick={() => handleClick("*")}>*</button>
                    </td>
                    <td>
                        <button data-value="0"  class="key"  onClick={() => handleClick("0")}>0</button>
                    </td>
                    <td>
                        <button data-value="#"  class="key"  onClick={() => handleClick("#")}>del</button>
                    </td>
                </tr>

            </table>
        </div>
    )
}
