<script type="text/javascript">

function LoadDetails(TotalFeed) {
 var PostTitles = new Array();
 var PostURLs = new Array();
 var PostLabels=new Array();
 var d="";
 if ("entry" in TotalFeed.feed) {
 var PostEntries = TotalFeed.feed.entry.length;
 for (var PostNum = 0; PostNum < PostEntries; PostNum++) {
	 var ThisPost = TotalFeed.feed.entry[PostNum];
	 PostTitles.push(ThisPost.title.$t);
	 d="";
	if("category"in TotalFeed.feed.entry[PostNum])
	{
	for(var b=0;b<TotalFeed.feed.entry[PostNum].category.length;b++)
		d+='<a href="/search/label/'+TotalFeed.feed.entry[PostNum].category[b].term+'?max-results=8">'+TotalFeed.feed.entry[PostNum].category[b].term+"</a> \u002C "; 
		b=d.lastIndexOf(" \u002C ");-1!=b&&(d=d.substring(0,b))
	}
	 
	 var ThisPostURL;
	 for (var LinkNum = 0; LinkNum < ThisPost.link.length; LinkNum++) {
		 if (ThisPost.link[LinkNum].rel == "alternate") {
		 ThisPostURL = ThisPost.link[LinkNum].href;
		 break;
		 }
	 }
	 PostURLs.push(ThisPostURL);
	 PostLabels.push(d);
 }
 }
 DisplayPosts(PostTitles, PostURLs, PostLabels);
}

function DisplayPosts(PostTitles, PostURLs, PostLabels) {
 var NumberOfEntries = PostTitles.length;
 document.write('<ul class="recent-posts-container">');
 for (var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++) {
	 document.write('<li><a href ="' + PostURLs[EntryNum] + '">' + PostTitles[EntryNum] + "</a> | <span>"+PostLabels[EntryNum]+"</span></li>");
 }
document.write('</ul>');
}
</script>
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
