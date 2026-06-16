// Students object and arrays for multiple students

let Students = {
    name: ["Areeba", "Noor", "Hajira"],
    marks: [92, 87, 45],

    Checkresult: function () {

        for (let i = 0; i < this.marks.length; i++) {

            if (this.marks[i] >= 50)
                console.log(this.name[i] + " : PASS");

            else
                console.log(this.name[i] + " : FAIL");
        }
    },

    average: function () {

        let total = 0;

        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }

        let calculation = total / this.marks.length;

        console.log("Average marks =", calculation);
    }
};

Students.Checkresult();

Students.average();