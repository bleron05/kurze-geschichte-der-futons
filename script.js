(function ($) {
 $(function () {
	function toggleContent(sectionId) {
		// Hide all sections
		$('.page-section').hide();
		
		// Show the selected section
		$(sectionId).show();
	}

	// Initially show the "Overview" content and hide the timeline and other sections
	toggleContent('#overview');
	$('#timeline, #thank-you, #map, #impressum, #quellen').hide();

	var navLinks = $('nav a');

	navLinks.on('click', function () {
		var sectionId = $(this).attr('href');
		toggleContent(sectionId);
		
		// Show/hide the timeline and other sections based on the section clicked
		if (sectionId === '#timeline') {
			$('#timeline').fadeIn();
		} else {
			$('#timeline').hide();
		}

		if (sectionId === '#thank-you') {
			$('#thank-you').fadeIn();
		} else {
			$('#thank-you').hide();
		}

		if (sectionId === '#map') {
			$('#map').fadeIn();
		} else {
			$('#map').hide();
		}

		if (sectionId === '#impressum') {
			$('#impressum').fadeIn();
		} else {
			$('#impressum').hide();
		}

		if (sectionId === '#quellen') {
			$('#quellen').fadeIn();
		} else {
			$('#quellen').hide();
		}
	});
	  $(window).on('scroll', function () {
		fnOnScroll();
	  });
  
	  $(window).on('resize', function () {
		fnOnResize();
	  });
  
  
	  var agTimeline = $('.js-timeline'),
		agTimelineLine = $('.js-timeline_line'),
		agTimelineLineProgress = $('.js-timeline_line-progress'),
		agTimelinePoint = $('.js-timeline-card_point-box'),
		agTimelineItem = $('.js-timeline_item'),
		agOuterHeight = $(window).outerHeight(),
		agHeight = $(window).height(),
		f = -1,
		agFlag = false;
  
	  function fnOnScroll() {
		agPosY = $(window).scrollTop();
  
		fnUpdateFrame();
	  }
  
	  function fnOnResize() {
		agPosY = $(window).scrollTop();
		agHeight = $(window).height();
  
		fnUpdateFrame();
	  }
  
	  function fnUpdateWindow() {
		agFlag = false;
  
		agTimelineLine.css({
		  top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
		  bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
		});
  
		f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
	  }
  
	  function fnUpdateProgress() {
		var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
		i = agTop + agPosY - $(window).scrollTop();
		a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
		n = agPosY - a + agOuterHeight / 2;
		i <= agPosY + agOuterHeight / 2 && (n = i - a);
		agTimelineLineProgress.css({height: n + "px"});
  
		agTimelineItem.each(function () {
		  var agTop = $(this).find(agTimelinePoint).offset().top;
  
		  (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
		})
	  }
  
	  function fnUpdateFrame() {
		agFlag || requestAnimationFrame(fnUpdateWindow);
		agFlag = true;
	  }
      var changeColorPoint = 500; // Adjust this value to your desired point

    // Check the scroll position and change background color
    window.addEventListener('scroll', function() {
        var timeline = document.getElementById('timeline');
        if (window.scrollY >= changeColorPoint) {
            timeline.classList.add('green');
        } else {
            timeline.classList.remove('green');
        }
    });
  
	});
	

	// Get references to the navigation links
const overviewLink = document.getElementById('overview-link');
const thankYouLink = document.getElementById('thank-you-link');
const mapLink = document.getElementById('map-link');
const timelineLink = document.getElementById('timeline-link');
const impressumLink = document.getElementById('impressum-link');
const quellenink = document.getElementById('quellen-link');



// Get references to the sections
const overviewSection = document.getElementById('overview');
const thankYouSection = document.getElementById('thank-you');
const mapSection = document.getElementById('map');
const timelineSection = document.getElementById('timeline');
const impressumSection = document.getElementById('impressum-link');
const quellenSection = document.getElementById('quellen-link');



// Function to hide all sections
function hideAllSections() {
    overviewSection.style.display = 'none';
    thankYouSection.style.display = 'none';
    mapSection.style.display = 'none';
    timelineSection.style.display = 'none';
	impressumSection.style.display = 'none';
	quellenSection.style.display = 'none';
}

// Event listeners to trigger section visibility
overviewLink.addEventListener('click', () => {
    hideAllSections();
    overviewSection.style.display = 'block';
});

thankYouLink.addEventListener('click', () => {
    hideAllSections();
    thankYouSection.style.display = 'block';
});

mapLink.addEventListener('click', () => {
    hideAllSections();
    mapSection.style.display = 'block';
});

timelineLink.addEventListener('click', () => {
    hideAllSections();
    timelineSection.style.display = 'block';
});

impressumLink.addEventListener('click', () => {
    hideAllSections();
    impressumSection.style.display = 'block';
});

quellenLink.addEventListener('click', () => {
    hideAllSections();
    quellenSection.style.display = 'block';
});



document.getElementById("impressum-button").addEventListener("click", function() {
    document.getElementById("impressum-overlay").style.display = "block";
  });

  document.getElementById("close-impressum").addEventListener("click", function() {
    document.getElementById("impressum-overlay").style.display = "none";
  });

  })(jQuery);
  