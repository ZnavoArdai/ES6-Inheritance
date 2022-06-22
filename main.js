// 1


// class Student{

//     constructor(fname,classOfStud,idNumber){
//         this.fname=fname;
//         this.classOfStud=classOfStud;
//         this.idNumber=idNumber;
//     }

 
// }

// 2
// let student1=new Student("avi","12","2466565")
// let student2=new Student("natan","10","88356565")


// for (const key in student1){

//     console.log(student1[key])

// }
// for (const key in student2){
//     console.log(student2[key]) 

// }

// class HigheSchoolStudent extends Student{

// }

// let student3=new HigheSchoolStudent("haim","9","32655462");

// for (const key in student3){
//     console.log(student3[key])

// }


// class HigheSchoolStudent extends Student{

//     constructor(fname,classOfStud,idNumber,age,height){

//         super(fname,classOfStud,idNumber)

//         this.age=age;
//         this.height=height;

//     }
// }



// let student4=new HigheSchoolStudent("haim","9","32655462",25,1.85);

// for (const key in student4){
//     console.log(student4[key])

// }



// class MiddelSchool extends Student{

// }
// let student5=new MiddelSchool("haim","9","32655462");

// for (const key in student5){
//     console.log(student5[key])

// }



//תרגיל מסכםclasses

class Car{

    constructor(wheels,engin,color){
        this.wheels=wheels;
        this.engin=engin;
        this.color=color;

    }
    static biggerEngin(array){

        let maxengin = array[0]
        array.forEach(obj => {
            if (maxengin.engin<obj.engin){
                maxengin = obj
            }
            
        });
        return maxengin

    }

    detailes(){

       return `wheels:${this.wheels} engin:${this.engin} color:${this.color}`
    }






}


class Jeep extends Car{

    constructor(wheels,engin,color,nameof){
     super(wheels,engin,color)

    this.nameof=nameof;

    } 

    detailes(){
        return `${this.detailes()}name:${this.nameof}`

    }

    get secret(){
       return this.firstAndLastWord();   
    }

    firstAndLastWord(){

let one=this.nameof.charAt(0).toUpperCase() + this.nameof.slice(1,this.nameof.length-1);
let two=this.nameof.charAt(this.nameof.length-1).toUpperCase();

     return one+two
        
    }



}

let oneJeep1=new Jeep("4",1400,"black","jeepon");
let oneJeep2=new Jeep("4",1800,"black","jeepon");
let oneJeep3=new Jeep("4",1700,"black","jeepon");
let array1=[oneJeep1,oneJeep2,oneJeep3]




// onload=function biggerEngin(){

//     for (let i = 0; i < array1.length; i++) {


//         let max=array1[0].engin;

//     if(max<array1[i].engin){
//         max=array1[i].engin
//     }

//     console.log(max)


// }

// }
class Bus extends Car{
    constructor(wheels,engin,color,nameof){
        super(wheels,engin,color)
   this.nameof=nameof;
       } 

       detailes(){
        return `${this.detailes()} name:${this.nameof}`
       }
}

class Privat extends Car{
    constructor(wheels,engin,color, nameof){
        super(wheels,engin,color)
   this.nameof=nameof;
       } 

       detailes(){
        return `${this.detailes} name:${this.nameof}`
       }
}

btn.onclick=function creatCar(){
    let creatcar;
    switch(sel.value){

        case "Jeep":
            creatcar=new Jeep(wheelNum.value,enginNum.value,color1.value,name1.value);

break;
        
        case "Bus":
            creatcar=new Jeep(wheelNum.value,enginNum.value,color1.value,name1.value);
break;
        
        case "Privat":
            creatcar=new Jeep(wheelNum.value,enginNum.value,color1.value,name1.value);
break;
        
    }


    tbod.innerHTML+=`<tr><td>${creatcar.wheels}</td><td>${creatcar.engin}</td><td>${creatcar.color}</td><td>${creatcar.nameof}</td></tr>`

    
}

