var gulp = require("gulp")
var svgSprite = require("gulp-svg-sprite")
var rename = require("gulp-rename")
var del = require("del")
var svg2png = require("gulp-svg2png")

// gulp-svg-sprite needs it config as an object literal
var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite, render){
						return render(sprite).split(".svg").join(".png")
					}
				}
			},
			sprite: "sprite.svg",
			render: {
				css: {
					template: "./gulp/templates/sprite.css"
				}
			}
		}
	}
}

gulp.task("beginClean", function() {
	return del(["./app/temp/sprite", "./app/assets/images/sprites"])
})

gulp.task("createSprite", ["beginClean"], function() {
	// /**/ = any subfolders
	return gulp.src("./app/assets/images/icons/**/*.svg")
		.pipe(svgSprite(config))
		.pipe(gulp.dest("./app/temp/sprite/"))
})

gulp.task("createPngCopy", ["createSprite"], function() {
	return gulp.src("./app/temp/sprite/css/*.svg")
	.pipe(svg2png())
	.pipe(gulp.dest("./app/temp/sprite/css"))
})

// [function name] tells task what functions it's dependant on, so it won't run simultaneously.
gulp.task("copySpriteGraphic", ["createPngCopy"],function () {
	// {svg,png} includes both extensions
	return gulp.src("./app/temp/sprite/css/**/*.{svg,png}")
		.pipe(gulp.dest("./app/assets/images/sprites/"))
})

gulp.task("copySpriteCSS", ["createSprite"], function() {
	return gulp.src("./app/temp/sprite/css/*.css")
		.pipe(rename("_sprite.css"))
		.pipe(gulp.dest("./app/assets/styles/modules"))
})

gulp.task("endClean", ["copySpriteGraphic", "copySpriteCSS"], function() {
	return del("./app/temp/sprite")
})

gulp.task("icons", ["beginClean","createSprite", "createPngCopy", "copySpriteGraphic", "copySpriteCSS", "endClean"])