document.addEventListener('DOMContentLoaded', function () {
    new GreenAudioPlayer('#music-player');

    var player = document.getElementById("lagu");
    player.addEventListener("play", function () {
        console.log("Liat apaan?");

        var classContainer = document.getElementsByClassName("container")[0];
        var classBulat = document.createElement("div");
        classBulat.className = "bulat";
        classContainer.appendChild(classBulat);

        //=================================================
        //Create span bulat
        for (var x = 0; x < 20; x++) {
            var classSpan = document.createElement("span");
            classBulat.appendChild(classSpan);
        }

        //=================================================
        //Crate keyframe css, set picture
        let percent = 0;
        let urlImg = [];
        let keyFrame = {};
        keyFrame.name = "pictFrame";

        for (let x = 0; x < 16; x++) {
            urlImg[x] = 'url("img/tenor (' + (x + 1) + ').gif")';
            keyFrame[percent + "%"] = { content: urlImg[x], width: '200px' };
            percent += 6;
        }

        keyFrame["96%"] = { content: 'url("img/tenor (17).gif")', width: '200px' };
        keyFrame["100%"] = { content: 'url("img/tenor (17).gif")', width: '200px' };

        $.keyframe.define([keyFrame]);
        // $(pict).playKeyframe(
        //     'pictFrame 60s linear infinite'
        // );

        //=================================================
        //Background color
        let bgPercent = 20;
        let bgKeyFrame = {};
        let bgColors = ["#c79ae6", "#ff8466", "#fadf7d", "#69e362"];
        bgKeyFrame.name = "body1";

        for (let x = 0; x < 4; x++) {
            bgKeyFrame[bgPercent + "%"] = { background: bgColors[x], transition: "background-color 5s linear" };
            bgPercent += 20;
        }

        $.keyframe.define([bgKeyFrame]);
        $(belakang).playKeyframe(
            'body1 20s linear infinite'
        );

        //=================================================
        //Moving  music player
        var mar = document.getElementById("music-player");
        // mar.style.top = "50%";
        $("#music-player").css({"top": "80%"});
    });

});

