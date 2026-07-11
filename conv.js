
//meter centimeter and inches
const meterBoxIC = document.getElementById('lenMeterIC');
const centiBoxIM = document.getElementById('lenCentiIM');
const inchBoxMC = document.getElementById('lenInchMC');
function lenMeterCalculatorIC(val1, box2, box3) {
    if (val1.trim() === "") {
        box2.value = "";
        box3.value = "";
        return;
    }
    val1 = Number(val1);
    let result1 = val1*100;
    let result2 = val1/0.0254;
    result2 = result2.toFixed(3);
    box2.value = result1;
    box3.value = result2;
    box2.addEventListener('focus', function() {
        box2.select();
    })
    box3.addEventListener('focus', function() {
        box3.select();
    })
}
meterBoxIC.addEventListener('input', function() {
    lenMeterCalculatorIC(meterBoxIC.value, centiBoxIM, inchBoxMC)
})
function lenCentiCalculatorIM(val2, box1, box3) {
    if(val2.trim() === ""){
        box1.value = "";
        box2.value = "";
        return;
    }
    val2 = Number(val2);
    let result1 = val2/100;
    let result2 = val2/2.54;
    result2 = result2.toFixed(3);
    box1.value = result1;
    box3.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box3.addEventListener('focus', function() {
        box3.focus()
    })
}
centiBoxIM.addEventListener('input', function() {
    lenCentiCalculatorIM(centiBoxIM.value, meterBoxIC, inchBoxMC)
})
function lenInchCalculatorMC(val3, box1, box2){
    if(val3.trim() === ""){
        box1.value = "";
        box2.value = "";
        return;
    }
    val3 = Number(val3);
    let result1 = val3*0.0254;
    let result2 = val3*2.54;
    result2 = result2.toFixed(3);
    box1.value = result1;
    box2.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box2.addEventListener('focus', function() {
        box2.select();
    })
}
inchBoxMC.addEventListener('input', function() {
    lenInchCalculatorMC(inchBoxMC.value, meterBoxIC, centiBoxIM)
})
//meter kilometer mile calculator
const meterBoxKM = document.getElementById('lenMeterKM');
const kiloBoxMM = document.getElementById('lenKiloMM');
const mileBoxKM = document.getElementById('lenMileKM');
function lenMeterCalculatorKM(val1, box2, box3) {
    if (val1.trim() === "") {
        box2.value = "";
        box3.value = "";
        return;
    }
    val1 = Number(val1);
    let result1 = val1/1000;
    let result2 = val1/1609.344;
    result2 = result2.toFixed(3);
    box2.value = result1;
    box3.value = result2;
    box2.addEventListener('focus', function() {
        box2.select();
    })
    box3.addEventListener('focus', function() {
        box3.select();
    })
}
meterBoxKM.addEventListener('input', function() {
    lenMeterCalculatorKM(meterBoxKM.value, kiloBoxMM, mileBoxKM)
})
function lenKiloCalculatorMM(val2, box1, box3) {
    if(val2.trim() === ""){
        box1.value = "";
        box3.value = "";
        return;
    }
    val2 = Number(val2);
    let result1 = val2*1000;
    let result2 = val2/1.609334;
    result2 = result2.toFixed(3);
    box1.value = result1;
    box3.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box3.addEventListener('focus', function() {
        box3.focus()
    })
}
kiloBoxMM.addEventListener('input', function() {
    lenKiloCalculatorMM(kiloBoxMM.value, meterBoxKM, mileBoxKM)
})
function lenMileCalculatorKM(val3, box1, box2){
    if(val3.trim() === ""){
        box1.value = "";
        box2.value = "";
        return;
    }
    val3 = Number(val3);
    let result1 = val3*1609.344;
    let result2 = val3*1.609344;
    result2 = result2.toFixed(3);
    result1 = result1.toFixed(3);
    box1.value = result1;
    box2.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box2.addEventListener('focus', function() {
        box2.select();
    })
}
mileBoxKM.addEventListener('input', function() {
    lenMileCalculatorKM(mileBoxKM.value, meterBoxKM, kiloBoxMM)
})
//meter foot yards calculator
const meterBoxFY = document.getElementById('lenMeterFY');
const footBoxMY = document.getElementById('lenFootMY');
const yardBoxFM = document.getElementById('lenYardFM');
function lenMeterCalculatorFY(val1, box2, box3) {
    if (val1.trim() === "") {
        box2.value = "";
        box3.value = "";
        return;
    }
    val1 = Number(val1);
    let result1 = val1*3.28084;
    let result2 = val1*1.09361;
    result2 = result2.toFixed(3);
    result1 = result1.toFixed(3);
    box2.value = result1;
    box3.value = result2;
    box2.addEventListener('focus', function() {
        box2.select();
    })
    box3.addEventListener('focus', function() {
        box3.select();
    })
}
meterBoxFY.addEventListener('input', function() {
    lenMeterCalculatorFY(meterBoxFY.value, footBoxMY, yardBoxFM)
})
function lenFootCalculatorMY(val2, box1, box3) {
    if(val2.trim() === ""){
        box1.value = "";
        box3.value = "";
        return;
    }
    val2 = Number(val2);
    let result1 = val2/3.28084;
    let result2 = val2/3;
    result2 = String(result2);
    let decimalZero = 0;
    if (result2.includes(".")) {
        decimalZero = result2.split(".")[1].length;
        result2 = Number(result2);
    }
    if (decimalZero <= 3) {
        result1 = result1.toFixed(3);
        box1.value = result1;
        box3.value = result2;
        box1.addEventListener('focus', function() {
            box1.focus()
        })
        box3.addEventListener('focus', function() {
            box3.focus()
        })
    }else{
        result1 = result1.toFixed(3);
        box1.value = result1;
        box3.value = result2;
        box1.addEventListener('focus', function() {
            box1.focus()
        })
        box3.addEventListener('focus', function() {
            box3.focus()
        })
    }
}
footBoxMY.addEventListener('input', function() {
    lenFootCalculatorMY(footBoxMY.value, meterBoxFY, yardBoxFM)
})
function lenYardCalculatorFM(val3, box1, box2){
    if(val3.trim() === ""){
        box1.value = "";
        box2.value = "";
        return;
    }
    val3 = Number(val3);
    let result1 = val3/1.09361;
    let result2 = val3*3;
    result1 = result1.toFixed(3);
    box1.value = result1;
    box2.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box2.addEventListener('focus', function() {
        box2.select();
    })
}
yardBoxFM.addEventListener('input', function() {
    lenYardCalculatorFM(yardBoxFM.value, meterBoxFY, footBoxMY)
})
//meter millimeter micrometer Calculator
const meterBoxMM = document.getElementById('lenMeterMM');
const milliBoxLen = document.getElementById('lenMilli');
const microBoxLen = document.getElementById('lenMicro');
function lenMeterCalculatorMM(val1, box2, box3) {
    if (val1.trim() === "") {
        box2.value = "";
        box3.value = "";
        return;
    }
    val1 = Number(val1);
    let result1 = val1*1000;
    let result2 = val1*1000000;
    box2.value = result1;
    box3.value = result2;
    box2.addEventListener('focus', function() {
        box2.select();
    })
    box3.addEventListener('focus', function() {
        box3.select();
    })
}
meterBoxMM.addEventListener('input', function() {
    lenMeterCalculatorMM(meterBoxMM.value, milliBoxLen, microBoxLen)
})
function lenMilliCalculator(val2, box1, box3) {
    if(val2.trim() === ""){
        box1.value = "";
        box3.value = "";
        return;
    }
    val2 = Number(val2);
    let result1 = val2/1000;
    let result2 = val2*1000;
    box1.value = result1;
    box3.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box3.addEventListener('focus', function() {
        box3.focus()
    })
}
milliBoxLen.addEventListener('input', function() {
    lenMilliCalculator(milliBoxLen.value, meterBoxMM, microBoxLen)
})
function lenMicroCalculator(val3, box1, box2){
    if(val3.trim() === ""){
        box1.value = "";
        box2.value = "";
        return;
    }
    val3 = Number(val3);
    let result1 = val3/1000000;
    let result2 = val3/1000;
    box1.value = result1;
    box2.value = result2;
    box1.addEventListener('focus', function() {
        box1.focus()
    })
    box2.addEventListener('focus', function() {
        box2.select();
    })
}
microBoxLen.addEventListener('input', function() {
    lenMicroCalculator(microBoxLen.value, meterBoxMM, milliBoxLen)
})
// TIME CALCULATOR
const centuryBox = document.getElementById('timeCentury');
const decadeBox = document.getElementById('timeDecade');
const yearBox = document.getElementById('timeYear');
const monthBox = document.getElementById('timeMonth');
const weekBox = document.getElementById('timeWeek');
const dayBox = document.getElementById('timeDay');
const hourBox = document.getElementById('timeHour');
const minuteBox = document.getElementById('timeMinute');
const secondBox = document.getElementById('timeSecond');
const milliBox = document.getElementById('timeMilli');
const timeBoxes = [
    centuryBox,
    decadeBox,
    yearBox,
    monthBox,
    weekBox,
    dayBox,
    hourBox,
    minuteBox,
    secondBox,
    milliBox
];
for (let i = 0; i<timeBoxes.length; i++) {
    timeBoxes[i].addEventListener('focus', function() {
        timeBoxes[i].select()
    })
}
function centuryCalculator(val1,box2,box3,box4,box5,box6,box7,box8,box9,box10) {
    if (val1.trim() === "") {
        box2.value = "";
        box3.value = "";
        box4.value = "";
        box5.value = "";
        box6.value = "";
        box7.value = "";
        box8.value = "";
        box9.value = "";
        box10.value = "";
        return;
    }
    val1 = Number(val1);
    let result1 = val1*10;
    let result2 = val1*100;
    let result3 = val1*1200;
    let result4 =  val1*5217.948;
    let result5 = val1*36525;
    let result6 = val1*876600;
    let result7 = val1*52596000;
    let result8 = val1*3155760000;
    let result9 = val1*3155760000000;
    box2.value = result1;
    box3.value = result2;
    box4.value = result3;
    box5.value = result4;
    box6.value = result5;
    box7.value = result6;
    box8.value = result7;
    box9.value = result8;
    box10.value = result9;
}
centuryBox.addEventListener('input', function() {
    centuryCalculator(centuryBox.value, decadeBox, yearBox, monthBox, weekBox, dayBox, hourBox, minuteBox, secondBox, milliBox)
})
function decadeCalculator(val2,box1,box3,box4,box5,box6,box7,box8,box9,box10) {
    if (val2.trim() === "") {
        box1.value = "";
        box3.value = "";
        box4.value = "";
        box5.value = "";
        box6.value = "";
        box7.value = "";
        box8.value = "";
        box9.value = "";
        box10.value = "";
        return;
    }
    val2 = Number(val2);
    let result1 = val2/10;
    let result2 = val2*10;
    let result3 = val2*120;
    let result4 =  val2*521.7948;
    let result5 = val2*3652.5;
    let result6 = val2*87660;
    let result7 = val2*5259600;
    let result8 = val2*315576000;
    let result9 = val2*315576000000;
    box1.value = result1;
    box3.value = result2;
    box4.value = result3;
    box5.value = result4;
    box6.value = result5;
    box7.value = result6;
    box8.value = result7;
    box9.value = result8;
    box10.value = result9;
    
}
decadeBox.addEventListener('input', function() {
    decadeCalculator(decadeBox.value, centuryBox, yearBox, monthBox, weekBox, dayBox, hourBox, minuteBox, secondBox, milliBox)
})
function yearCalculator(val3,box1,box2,box4,box5,box6,box7,box8,box9,box10) {
    if (val3.trim() === "") {
        box1.value = "";
        box2.value = "";
        box4.value = "";
        box5.value = "";
        box6.value = "";
        box7.value = "";
        box8.value = "";
        box9.value = "";
        box10.value = "";
        return;
    }
    val3 = Number(val3);
    let result1 = val3/100;
    let result2 = val3/10;
    let result3 = val3*12;
    let result4 =  val3*52.17948;
    result4 = result4.toFixed(3);
    let result5 = val3*365.25;
    let result6 = val3*8766;
    let result7 = val3*525960;
    let result8 = val3*31557600;
    let result9 = val3*31557600000;
    box1.value = result1;
    box2.value = result2;
    box4.value = result3;
    box5.value = result4;
    box6.value = result5;
    box7.value = result6;
    box8.value = result7;
    box9.value = result8;
    box10.value = result9;
    
}
yearBox.addEventListener('input', function() {
    yearCalculator(yearBox.value, centuryBox, decadeBox, monthBox, weekBox, dayBox, hourBox, minuteBox, secondBox, milliBox)
})
function monthCalculator(val4,box1,box2,box3,box5,box6,box7,box8,box9,box10) {
    boxes = [box1, box2, box3, box5, box6, box7, box8, box9, box10];
    if (val4.trim() === "") {
        for (let i = 0; i < boxes.length; i++){
            boxes[i].value = ""; 
        }
        return;
    }
    val4 = Number(val4);
    results = [
     result1 = val4/1200,
     result2 = val4/120,
     result3 = val4/12,
     result4 = val4*4.34813,
     result5 = val4*30.4375,
     result6 = val4*730.5,
     result7 = val4*43830,
     result8 = val4*2629800,
     result9 = val4*2629800000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
    
}
monthBox.addEventListener('input', function() {
    monthCalculator(monthBox.value, centuryBox, decadeBox, yearBox, weekBox, dayBox, hourBox, minuteBox, secondBox, milliBox)
})
function weekCalculator(val5,box1,box2,box3,box4,box6,box7,box8,box9,box10) {
    if (val5.trim() === "") {
        box1.value = "";
        box2.value = "";
        box3.value = "";
        box4.value = "";
        box6.value = "";
        box7.value = "";
        box8.value = "";
        box9.value = "";
        box10.value = "";
        return;
    }
    val5 = Number(val5);
    let result1 = val5/5217.48;
    let result2 = val5/521.748;
    let result3 = val5/52.1748;
    let result4 = val5/4.34813;
    let result5 = val5*7;
    let result6 = val5*168;
    let result7 = val5*(168*60);
    let result8 = val5*((168*60)*60);
    let result9 = val5*((60*(168*60))*1000);  
    let resultsIrregular = [result1, result2, result3, result4]
    for (let i = 0;i<resultsIrregular.length; i++) {
        resultsIrregular[i] = resultsIrregular[i].toFixed(5);
    }
    box1.value = resultsIrregular[0];
    box2.value = resultsIrregular[1];
    box3.value = resultsIrregular[2];
    box4.value = resultsIrregular[3];
    box6.value = result5;
    box7.value = result6;
    box8.value = result7;
    box9.value = result8;
    box10.value = result9;
    
}
weekBox.addEventListener('input', function() {
    weekCalculator(weekBox.value, centuryBox, decadeBox, yearBox, monthBox, dayBox, hourBox, minuteBox, secondBox, milliBox)
})
function dayCalculator(val6,box1,box2,box3,box4,box5,box7,box8,box9,box10) {
    boxes = [box1,box2,box3,box4,box5,box7,box8,box9,box10]
    if (val6.trim() === "") {
        
        for (let i = 0; i<boxes.length; i++) {
            boxes[i].value = "";
        }
        return;
    }
    val6 = Number(val6);
    let result1 = val6/36525;
    let result2 = val6/3652.5;
    let result3 = val6/365.25;
    let result4 = val6/30.44;
    let result5 = val6/7;
    let result6 = val6*24;
    let result7 = val6*(24*60);
    let result8 = val6*((24*60)*60);
    let result9 = val6*((60*(24*60))*1000);  
    let results = [result1, result2, result3, result4, result5, result6, result7, result8, result9]
    for (let i = 0; i<results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
    
}
dayBox.addEventListener('input', function() {
    dayCalculator(dayBox.value, centuryBox, decadeBox, yearBox, monthBox, weekBox, hourBox, minuteBox, secondBox, milliBox)
})
function hourCalculator(val7,box1,box2,box3,box4,box5,box6,box8,box9,box10) {
    boxes = [box1,box2,box3,box4,box5,box6,box8,box9,box10]
    if (val7.trim() === "") {
        for (let i = 0; i<boxes.length; i++) {
            boxes[i].value = "";
        }
        return;
    }
    val7 = Number(val7);
    let result1 = val7/876600;
    let result2 = val7/87660;
    let result3 = val7/8766;
    let result4 = val7/730.5;
    let result5 = val7/168;
    let result6 = val7/24;
    let result7 = val7*60;
    let result8 = val7*(60*60);
    let result9 = val7*((60*60)*1000);  
    let results = [result1, result2, result3, result4, result5, result6, result7, result8, result9]
    for (let i = 0; i<results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
    
}
hourBox.addEventListener('input', function() {
    hourCalculator(hourBox.value, centuryBox, decadeBox, yearBox, monthBox, weekBox, dayBox, minuteBox, secondBox, milliBox)
})
function minuteCalculator(val8,box1,box2,box3,box4,box5,box6,box7,box9,box10) {
    boxes = [box1,box2,box3,box4,box5,box6,box7,box9,box10]
    if (val8.trim() === "") {
        for (let i = 0; i<boxes.length; i++) {
            boxes[i].value = "";
        }
        return;
    }
    val8 = Number(val8);
    let result1 = val8/52596000;
    let result2 = val8/5259600;
    let result3 = val8/525960;
    let result4 = val8/43830;
    let result5 = val8/(168*60);
    let result6 = val8/(24*60);
    let result7 = val8/60;
    let result8 = val8*60;
    let result9 = val8*(60*1000);  
    let results = [result1, result2, result3, result4, result5, result6, result7, result8, result9]
    for (let i = 0; i<results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
}
minuteBox.addEventListener('input', function() {
    minuteCalculator(minuteBox.value, centuryBox, decadeBox, yearBox, monthBox, weekBox, dayBox, hourBox, secondBox, milliBox)
})
function secondCalculator(val9,box1,box2,box3,box4,box5,box6,box7,box8,box10) {
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box10]
    if (val9.trim() === "") {
        for (let i = 0; i<boxes.length; i++) {
            boxes[i].value = "";
        }
        return;
    }
    val9 = Number(val9);
    let result1 = val9/(52596000*60);
    let result2 = val9/(5259600*60);
    let result3 = val9/(525960*60);
    let result4 = val9/(43830*60);
    let result5 = val9/((168*60)*60);
    let result6 = val9/((24*60)*60);
    let result7 = val9/(60*60);
    let result8 = val9/60;
    let result9 = val9*1000;  
    let results = [result1, result2, result3, result4, result5, result6, result7, result8, result9]
    for (let i = 0; i<results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
}
secondBox.addEventListener('input', function() {
    secondCalculator(secondBox.value, centuryBox, decadeBox, yearBox, monthBox, weekBox, dayBox, hourBox, minuteBox, milliBox)
})
function milliCalculator(val10,box1,box2,box3,box4,box5,box6,box7,box8,box9) {
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    if (val10.trim() === "") {
        for (let i = 0; i<boxes.length; i++) {
            boxes[i].value = "";
        }
        return;
    }
    val10 = Number(val10);
    let result1 = val10/((52596000*60)*1000);
    let result2 = val10/((5259600*60)*1000);
    let result3 = val10/((525960*60)*1000);
    let result4 = val10/((43830*60)*1000);
    let result5 = val10/(((168*60)*60)*1000);
    let result6 = val10/(((24*60)*60)*1000);
    let result7 = val10/((60*60)*1000);
    let result8 = val10/(60*1000);
    let result9 = val10/1000;  
    let results = [result1, result2, result3, result4, result5, result6, result7, result8, result9]
    for (let i = 0; i<results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxes[i].value = results[i];
    }
}
milliBox.addEventListener('input', function() {
    milliCalculator(milliBox.value, centuryBox, decadeBox, yearBox, monthBox, weekBox, dayBox, hourBox, minuteBox, secondBox)
})
//Mass Calculator
const impTonBox = document.getElementById('massImpTon');
const usTonBox = document.getElementById('massUSTon');
const metTonBox = document.getElementById('massMetTon');
const stoneBox = document.getElementById('massStone');
const kiloBox = document.getElementById('massKilo');
const poundBox = document.getElementById('massPound');
const ounceBox = document.getElementById('massOunce');
const gramBox = document.getElementById('massGram');
const milliMassBox = document.getElementById('massMilli');
const microBox = document.getElementById('massMicro');
boxes = [
    impTonBox,
    usTonBox,
    metTonBox,
    stoneBox,
    kiloBox,
    poundBox,
    ounceBox,
    gramBox,
    milliMassBox,
    microBox
];
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('focus', function() {
        boxes[i].select();
    })
}
function impTonCalculator(val1,boxes) {
    let boxesi = [boxes[1],boxes[2],boxes[3],boxes[4], boxes[5], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val1.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val1 = Number(val1);
    let results = [
        result1 = val1*1.12,
        result2 = val1*1.10604691,
        result3 = val1*160,
        result4 = val1*1106.04691,
        result5 = val1*2240,
        result6 = val1*35840,
        result7 = val1*1016046.91,
        result8 = val1*101604691,
        result9 = val1*1016046910000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesi[i].value = results[i];
    }
}
function usTonCalculator(val2,boxes) {
    let boxesi = [boxes[0],boxes[2],boxes[3],boxes[4], boxes[5], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val2.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val2 = Number(val2);
    let results = [
         val2*0.892857143,
         val2*0.90718474,
         val2*142.857143,
         val2*907.1847,
         val2*2000,
         val2*32000,
         val2*907184.74,
         val2*90718474,
         val2*907184740000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function metTonCalculator(val3,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[3],boxes[4], boxes[5], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val3.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val3 = Number(val3);
    let results = [
         val3*0.984206528,
         val3*1.10231131,
         val3*157.473044,
         val3*1000,
         val3*2204.62262,
         val3*35273.9619,
         val3*907184.74,
         val3*1000000,
         val3*1000000000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function stoneCalculator(val4,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[4], boxes[5], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val4.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val4 = Number(val4);
    let results = [
        val4 / 160,
        val4 / 142.857143,
        val4 / 157.473044,
        val4 * 6.35029318,
        val4 * 14,
        val4 * 224,
        val4 * 6350.29318,
        val4 * 6350293.18,
        val4 * 6350293180
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function kiloCalculator(val5,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[5], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val5.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val5 = Number(val5);
    let results = [
        val5 / 1016.04691,
        val5 / 907.18474,
        val5 / 1000,
        val5 / 6.35029318,
        val5 * 2.20462262,
        val5 * 35.2739619,
        val5 * 1000,
        val5 * 1000000,
        val5 * 1000000000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function poundCalculator(val6,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[4], boxes[6], boxes[7], boxes[8], boxes[9]];
    if (val6.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val6 = Number(val6);
    let results = [
        val6 / 2240,
        val6 / 2000,
        val6 / 2204.62262,
        val6 / 14,
        val6 * 0.45359237,
        val6 * 16,
        val6 * 453.59237,
        val6 * 453592.37,
        val6 * 453592370
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function ouncesCalculator(val7,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[4], boxes[5], boxes[7], boxes[8], boxes[9]];
    if (val7.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val7 = Number(val7);
    let results = [
        val7 / 35840,
        val7 / 32000,
        val7 / 35273.9619,
        val7 / 224,
        val7 / 35.2739619,
        val7 / 16,
        val7 * 28.349523125,
        val7 * 28349.523125,
        val7 * 28349523.125
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function gramCalculator(val8,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[4], boxes[5], boxes[6], boxes[8], boxes[9]];
    if (val8.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val8 = Number(val8);
    let results = [
        val8 / 1016046.91,
        val8 / 907184.74,
        val8 / 1000000,
        val8 / 6350.29318,
        val8 / 1000,
        val8 / 453.59237,
        val8 / 28.349523125,
        val8 * 1000,
        val8 * 1000000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function milliMassCalculator(val9,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[4], boxes[5], boxes[6], boxes[7], boxes[9]];
    if (val9.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val9 = Number(val9);
    let results = [
        val9 / 1016046910,
        val9 / 907184740,
        val9 / 1000000000,
        val9 / 6350293.18,
        val9 / 1000000,
        val9 / 453592.37,
        val9 / 28349.523125,
        val9 / 1000,
        val9 * 1000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
function MicroCalculator(val10,boxes) {
    let boxesi = [boxes[0],boxes[1],boxes[2],boxes[3], boxes[4], boxes[5], boxes[6], boxes[7], boxes[8]];
    if (val10.trim() === "") {
        for (let i = 0; i < boxesi.length; i++) {
            boxesi[i].value = "";
        }
        return;
    }
    val10 = Number(val10);
    let results = [
        val10 / 1016046910000,
        val10 / 907184740000,
        val10 / 1000000000000,
        val10 / 6350293180,
        val10 / 1000000000,
        val10 / 453592370,
        val10 / 28349523.125,
        val10 / 1000000,
        val10 / 1000
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(4);
        boxesi[i].value = results[i];
    }
}
let functionsMass = [
    impTonCalculator,
    usTonCalculator,
    metTonCalculator,
    stoneCalculator,
    kiloCalculator,
    poundCalculator,
    ouncesCalculator,
    gramCalculator,
    milliMassCalculator,
    MicroCalculator
];
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('input', function() {
        functionsMass[i](boxes[i].value, boxes)
    })
}
//Temp Calculator
const celciusBox = document.getElementById('tempCel');
const farenBox = document.getElementById('tempFaren');
const kelvinBox = document.getElementById('tempKel');
boxesTemp = [celciusBox, farenBox, kelvinBox];
for (let i = 0; i < boxes.length ; i++) {
    boxes[i].addEventListener('focus', function() {
        boxes[i].select();
    })
}
function celciusCalculator(val1, boxes) {
    boxesFiltered = boxes.filter((_, index) => index !== 0)
    if (val1.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val1 = Number(val1);
    let results = [
        val1*1.80+32,
        val1+273.5
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i];
    }
}
function farenCalculator(val2, boxes) {
    boxesFiltered = boxes.filter((_, index) => index !== 1)
    if (val2.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val2 = Number(val2);
    let results = [
        val2-32*(5/9),
        val2-32*(5/9) + 273.5
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i];
    }
}
function kelvinCalculator(val3, boxes) {
    boxesFiltered = boxes.filter((_, index) => index !== 2)
    if (val3.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val3 = Number(val3);
    let results = [
        val3-273.15,
        (val3-273.15)*9/5+32
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i];
    }
}
let functionsTemp = [celciusCalculator, farenCalculator, kelvinBox];
for (let i = 0; i < boxesTemp.length; i++) {
    boxesTemp[i].addEventListener('input', function () {
        functionsTemp[i](boxesTemp[i].value, boxesTemp);
    })
}
//Power Calculator
let boxesPower = [
     document.getElementById('powMegaWatt'),
     document.getElementById('powKiloWatt'),
     document.getElementById('powHorse'),
     document.getElementById('powWatt')
];
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('focus', function() {
        boxes[i].select();
    })
}
function megaWattCalculator (val1, boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 0)
    if (val1.trim() === "") {
        for (let i = 0; i < boxesFiltered.length ; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val1 = Number(val1);
    let results = [
        val1*1000,
        val1*1341.02209,
        val1*1000000
    ];
    for (let i = 0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(2); 
        boxesFiltered[i].value = results[i]; 
    }
}
function kiloWattCalculator (val2, boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 1)
    if (val2.trim() === "") {
        for (let i = 0; i < boxesFiltered.length ; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val2 = Number(val2);
    let results = [
        val2/1000,
        val2*1.34102209,
        val2*1000
    ];
    for (let i = 0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i]; 
    }
}
function horsePowCalculator (val3, boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 2)
    if (val3.trim() === "") {
        for (let i = 0; i < boxesFiltered.length ; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val3 = Number(val3);
    let results = [
        val3 / 1341.02209,
        val3 / 1.34102209,
        val3 * 745.699872
    ];
    for (let i = 0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i]; 
    }
}
function wattCalculator (val4, boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 3)
    if (val4.trim() === "") {
        for (let i = 0; i < boxesFiltered.length ; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val4 = Number(val4);
    let results = [
        val4 / 1000000,
        val4 / 1000,
        val4 / 745.699872
    ];
    for (let i = 0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFiltered[i].value = results[i]; 
    }
}
let functionsPower = [
    megaWattCalculator,
    kiloWattCalculator,
    horsePowCalculator,
    wattCalculator
]
for (let i = 0; i < boxesPower.length; i++) {
    boxesPower[i].addEventListener('input', function(){
        functionsPower[i](boxesPower[i].value, boxesPower)
    })
}
//Area Calculator
let boxesArea = [
    document.getElementById('areaKiloSq'),
    document.getElementById('areaHectare'),
    document.getElementById('areaAcre'),
    document.getElementById('areaMeterSq'),
    document.getElementById('areaCentiSq'),
    document.getElementById('areaMilliSq')
]
for (let i = 0; i < boxesArea.length; i++) {
    boxesArea[i].addEventListener('focus', function() {
        boxesArea[i].select();
    })
}
function kiloAreaCalculator (val1,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 0) 
    if (val1.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val1 = Number(val1);
    let results = [
        val1 * 100,
        val1 * 247.105381,
        val1 * 1000000,
        val1 * 10000000000,
        val1 * 1000000000000
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
function hectareCalculator (val2,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 1) 
    if (val2.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val2 = Number(val2);
    let results = [
        val2 / 100,
        val2 * 2.47105381,
        val2 * 10000,
        val2 * 100000000,
        val2 * 10000000000
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
function acreCalculator (val3,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 2) 
    if (val3.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val3 = Number(val3);
    let results = [
        val3 / 247.105381,
        val3 / 2.47105381,
        val3 * 4046.8564224,
        val3 * 40468564.224,
        val3 * 4046856422.4
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
function meterSqCalculator (val4,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 3) 
    if (val4.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val4 = Number(val4);
    let results = [
        val4 / 1000000,
        val4 / 10000,
        val4 / 4046.8564224,
        val4 * 10000,
        val4 * 1000000
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
function centiSqCalculator (val5,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 4) 
    if (val5.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val5 = Number(val5);
    let results = [
        val5 / 10000000000,
        val5 / 100000000,
        val5 / 40468564.224,
        val5 / 10000,
        val5 * 100
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
function milliSqCalculator (val6,boxes) {
    let boxesFiltered = boxes.filter((_, index) => index !== 5) 
    if (val6.trim() === "") {
        for (let i = 0; i < boxesFiltered.length; i++) {
            boxesFiltered[i].value = "";
        }
        return;
    }
    val6 = Number(val6 );
    let results = [
        val6 / 1000000000000,
        val6 / 10000000000,
        val6 / 4046856422.4,
        val6 / 1000000,
        val6 / 100
    ];
    for (let i =0; i < boxesFiltered.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFiltered[i].value = results[i];
    }
}
let functionsArea = [
    kiloAreaCalculator,
    hectareCalculator,
    acreCalculator,
    meterSqCalculator,
    centiSqCalculator,
    milliSqCalculator
]
for (let i = 0; i < boxesArea.length; i++) {
    boxesArea[i].addEventListener('input', function() {
        functionsArea[i](boxesArea[i].value, boxesArea);
    })
}
//Pressure
let boxesPres = [
    document.getElementById('presAtm'),
    document.getElementById('presBar'),
    document.getElementById('presKilo'),
    document.getElementById('presPa'),
    document.getElementById('presPsi'),
    document.getElementById('presTorr')
];
for (let i = 0; i < boxesPres.length; i++) {
    boxes[i].addEventListener('focus', function() {
        boxes[i].select();
    })
}
function atmosphereCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 0)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1.01325,
        val * 101.325,
        val * 101325,
        val * 14.6959,
        val * 760
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
function barCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 1)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 1.01325,
        val * 100,
        val * 100000,
        val * 14.5037738,
        val * 750.061683
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
function kiloPresCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 2)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 101.325,
        val / 100,
        val * 1000,
        val * 0.145037738,
        val * 7.50061683
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
function pascalCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 3)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 101325,
        val / 100000,
        val / 1000,
        val * 0.000145037738,
        val * 0.00750061683
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
function psiCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 4)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 14.6959,
        val / 14.5037738,
        val / 0.145037738,
        val / 0.000145037738,
        val * 51.7149326
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
function torrCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index != 5)
    if(val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 760,
        val / 750.061683,
        val / 7.50061683,
        val / 0.00750061683,
        val / 51.7149326
    ];
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].toFixed(2);
        boxesFil[i].value= results[i]
    }
}
let functionsPres = [
    atmosphereCalculator,
    barCalculator,
    kiloPresCalculator,
    pascalCalculator,
    psiCalculator,
    torrCalculator
]
for (let i = 0; i < boxesPres.length; i++) {
    boxesPres[i].addEventListener('input', function() {
        functionsPres[i](boxesPres[i].value, boxesPres)
    })
}
//Volume 
let boxesVol = [
    document.getElementById('volMeter'),
    document.getElementById('volLiter'),
    document.getElementById('volMilli'),
    document.getElementById('volCenti'),
    document.getElementById('volInch'),
    document.getElementById('volFoot')
];
for (let i = 0; i < boxesVol.length; i++) {
    boxesVol[i].addEventListener('focus', function() {
        boxesVol[i].select();
    })
}
function volMeterCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 0)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1000,
        val * 1000000,
        val * 1000000,
        val * 61023.7441,
        val * 35.3146667
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function volLiterCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 1)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 1000,
        val * 1000,
        val * 1000,
        val * 61.0237441,
        val * 0.0353146667
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function volMilliCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 2)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 1000000,
        val / 1000,
        val / 1000,
        val * 0.0610237441,
        val * 0.0000353146667
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function volCentiCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 3)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 1000000,
        val / 1000,
        val,
        val * 0.0610237441,
        val * 0.0000353146667
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function volInchCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 4)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.000016387064,
        val * 0.016387064,
        val * 16.387064,
        val * 16.387064,
        val / 1728
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function volFootCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 5)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.028316846592,
        val * 28.316846592,
        val * 28316.846592,
        val * 28316.846592,
        val * 1728
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
let functionsVol = [
    volMeterCalculator,
    volLiterCalculator,
    volMilliCalculator,
    volCentiCalculator,
    volInchCalculator,
    volFootCalculator
];
for (let i = 0; i < boxesVol.length; i++) {
    boxesVol[i].addEventListener('input', function () {
        functionsVol[i](boxesVol[i].value, boxesVol);
    }) 
}
let boxesSp = [
    document.getElementById('spMPS'),
    document.getElementById('spKMPH'),
    document.getElementById('spMPH'),
    document.getElementById('spFTPS'),
    document.getElementById('spKnot'),
    document.getElementById('spMach'),
];
for (let i =0; i < boxesSp.length; i++) {
    boxesSp[i].addEventListener('focus', function() {
        boxesSp[i].select();
    })
}
function spMPS(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 0)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 3.6,
        val * 2.23693629,
        val * 3.2808399,
        val * 1.94384449,
        val / 340.29
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function spKMPH(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 1)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 3.6,
        val / 1.609344,
        val / 1.09728,
        val / 1.852,
        val / 1225.044
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function spMPH(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 2)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.44704,
        val * 1.609344,
        val * 1.46666667,
        val * 0.868976242,
        val / 761.207051
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function spFTPS(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 3)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.3048,
        val * 1.09728,
        val * 0.681818182,
        val * 0.592483801,
        val / 1116.43701
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function spKnot(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 4)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.514444444,
        val * 1.852,
        val * 1.15077945,
        val * 1.68780986,
        val / 661.470842
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function spMach(val,boxes) {
    boxesFil = boxes.filter((_, index) => index !== 5)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 340.29,
        val * 1225.044,
        val * 761.207051,
        val * 1116.43701,
        val * 661.470842
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
let functionsSp = [
    spMPS,
    spKMPH,
    spMPH,
    spFTPS,
    spKnot,
    spMach
];
for (let i=0; i<functionsSp.length; i++) {
    boxesSp[i].addEventListener('input', function () {
        functionsSp[i](boxesSp[i].value, boxesSp);
    })
}
//Acceleration
let boxesAcc = [
    document.getElementById('accMSSq'),
    document.getElementById('accFSSq'),
    document.getElementById('accGrav'),
    document.getElementById('accGal'),
    document.getElementById('accInch'),
    document.getElementById('accKilo'),
];
for (let i = 0; i < boxesAcc.length; i++) {
    boxesAcc[i].addEventListener('focus', function () {
        boxesAcc[i].select();
    })
}
function accMeterSqCalculator (val, boxes) {
     boxesFil = boxes.filter((_, index) => index !== 0)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 3.2808399,
        val / 9.80665,
        val * 100,
        val * 39.3700787,
        val * 12960
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function accFootSqCalculator (val, boxes) {
     boxesFil = boxes.filter((_, index) => index !== 1)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.3048,
        val * 0.03108095,
        val * 30.48,
        val * 12,
        val * 3950.208
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function accGravCalculator (val, boxes) {
     boxesFil = boxes.filter((_, index) => index !== 2)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 9.80665,
        val * 32.1740486,
        val * 980.665,
        val * 386.088583,
        val * 127077.84
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function accGalCalculator (val, boxes) {
     boxesFil = boxes.filter((_, index) => index !== 3)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 100,
        val * 0.032808399,
        val / 980.665,
        val * 0.393700787,
        val * 129.6
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function accInchCalcualtor (val, boxes) {
     boxesFil = boxes.filter((_, index) => index !== 4)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 0.0254,
        val / 12,
        val * 0.00259008,
        val * 2.54,
        val * 329.184
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function accKiloCalculator (val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 5)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1000,
        val * 3280.8399,
        val * 101.971621,
        val * 100000,
        val * 39370.0787
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
let functionsAcc = [
    accMeterSqCalculator,
    accFootSqCalculator,
    accGravCalculator,
    accGalCalculator,
    accInchCalcualtor,
    accKiloCalculator
];
for (let i = 0 ; i< functionsAcc.length; i++) {
    boxesAcc[i].addEventListener('input', function() {
        functionsAcc[i](boxesAcc[i].value, boxesAcc)
    })
}
let boxesDense = [
    document.getElementById('denseKilo'),
    document.getElementById('denseGram'),
    document.getElementById('denseGramML'),
    document.getElementById('denseKiloL'),
    document.getElementById('densePound'),
    document.getElementById('denseInch')
];
for (let i=0; i<boxesDense.length; i++) {
    boxesDense[i].addEventListener('focus', function () {
        boxesDense[i].select();
    })
}
function denseKiloCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 0)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val / 1000,
        val / 1000,
        val / 1000,
        val * 0.0624279606,
        val * 0.000036127292
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function denseGramCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 1)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1000,
        val,
        val,
        val * 62.4279606,
        val * 0.036127292
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function denseGramMLCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 2)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1000,
        val,
        val,
        val * 62.4279606,
        val * 0.036127292
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function denseKiloLCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 3)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 1000,
        val,
        val * 1000,
        val * 62.4279606,
        val * 0.036127292
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function densePoundCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 4)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 16.0184634,
        val * 0.0160184634,
        val * 0.0160184634,
        val * 0.0160184634,
        val * 0.000578703704
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
function denseInchCalculator(val, boxes) {
    boxesFil = boxes.filter((_, index) => index !== 5)
    if (val.trim() === "") {
        for (let i = 0; i < boxesFil.length; i++) {
            boxesFil[i].value = "";
        }
        return;
    }
    val = Number(val);
    let results = [
        val * 27679.9047,
        val * 27.6799047,
        val * 27.6799047,
        val * 27.6799047,
        val * 1728
    ];
    for (let i = 0; i < boxesFil.length; i++) {
        results[i] = results[i].toFixed(3);
        boxesFil[i].value = results[i];
    }
}
let functionsDense = [
    denseKiloCalculator,
    denseGramCalculator,
    denseGramMLCalculator,
    denseKiloLCalculator,
    densePoundCalculator,
    denseInchCalculator
];
for (let i=0; i<boxesDense.length; i++) {
    boxesDense[i].addEventListener('input', function () {
        functionsDense[i](boxesDense[i].value, boxesDense);
    })
}