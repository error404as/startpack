
document.addEventListener("DOMContentLoaded", function(){
    

    document.body.addEventListener('click', function(e) {
        
        var openedSelect = document.querySelector('.field-select.m-custom.m-opened');
        if(openedSelect && !e.target.closest('.field-select.m-custom')){
            openedSelect.classList.remove('m-opened');
        }

    });

    var navModal = document.querySelector('.header__nav');
    if(navModal){
        attachSwipe(navModal, 'right', function() {
            navModal.classList.remove('m-opened');
        });

        navModal.querySelector('.e-close').addEventListener('click', function(e) {
            navModal.classList.remove('m-opened');
        });
        
        var navModalOpener = document.querySelector('.header__nav-btn button');
        if(navModalOpener){
            navModalOpener.addEventListener('click', function(e) {
                navModal.classList.add('m-opened');
            });
        }
    }

    var splashScreen = document.querySelector('.splash-screen');
    if(splashScreen){
        splashScreen.classList.add('u-hidden'); // TEST
        setTimeout(function() {
            splashScreen.classList.add('m-hidden');
        }, 1000);
        setTimeout(function() {
            splashScreen.classList.add('u-hidden');
        }, 1500);
    }

    var multiSelectors = document.querySelectorAll('.input-multi-selector');
    if(multiSelectors.length){
        [].forEach.call(multiSelectors, function(multiSelector) {
            var btn = multiSelector.querySelector('.btn-add');
            var popup = multiSelector.querySelector('.popup-multi-selector');
            var popupPrimeBtn = multiSelector.querySelector('.popup-multi-selector .btn-primary');
            if(btn && popup){
                btn.addEventListener('click', function(e) {
                    popup.classList.add('m-opened');
                });
                popup.querySelector('.e-close').addEventListener('click', function(e) {
                    popup.classList.remove('m-opened');
                });
                if(popupPrimeBtn){
                    popupPrimeBtn.addEventListener('click', function(e) {
                        popup.classList.remove('m-opened');
                    }); 
                }
            }
        });
    }


    var customSelect = document.querySelectorAll('.field-select.m-custom');
    [].forEach.call(customSelect, function(select, index) {
        var btn = select.querySelector('.field-select__btn');
        var val = select.querySelector('.field-select__val');
        var dropdown = select.querySelector('.field-select__dropdown');
        var values = dropdown.querySelectorAll('label');
        var current = null;
        btn.addEventListener('click', function() {
            var current = document.querySelector('.field-select.m-custom.m-opened');
            if(current && current !== select) {
                current.classList.remove('m-opened');
            }
            select.classList.toggle('m-opened');
        });
        [].forEach.call(values, function (item, ind) {
            var inp = item.querySelector('input');
            if(inp){
                inp.name = 'select' + index;
                if(inp.checked || !current){ // checked one or first one found
                    current = inp;
                }
                item.addEventListener('click', function(e) {
                    var current = e.currentTarget.querySelector('input');
                    btn.innerHTML = current.getAttribute('data-label');
                    val.value = current.value;
                    val.setAttribute('data-label', current.getAttribute('data-label'));
                    select.classList.remove('m-opened');
                });
            }
        });
        if(current){
            current.checked = true; // in case of no selection check the first one as default
            btn.innerHTML = current.getAttribute('data-label');
            val.value = current.value;
            val.setAttribute('data-label', current.getAttribute('data-label'));
        } else {
            btn.innerHTML = btn.getAttribute('data-label');
        }
    });
    
    var hSliders = document.querySelectorAll('.hslider');
    if(hSliders.length){
        [].forEach.call(hSliders, function(slider) {
            initSlider(slider);
        });
    }

    var showMore = document.querySelectorAll('.btn-show-more .btn');
    if(showMore.length){
        [].forEach.call(showMore, function(btn) {
            btn.addEventListener('click', function() {
                var content = btn.closest('.btn-show-more').parentElement.querySelector('.show-more-hidden');
                var sliderWrapper = btn.closest('.hslider');
                if(content){
                    btn.closest('.btn-show-more').classList.add('m-hidden');
                    content.classList.add('m-open');

                    if(sliderWrapper) { adjustSlider(sliderWrapper); }
                }
            });
        });
    }

    var teamToggles = document.querySelectorAll('.teams-toggle');
    if(teamToggles.length){
        [].forEach.call(teamToggles, function(toggle) {
            toggle.addEventListener('click', function(e) {
                var elem = e.target.closest('.team');
                if(elem){
                    toggle.querySelector('.team.m-active').classList.remove('m-active');
                    elem.classList.add('m-active');
                }
            });
        });
    }

    var hTabs = document.querySelectorAll('.htabs');
    if(hTabs.length){
        [].forEach.call(hTabs, function(tabs) {
            tabs.addEventListener('click', function(e) {
                var elem = e.target.closest('button');
                if(elem){
                    tabs.querySelector('.active').classList.remove('active');
                    elem.classList.add('active');
                    elem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        });
    }

    var resultsGridTabs = document.querySelectorAll('.results-grid__tabs');
    if(resultsGridTabs.length){
        [].forEach.call(resultsGridTabs, function(tabs) {
            tabs.addEventListener('click', function(e) {
                var elem = e.target.closest('button');
                if(elem){
                    tabs.querySelector('.active').classList.remove('active');
                    elem.classList.add('active');
                }
            });
        });
    }
    
    var expandables = document.querySelectorAll('.expandable-block');
    if(expandables.length){
        [].forEach.call(expandables, function(block) {
            var items = block.querySelectorAll('.expandable-block__item');
            [].forEach.call(items, function(item) {
                item.addEventListener('click', function(e) {
                    var elem = e.target.closest('.e-head');
                    var active = block.querySelector('.m-active');
                    var current = e.currentTarget;
                    if(elem){
                        if(active) {
                            active.classList.remove('m-active');
                            animHeight(active, active.querySelector('.e-body'), 0);
                        }
                        if(active !== e.currentTarget) {
                            current.classList.add('m-active');
                            animHeight(current, current.querySelector('.e-body'), 1);
                        }
                    }
                });
            });
        });
    }

    var autoCompleteInputs = document.querySelectorAll('.field-input.m-autocomplete');
    if(autoCompleteInputs.length){
        [].forEach.call(autoCompleteInputs, function(autoComplete) {
            var deselectBtn = autoComplete.querySelector('.input-selected-value .btn-clear');
            if(deselectBtn){
                deselectBtn.addEventListener('click', function(e) {
                    autoComplete.classList.remove('m-selected');
                    setTimeout(function(){
                        autoComplete.querySelector('.input-selected-value').classList.add('u-hidden');
                    }, 500);
                });
            }
        });
    }
    
});

function animHeight(block, elem, isExpanding) {
    block.classList.add('m-animate');
    var h = elem.clientHeight;
    if(isExpanding){
        elem.style.height = '1px';
        setTimeout(function() {
            elem.style.height = h + 'px';
        }, 10);
    } else {
        elem.style.height = h + 'px';
        setTimeout(function() {
            elem.style.height = '1px';
            elem.style.marginBottom = '-20px';
        }, 10);
    }
    setTimeout(function() {
        elem.style.height = '';
        elem.style.marginBottom = '';
        block.classList.remove('m-animate');
    }, 500);
}

function initSlider(slider) {
    if(typeof slider.maxSlides !== 'undefined') return;

    var slides = slider.querySelectorAll('.hslider__item');
    slider.currentSlide = 0;
    slider.maxSlides = slides.length;

    [].forEach.call(slides, function(slide, ind) {
        var prevBtn = slide.querySelector('.hslider__btn-prev');
        var nextBtn = slide.querySelector('.hslider__btn-next');
        if(prevBtn) {
            if(ind === 0) { prevBtn.disabled = true; }
            prevBtn.addEventListener('click', moveSliderPrev.bind(null, slider));
        }
        if(nextBtn) {
            if(ind === slides.length - 1) { nextBtn.disabled = true; }
            nextBtn.addEventListener('click', moveSliderNext.bind(null, slider));
        }
    });
    
    attachSwipe(slider, 'left', moveSliderNext.bind(null, slider));
    attachSwipe(slider, 'right', moveSliderPrev.bind(null, slider));
    
    if(slider.className.indexOf('m-with-dots')){
        var dotsHTML = '';
        for(var i = 0; i < slides.length; i++) {
            dotsHTML += '<div class="e-dot"></div>';
        }
        var dots = slider.querySelector('.hslider__dots');
        if(!dots) {
            dots = document.createElement('div');
            dots.className = 'hslider__dots';
            slider.appendChild(dots);
        }
        dots.innerHTML = dotsHTML;
        dots.children[slider.currentSlide].classList.add('m-active');
    }

    adjustSlider(slider);
}

function moveSliderNext(wrapper) {
    if(wrapper.currentSlide < wrapper.maxSlides - 1){
        wrapper.currentSlide += 1;
        moveSlider(wrapper);
    }
}
function moveSliderPrev(wrapper) {
    if(wrapper.currentSlide > 0){
        wrapper.currentSlide -= 1;
        moveSlider(wrapper);
    }
}
function moveSlider(wrapper) {
    var slides = wrapper.querySelectorAll('.hslider__item');
    var current = wrapper.currentSlide;
    [].forEach.call(slides, function(slide) {
        slide.style.transform = 'translateX(-' + current + '00%)';
    });
    adjustSlider(wrapper);

    var dots = wrapper.querySelector('.hslider__dots');
    if(dots) {
        var activeDot = dots.querySelector('.m-active');
        if(activeDot){
            activeDot.classList.remove('m-active');
        }
        dots.children[wrapper.currentSlide].classList.add('m-active');
    }

    if(wrapper.getBoundingClientRect().top < 0){
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function adjustSlider(wrapper) {
    var slides = wrapper.querySelectorAll('.hslider__item');
    var current = wrapper.currentSlide;
    wrapper.style.height = slides[current].scrollHeight + 'px';
}

// attachSwipe( document.body, 'right', function(){ console.log('swipe right') } )
function attachSwipe(elem, dir, cb) {
    if(typeof elem !== 'object' || typeof cb !== 'function') return;
    
    if(!elem.hasSwipeListener){
        elem.hasSwipeListener = {};
        elem.addEventListener('touchstart', function(e) {
            elem.swipeStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };
        });
        elem.addEventListener('touchend', function(e) {
            if(elem.swipeStart){
                var dirL = elem.swipeStart.x - e.changedTouches[0].clientX > 50;
                var dirR = e.changedTouches[0].clientX - elem.swipeStart.x > 50;
                var dirT = elem.swipeStart.y - e.changedTouches[0].clientY > 50;
                var dirB = e.changedTouches[0].clientY - elem.swipeStart.y > 50;
                if(elem.hasSwipeListener['left'] && dirL && !dirT && !dirB) elem.hasSwipeListener['left']();
                if(elem.hasSwipeListener['right'] && dirR && !dirT && !dirB) elem.hasSwipeListener['right']();
                if(elem.hasSwipeListener['top'] && dirT && !dirL && !dirR) elem.hasSwipeListener['top']();
                if(elem.hasSwipeListener['bottom'] && dirB && !dirL && !dirR) elem.hasSwipeListener['bottom']();
            }
            elem.swipeStart = null;
        });
    }
    elem.hasSwipeListener[dir] = cb;
}



function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
    
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}