<script type="text/javascript">
function showlatestpostswiththumbs(t){document.write('<ul class="recent-posts-container">');for(var e=0;e<posts_no;e++){var r,n=t.feed.entry[e],i=n.title.$t;if(e==t.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if("replies"==n.link[o].rel&&"text/html"==n.link[o].type)var l=n.link[o].title,m=n.link[o].href;if("alternate"==n.link[o].rel){r=n.link[o].href;break}}var u;try{u=n.media$thumbnail.url}catch(p){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png"}var h=n.published.$t,f=h.substring(0,4),w=h.substring(5,7),v=h.substring(8,10),A=new Array;A[1]="Jan",A[2]="Feb",A[3]="Mar",A[4]="Apr",A[5]="May",A[6]="Jun",A[7]="Jul",A[8]="Aug",A[9]="Sep",A[10]="Oct",A[11]="Nov",A[12]="Dec",document.write('<li class="recent-posts-list">'),1==posts_date&&document.write('<div class="post-date">'+A[parseInt(w,10)]+" "+v+" "+f+"</div>"),1==showpoststhumbs&&document.write('<a href="'+r+'"><img class="recent-post-thumb" src="'+u+'"/></a>'),document.write('<div class="recent-post-title"><a href="'+r+'" target ="_top">'+i+"</a></div>");var g="",k=0;document.write('<div class="recent-posts-details">'),1==showcommentslink&&(1==k&&(g+=" <br> "),"1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),l='<a href="'+m+'" target ="_top">'+l+"</a>",g+=l,k=1),1==readmorelink&&(1==k&&(g+=" | "),g=g+'<a class="readmorelink" href="'+r+'" class="url" target ="_top">Read more</a>',k=1),document.write(g),document.write("</div>"),document.write("</li>")}document.write("</ul>")}
</script>
<script type="text/javascript">
var posts_no = 5;
var showpoststhumbs = true;
var readmorelink = true;
var showcommentslink = true;
var posts_date = true;
</script>
<script src="/feeds/posts/default?orderby=published&alt=json-in-script&callback=showlatestpostswiththumbs" rel="nofollow"></script>
<a style="font-size: 9px; color: #CECECE; float: right; margin-top: 5px;" href="http://helplogger.blogspot.com/2014/11/5-cool-recent-post-widgets-for-blogger.html" rel="nofollow">Recent Posts Widget</a>
<noscript>Your browser does not support JavaScript!</noscript>
<link href='http://fonts.googleapis.com/css?family=Lobster|Gloria+Hallelujah' rel='stylesheet' type='text/css' />
<style type="text/css">
img.recent-post-thumb {width:50px;height:50px;float:right;margin: -4px -35px 0px 0px; border: 4px solid #FCD6CB; border-radius: 100%;}
.recent-posts-container {font-family: 'Gloria Hallelujah', cursive;  float: left;width: 100%;min-height: 55px;margin: 5px 0px 5px 0px;padding: 0;font-size:12px;}
ul.recent-posts-container {counter-reset: countposts;list-style-type: none; background: #fff; }
ul.recent-posts-container li:before {content: counter(countposts,decimal);counter-increment: countposts;z-index: 2;position:absolute; left: -20px; font-size: 16px;color: #616662;background: #FCD6CB;padding: 9px 14px; border-radius: 100%; margin-top: 15px;}
ul.recent-posts-container li {padding:5px 0px;min-height:50px; list-style-type: none; margin: -2px 5px 5px 5px;  border-top: 2px solid #FCD6CB;}
ul.recent-posts-container {border: 2px solid #FCD6CB; }
.recent-posts-container a { text-decoration:none; }
.recent-posts-container a:hover { color: #222;}
.post-date {color:#e0c0c6; font-size: 11px; }
.recent-post-title a {font-size: 14px;color: #616662;}
.recent-post-title {padding: 6px 0px;}
.recent-posts-details a{ color: #888;}
.recent-posts-details {padding-bottom: 5px;}
a.readmorelink {color: #4DACE3;}
</style>
