document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsinput').addEventListener('input', function(e) {
    let lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = lbs / .002204;
    document.getElementById('KLgramsOutput').innerHTML = lbs / 2.2204;
    document.getElementById('OuncsOutput').innerHTML = lbs * 16;

});