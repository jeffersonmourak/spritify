# Spritify;

>is a standalone library for easy management of animations in pictures

## Demo

[Live example!](http://jeffersonmourak.com/demos/spritify/)

## Usage

1. Download the file [spritify.js](https://github.com/jeffersonmourak/spritify/archive/master.zip)

2. import the code on your HTML file:

    ```html
    <script type="text/javascript" src="spritify.js"></script> 
    ```

3. import your CSS file with parameters of sprite

    ```html
    <link rel="stylesheet" href="path/of/sprite.css"></link> 
    ```
4. and implement

    ```javascript
        sprites.animate({
            frames : 6,
            loop : false,
            target : "#sprite",
            animationTime : 70,
            spriteClass : "icon-sprite",
            reverse : false
        }); 
    ```
## What can i use ?

functions         | value           | Default      | Required     | Description|
---               | ---             | ---          | ---          | ---          |
`frames`          | `integer`       | None         | `true`       | set the max of frames your sprite have.|
`loop`            | `boolean`       | `true`       | `false`      | set if your sprite have loop or not|
`target`          | `string`        | None         | `true`       | set the element that will receive the animation|
`animationTime`   | `integer`       | `70`         | `false`      | set the frame time of animation|
`spriteClass`     | `string`        | None         | `true`       | set the class prefix of animation (example: "anim-1", "anim-2" in this case the class prefix is "anim-")|
`reverse`         | `boolean`       | `false`      | `false`      | set if the animation is backwards|
`firstNumber`     | `integer`       | `1`          | `false`      | set the first frame of animation|


## Contributing

1. Fork
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

>Feature branch (`git checkout -b my-new-feature`) | commit (`git commit -m 'Add some feature'`) | push (`git push origin my-new-feature`)
## License

[MIT License](http://opensource.org/licenses/MIT)
