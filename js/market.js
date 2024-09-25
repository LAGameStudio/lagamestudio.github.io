function SocialCSS( kind ) {
  if ( kind == "facebook" ) return '<i class="fa fa-facebook" aria-hidden="true"></i>';
  else if ( kind == "twitter" ) return '<i class="fa fa-twitter" aria-hidden="true"></i>';
  else if ( kind == "linkedin" ) return '<i class="fa fa-linkedin-square" aria-hidden="true"></i>';
  else if ( kind == "instagram" ) return '<i class="fa-brands fa-instagram" aria-hidden="true"></i>';
  else if ( kind == "github" ) return '<i class="fa-brands fa-github" aria-hidden="true"></i>';
  else if ( kind == "steam" ) return '<i class="fa-brands fa-steam" aria-hidden="true"></i>';
  else if ( kind == "itch" ) return '<i class="fa-brands fa-itch-io" aria-hidden="true"></i>';
  else if ( kind == "twitch" ) return '<i class="fa-brands fa-twitch" aria-hidden="true"></i>';
  return kind;
}

function SocialLI( links ) {
  var done="";
            links.forEach((e)=>{
               done+='<li><a href="'+e.url+'">'+SocialCSS(e.kind)+'</a></li>';
            });
  return done;
}

function LeftImage( e ) {
  return '<div class="row d_flex"><div class="col-md-6">'
              +'<div class="about_img"><figure><img src="'+e.image+'" alt="#"/></figure></div>'
              +'</div>'
              +'<div class="col-md-6"><div class="titlepage">'
              +'<h2><span class="blu"></span><a href="'+e.linkback+'">'+e.title+'</a></h2>'
              +'<p>'+e.paragraph+'</p>'
              +'<a class="read_more" href="'+e.linkback+'">Go &rarr;</a>'
              +'<div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12"><ul class="social_icon">'
              +SocialLI(e.links)
              +'</ul></div></div></div></div>';
}

function CarouselSetup( e ) {
            return "";
}

function CarouselIndicator( e ) {
            return "";
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

indiedevs.forEach((e)=> {
  if ( e.kind == "company" ) {
              myCarouselInner_html += CarouselSetup(e);
              myCarouselIndicators_html += CarouselIndicator(e);
  } if ( e.kind == "game" ) {
              gamelist_html += LeftImage(e);
  } else { // tools and open source
              toollist_html += LeftImage(e);
  }
 });

 gamelist.innerHTML=gamelist_html;
 toollist.innerHTML=toollist_html;
}
