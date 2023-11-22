function myFunction() {
    document.getElementById("result").innerHTML = " The area is: ";
    
    const base = document.getElementById('base').value; 
    const height = document.getElementById('height').value;

  if (base <= 0 || height <= 0 ){
      alert("The base and height must use values greater than zero.")
  } else {
      const b =  base / 2;
      const h =  height;
      const area = b * h;
      document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + area + " squared";
  }function area (base,height){
   const area =(base*height)/2;
   return area;
}}