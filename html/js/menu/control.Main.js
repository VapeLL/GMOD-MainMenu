function ControllerMain($scope) {
	$scope.images = [ // Here you can link you picture for the panel
	  "https://cdn-uploads.gameblog.fr/img/news/397204_61f265fc3f01b.jpg",
	  "https://tm.ibxk.com.br/2022/03/24/24120421449168.jpg?ims=1200x675", 
	];
  
	$scope.currentImageIndex = 0;
  
	$scope.newsItems = [
	  {
		Url: "https://www.youtube.com/watch?v=CKA1zCwcYBE", // URL when u click on Title
		Title: "The Legend Of Zelda <3", // The Title display
		Description: "Clique au dessus pour une belle mélodie...", // The description display
	  },
	  {
		Url: "https://www.youtube.com/watch?v=CKA1zCwcYBE", 
		Title: "The Legends Of My Dream !", 
		Description: "Clique au dessus pour une belle mélodie...",
	  },
	];
  
	$scope.CurrentNewsItem = $scope.newsItems[0]; // Link
  
	$scope.NewsItemBackground = function () {
	  return "background-image: url(" + $scope.images[$scope.currentImageIndex] + ")";
	};
  
	$scope.OpenInSteam = function (url) {
	  lua.Run("gui.OpenURL('" + url + "')");
	};
  
	setInterval(function () {
	  $scope.currentImageIndex = ($scope.currentImageIndex + 1) % $scope.images.length;
	  $scope.CurrentNewsItem = $scope.newsItems[$scope.currentImageIndex]; // Update  
	  $scope.$apply();
	}, 5000);
}

// Here you got all the function for the music in main menu 
var music = document.getElementById("music");
var playPause = document.getElementById("playPause");
var volume = document.getElementById("volume"); // Manage the volume
var StopMusic = document.getElementById("StopMusic");
music.volume = 0.1; // Volume of the music at the start
playPause.addEventListener("click", function () {
if (music.paused) {
	music.play();
	playPause.src = "../html/img/pause.png"; //  Image of pause button
} else {
	music.pause();
	playPause.src = "../html/img/play.png"; // Image of play button
}
});
volume.addEventListener("input", function () {
music.volume = volume.value;
});
StopMusic.addEventListener("click", function () {
music.pause();
});
