$(document).ready(function () {

class Shape{
    constructor() {
        this.div = document.createElement('div');
        shapeArea.append(this.div);
        // var postPercent = Math.floor(Math.random() * 100) +1;
        // this.div.style.transform = `translatex(${postPercent}%)`;
        var firstPostNum = Math.floor(Math.random() * 6);
        var secPostNum = Math.floor(Math.random() * 6);
        this.div.style.top = `${firstPostNum}00px`;
        this.div.style.left = `${secPostNum}00px`;
        // this.div.style.transform = 'translate(-50%, -50%)'
        this.div.addEventListener('click', () => {
            this.describe();
            // console.log(this.name);
        })
        this.div.addEventListener('dblclick', () => {
            
            this.div.remove();
            })
        
    }
    describe(){
        console.log(this.name);
        if (this.name == "Triangle") {
        $("#shapeName").text("Triangle");
        $('#width').text(this.height);
        $('#height').text(this.height);
        $('#radius').text("N/A");
        $('#area').text( (0.5 * this.height * this.height) );
        $('#perimeter').text( (2 * this.height + (Math.sqrt(2) * this.height)) );
        } else if (this.name == "Circle"){
            $('#shapeName').text("Circle");
             $('#width').text("N/A");
             $('#height').text("N/A");
             $('#radius').text((this.radius / 2));
             $('#area').text(Math.pow((Math.PI * this.radius), 2));
             $('#perimeter').text((2 * Math.PI * this.radius));
        } else if (this.name == "Square") {
            $('#shapeName').text("Square");
             $('#width').text(this.sideLength);
             $('#height').text(this.sideLength);
             $('#radius').text("N/A");
              $('#area').text(this.sideLength * this.sideLength);
              $('#perimeter').text(this.sideLength * 4);
        } else if (this.name == "Rectangle"){
            $('#shapeName').text("Rectangle");
             $('#width').text(this.width);
             $('#height').text(this.height);
             $('#radius').text("N/A");
             $('#area').text(this.width * this.height);
             $('#perimeter').text((this.width * 2) + (this.height * 2));
        } else{
            alert("Error");
        }
    }
    
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
        this.name = "Circle";
        this.div.className = "Circle";
    }
    
}

class Triangle extends Shape{
    constructor(height){
        super(height);
        this.height = height;
        this.name = "Triangle";
        this.div.className = "Triangle";
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width=width,
        this.height=height
        this.name = "Rectangle";
        this.div.className = "Rectangle";
    }
}

class Square extends Shape{
constructor(sideLength){
    super();
    this.sideLength=sideLength;
    this.name = "Square";
    this.div.className = "Square";
    } 
    
}




$('#triBtn').on("click", function() {
    const newTri = new Triangle;
    console.log("Triangle spawned");
    var currentTriHeight = $('#triHeight').val();
    console.log(currentTriHeight);
    // newTri.size = currentTriHeight;
    newTri.height = currentTriHeight;
    newTri.div.style.borderBottom = `${currentTriHeight}00px solid yellow`;
    newTri.div.style.borderRight = `${currentTriHeight}00px solid transparent`;
    })


$('#squareBtn').on("click", function() {
    const newSquare = new Square;
    console.log("Square spawned");
    var currentSquareSide = $('#squareLength').val();
    console.log(currentSquareSide);
    newSquare.sideLength = currentSquareSide;
    newSquare.div.style.width = `${currentSquareSide}00px`;
    newSquare.div.style.height = `${currentSquareSide}00px`;
    })

    $('#circBtn').on("click", function() {
        const newCircle = new Circle;
        console.log("Circle spawned");
        var circRadius = $('#circRad').val();
        console.log(circRadius);
        newCircle.radius = circRadius;
        newCircle.div.style.width = `${circRadius}00px`;
        newCircle.div.style.height = `${circRadius}00px`;
        })

        $('#recBtn').on("click", function() {
            var currentRecHeight = $('#recHeight').val();
            var currentRecWidth = $('#recWidth').val();
            if (currentRecWidth == currentRecHeight) {
                alert("That's... just a square. Isn't it?  Maybe try inserting one of them instead?")
            } else {
                const newRec = new Rectangle;
            console.log("Rectangle spawned");
            console.log(currentRecHeight, currentRecWidth);
            newRec.height = currentRecHeight;
            newRec.width = currentRecWidth;
            newRec.div.style.height = `${currentRecHeight}00px`; 
            newRec.div.style.width = `${currentRecWidth}00px`;
            }
            })


})