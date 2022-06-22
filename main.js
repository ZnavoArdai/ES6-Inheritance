1


class Student{

    constructor(fname,classOfStud,idNumber){
        this.fname=fname;
        this.classOfStud=classOfStud;
        this.idNumber=idNumber;
    }
}

2
let student1=new Student("avi","12","2466565")
let student2=new Student("natan","10","88356565")


for (const key in student1){

    console.log(student1[key])

}
for (const key in student2){
    console.log(student2[key])

}

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



class MiddelSchool extends Student{

}
let student5=new MiddelSchool("haim","9","32655462");

for (const key in student5){
    console.log(student5[key])

}


