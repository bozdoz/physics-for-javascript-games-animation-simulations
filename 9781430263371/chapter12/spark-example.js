﻿var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var spark = new Spark(5, 255, 255, 0, 0.5, 1);
spark.pos2D = new Vector2D(200, 200);
spark.draw(context);
