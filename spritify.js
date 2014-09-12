/*
	Spritify, JavaScript Library to manage all sprites in just one picture,
	What you need to use:
		A picture file with ALL yours sprites,
		A CSS File with classes with the position and a numeric sequence in name (i recomend generate those files with SpriteSmith),
		and import the library in the project.
		to learn how to use the library look on GitHub repository.
*/
function sprites(){var e;return{animate:function(t){if(typeof t.frames=="undefined"){console.warn("limite de frames não adicionado\n por favor adicione um limite com o objeto {frames: X}")}if(typeof t.target=="undefined"){console.warn("Div trajeto não foi adicionada\n por favor adicione o seletor da div trajeto com o objeto {target: seletor}")}if(typeof t.spriteClass=="undefined"){console.warn("A o padrão de classe não foi adicionada\n por favor adicione o padrão com o objeto {spriteClass: padraoDaClasse}")}if(t.frames){if(typeof t.loop=="undefined"){t.loop=true}if(typeof t.firstNumber=="undefined"){t.firstNumber=1}if(typeof t.animationTime=="undefined"){t.animationTime=70}var n=t.firstNumber;var r=document.querySelector(t.target);if(typeof e=="undefined"){e=r.className}if(!t.reverse){var i=setInterval(function(){if(n>t.frames){if(t.loop){n=t.firstNumber}else{n=t.frames;clearInterval(i)}}r.className=e+" "+t.spriteClass+n;n+=1},t.animationTime)}else{n=t.frames;var s=setInterval(function(){if(n<t.firstNumber){if(t.loop){n=t.frames}else{n=t.firstNumber;clearInterval(s)}}r.className=e+" "+t.spriteClass+n;n-=1},t.animationTime)}}}}}var sprites=new sprites