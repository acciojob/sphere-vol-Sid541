function volume_sphere() {
    //Write your code here  // Step 1: Retrieve the radius value
    var radius = parseFloat(document.getElementById('radiusInput').value);

    // Step 2: Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('outputField').innerText = 'NaN';
        return;
    }

    // Step 3: Calculate the volume
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Step 4: Round the result
    volume = volume.toFixed(4);

    // Step 5: Display the result
    document.getElementById('outputField').innerText = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
