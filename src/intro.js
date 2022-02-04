
    function area()
    {
      var x = document.getElementById("length").value;
      var y = document.getElementById("width").value;
      var Area = x*y;
      var Perimeter =(x*2)+(y*2);
      document.getElementById("areaOfRectangle").innerHTML= "Area is "+ Area +" sq. mtr.";
      document.getElementById("perimeterOfRectangle").innerHTML= "Perimeter is "+ Perimeter +" mtr";
    }

