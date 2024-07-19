document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  console.log("button clicked")
});

document.getElementById('playButton').addEventListener('click', function() {
  document.getElementById('audio').play();
});

document.getElementById('pauseButton').addEventListener('click', function() {
  document.getElementById('audio').pause();
});