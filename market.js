function Durstenfeld(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function SocialCSS( kind ) {
  if ( kind == "facebook" ) return '<i class="fa fa-facebook" aria-hidden="true"></i>';
  else if ( kind == "twitter" ) return '<i class="fa fa-twitter" aria-hidden="true"></i>';
  else if ( kind == "linkedin" ) return '<i class="fa fa-linkedin-square" aria-hidden="true"></i>';
  else if ( kind == "instagram" ) return '<i class="fa-brands fa-instagram" aria-hidden="true"></i>';
  else if ( kind == "github" ) return '<i class="fa-brands fa-github" aria-hidden="true"></i>';
  else if ( kind == "steam" ) return '<i class="fa-brands fa-steam" aria-hidden="true"></i>';
  else if ( kind == "itch" ) return '<i class="fa-brands fa-itch-io" aria-hidden="true"></i>';
  else if ( kind == "twitch" ) return '<i class="fa-brands fa-twitch" aria-hidden="true"></i>';
  else if ( kind == "discord" ) return '<i class="fa-brands fa-discord" aria-hidden="true"></i>';
  else if ( kind == "youtube" ) return '<i class="fa-brands fa-youtube" aria-hidden="true"></i>';
  return kind;
}

function SocialLI( links ) {
  var done="";
            links.forEach((e)=>{
               done+='<li><a target="_blank" href="'+e.url+'">'+SocialCSS(e.kind)+'</a></li>';
            });
  return done;
}

function LeftImage( e ) {
  return '<div class="row d_flex"><div class="col-md-6">'
              +'<div class="about_img"><figure><img src="'+e.image+'" alt="#"/></figure></div>'
              +'</div>'
              +'<div class="col-md-6"><div class="titlepage">'
              +'<h2><span class="blu"></span><a target="_blank" href="'+e.linkback+'">'+e.title+'</a></h2><h4>'+e.channel + ' on '+e.date + ' from '+ e.location + '</h4>'
              +'<p>'+e.paragraph+'</p>'
              +'<a class="read_more" target="_blank" href="'+e.linkback+'">Go &rarr;</a>'
              +'<div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12"><ul class="social_icon">'
              +SocialLI(e.links)
              +'</ul></div></div></div></div>';
}


let carouselCounter=0;

function CarouselSetup( e ) {
  var done='<div class="carousel-item active">';
  if ( carouselCounter > 0 ) {
    done='<div class="carousel-item">';
  }
  return done+
    '<div class="container"><div class="carousel-caption "><div class="row"><div class="col-md-12 margin_boot"><div class="test_box">'
    +'<i><a href="'+e.linkback+'" target="_blank"><img class="caroimage" src="'+e.image+'" alt="#"/></a></i>'
    +'<span>'+e.channel+'</span>'
    +'<h4>'+e.title+'</h4>'
    +'<p>'+e.paragraph+'</p>'
    +'<div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12"><ul class="social_icon">'
    +SocialLI(e.links)
    +'</ul></div>'
    +'</div></div></div></div></div>'
    +'</div>'
  ;
}

function CarouselIndicator( e ) {
  if ( carouselCounter==0 ) {
    carouselCounter++;
    return '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
  } else {
    carouselCounter++;
    return '<li data-target="#myCarousel" data-slide-to="'+(carouselCounter-1)+'"></li>';
  }
}

function IndieDevSpace() {
 var
  myCarousel=document.getElementById("myCarousel"),
  myCarouselInner=document.getElementById("myCarouselInner"),
             myCarouselInner_html="",
  myCarouselIndicators=document.getElementById("myCarouselIndicators"),
             myCarouselIndicators_html="",
  gamelist=document.getElementById("gamelist"),
             gamelist_html="",
  toollist=document.getElementById("toollist"),
             toollist_html="";

Durstenfeld(indiedevs);
indiedevs.forEach((e)=> {
  if ( e.kind == "company" ) {
              myCarouselInner_html += CarouselSetup(e);
              myCarouselIndicators_html += CarouselIndicator(e);
  } else if ( e.kind == "game" ) {
              gamelist_html += LeftImage(e);
  } else { // tools and open source
              toollist_html += LeftImage(e);
  }
 });

 gamelist.innerHTML=gamelist_html;
 toollist.innerHTML=toollist_html;
 myCarouselIndicators.innerHTML=myCarouselIndicators_html;
 myCarouselInner.innerHTML=myCarouselInner_html;
//  console.log(myCarouselInner);
  
}
