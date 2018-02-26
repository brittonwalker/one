/**
 * _Gradient.js
 */

import $ from 'jquery';
import 'slick-carousel';

class CreateSVG {

    constructor() {

        $('.feature-slides').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });

    }
}
new CreateSVG();